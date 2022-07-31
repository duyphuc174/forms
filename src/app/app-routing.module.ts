import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
