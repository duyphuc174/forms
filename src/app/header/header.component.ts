import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Button {
  name: string
  selected: boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signIn: Button = {
    name: 'Đăng nhập',
    selected: true
  }

  signUp: Button = {
    name: 'Đăng ký',
    selected: false
  }

  onSelect_1() {
    if(!this.signIn.selected) {
      this.signIn.selected = true
      this.signUp.selected = false
      this.router.navigateByUrl('/sign-in')
    }
  }

  onSelect_2() {
    if(!this.signUp.selected) {
      this.signUp.selected = true
      this.signIn.selected = false
      this.router.navigateByUrl('/sign-up')

    }
  }

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

}
