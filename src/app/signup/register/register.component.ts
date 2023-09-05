import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };

  // Add properties to hold the message and its class:
  message: string = '';
  messageClass: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('https://139e-176-201-40-194.ngrok-free.app/auth/signup', this.user).subscribe(
      (response: any) => {
        if (response && response.message) {
          this.message = response.message; // Assuming the server sends a message in the response body
          this.messageClass = 'success';
        } else {
          this.message = 'User registered successfully!';
          this.messageClass = 'success';
        }
      },
      (error) => {
        if (error && error.error && error.error.message) {
          this.message = error.error.message; // Use the error message from the server if available
        } else {
          this.message = 'There was an error during the registration.';
        }
        this.messageClass = 'error';
      }
    );
  }
}
