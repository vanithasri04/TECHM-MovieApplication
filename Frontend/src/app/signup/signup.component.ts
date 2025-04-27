import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username ='';
  email='';
  password='';
  constructor(private router: Router) {}

  // register() {
  //   if (this.user.password !== this.confirmPassword) {
  //     this.error = "Passwords do not match";
  //     return;
  //   }

  //   console.log('Signup Data:', this.user);

  //   this.authService.register(this.user).subscribe({
  //     next: (res) => {
  //       alert('Registration successful');
  //       this.router.navigate(['/login']);
  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //       this.error = 'Registration failed';
  //     }
  //   });
  signup() {

    if (this.username && this.email && this.password) { // Check if all fields are filled
    
    console.log('User signed up:', this.username, this.email);
    
    this.router.navigate(['/login']);
    }
    else
    {
      alert('Please fill in all fields before signing up.');
    }

  }
  
  login(){
    this.router.navigate(['/login']) //navigate to login page
  }

  goToHome() {
    this.router.navigate(['/']); // Navigates to the home page
  }
}



