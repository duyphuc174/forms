import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormService, User } from '../form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent implements OnInit {

  form = {
    username: 'Tên đăng nhập',
    password: 'Mật khẩu',
    confirmPassword: 'Nhập lại mật khẩu',
    submit: 'Đăng ký'
  }

  submitTable = false
  submitted = false

  confirmSuccess = true

  successSubmit!: boolean

  checkConfirmPassword() {
    if(this.password?.value === this.confirmPassword?.value) {
      return this.confirmSuccess = true
    } else {
      return this.confirmSuccess = false
    }
  }


  f = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    confirmPassword: ['',[Validators.required]],
  })

  submit() {
    if(this.submitTable) {
      if(this.checkConfirmPassword()) {
        this.submitted = true
        if(this.formService.getUsers().find(user => user.username === this.username?.value)) {
          this.successSubmit = false
        } else {
          this.successSubmit = true
          this.formService.addUser(this.f.value as User)
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

  constructor(private fb: FormBuilder, public formService: FormService) { }

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

  get confirmPassword() {
    return this.f.get('confirmPassword')
  }

}
