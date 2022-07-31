import { Injectable } from '@angular/core';

export interface User {
  id: number
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})


export class FormService {

  users: User[] = [
    {id: 1, username: 'admin@gmail.com', password: '123'},
    {id: 2, username: 'abc@gmail.com', password: '123'},
  ]

  currentId = 2;

  addUser(user: User) {
    user.id = ++this.currentId;
    this.users.push(user)
  }

  getUsers() {
    return this.users
  }
  
  constructor() { }
}
