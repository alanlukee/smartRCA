import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = ''; 

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = { username: this.username, password: this.password };
  
    this.http.post('http://localhost:8080/api/auth/login', loginData, { responseType: 'text' }).subscribe({
      next: (response: any) => {
        if (response.includes('Login successful') || response.includes('token')) { 
          localStorage.setItem('token', response); // Store JWT token if available
          this.successMessage = 'Login successful!';
          this.errorMessage = ''; // Clear any previous error
          
          setTimeout(() => {
            this.router.navigate(['/dashboard']); // Redirect after success
          }, 2000);
        } else {
          this.errorMessage = 'Invalid username or password'; // Handle login failure
          this.successMessage = ''; // Clear success message
        }
      },
      error: () => {
        this.errorMessage = 'Invalid username or password'; // Handle HTTP error cases
        this.successMessage = '';
      }
    });
  }
  
}
