import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
