// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   constructor(private router: Router) {}

//   login() {
    
//     // Navigate to movie list after login
//     this.router.navigate(['/login']);
//   }

//   goToSignup() {
//     this.router.navigate(['/signup']);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  login() {
    
    // Navigate to movie list after login
    this.router.navigate(['/login']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
  goToHome() {
    this.router.navigate(['/']); // Navigates to the home page
  }
}