// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface User {
//   email: string;
//   password: string;
  
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:5151/api/auth'; 

//   constructor(private http: HttpClient) {}

//   register(user: User): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user, {
//     headers: { 'Content-Type': 'application/json' }
//     } );
//   }

//   login(user: User): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, user ,{
//             headers: { 'Content-Type': 'application/json' }  
//         }
//     );
//   }
// }
