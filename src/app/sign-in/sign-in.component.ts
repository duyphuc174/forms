import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form = {
    username: "Tên đăng nhập",
    password: "Mật khẩu",
    submit: 'Đăng nhập'
  }

  submitTable = false
  submitted = false

  successSubmit!: boolean

  f = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
  })

  submit() {
    if(this.submitTable) {
      this.submitted = true
     if(this.formService.getUsers().find(user => user.username === this.username?.value)){
      if(this.formService.getUsers().find(user => user.password === this.password?.value)) {
        this.successSubmit = true
      }
     }
    }
  }

  canSubmit() {
    if (!(this.password?.errors || this.username?.errors)) {
      this.submitTable = true
    } else {
      this.submitTable = false
    }
  }

  constructor(private fb: FormBuilder,public formService: FormService) { }

  ngOnInit(): void {
    
  }
  
  ngDoCheck(): void {
    this.canSubmit()    
  }

  checkValueError(value: string) {
    return this.f.get(value)?.invalid && (this.f.get(value)?.dirty || this.f.get(value)?.touched)
  }

  validate(value: string, rule: string) {
    return this.f.get(value)?.errors?.[rule]
  }

  get username() {
    return this.f.get('username')
  }

  get password() {
    return this.f.get('password')
  }

}
