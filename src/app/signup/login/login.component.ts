import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  message: string = '';
  messageClass: string = '';

  constructor(private http: HttpClient) { }

  onLogin() {
    this.http.post('https://139e-176-201-40-194.ngrok-free.app/auth/login', this.user).subscribe(
      (response: any) => {
        if (response && response.message) {
          this.message = response.message;
          this.messageClass = 'success';
        } else {
          this.message = 'Logged in successfully!';
          this.messageClass = 'success';
        }
      },
      (error) => {
        if (error && error.error && error.error.message) {
          this.message = error.error.message;
        } else {
          this.message = 'There was an error during the login process.';
        }
        this.messageClass = 'error';
      }
    );
  }
}
