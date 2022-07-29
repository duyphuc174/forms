import { Component, OnInit } from '@angular/core';

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
    }
  }

  onSelect_2() {
    if(!this.signUp.selected) {
      this.signUp.selected = true
      this.signIn.selected = false
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
