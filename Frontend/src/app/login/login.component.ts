import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   email= ''; 
   password= '' ;

  constructor(private router: Router) {}

  loginToMyAccount() {
   
    if (this.email && this.password){
      console.log('user logged in:',this.email)


      this.router.navigate(['/movie-list'])
    }
    
  }

  
  createAccount()
  {
    this.router.navigate(['/signup']); //Navigates to the signup page
  }
  goToHome() {
    this.router.navigate(['/']); // Navigates to the home page
  }
}

