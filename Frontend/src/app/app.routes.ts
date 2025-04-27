import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // ✅ Home is the default page
  { path: 'home', component: HomeComponent },  // Home Page
  { path: 'signup', component: SignupComponent },  // Signup Page
  { path: 'login',component:LoginComponent},//Login Page
  { path: 'movie-list', component: MovieListComponent },  // Movies List
  { path: 'movie-details/:id', component: MovieDetailsComponent },  // Movie Details
  { path: 'search', component: MovieSearchComponent },  // Search Movies
];

