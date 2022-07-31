import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormType } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form: FormType = {
    username: 'Username',
    password: 'Password',
    confirmPassword: 'Comfirm Password',
    submit: 'Submit'
  }

  f = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    confirmPassword: ['',[Validators.required]],
  })



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
