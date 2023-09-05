import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SignupRoutingModule } from './signup-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SignupModule { }
