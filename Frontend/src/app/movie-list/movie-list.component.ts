
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
selectedLanguage: any;

  constructor(private movieService: MovieService, private router: Router) {}
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        const tempMovies: Movie[] = [];
  
        data.forEach((movie, index) => {
          this.movieService.getPoster(movie.title).subscribe((res) => {
            const posterPath = res.results?.[0]?.poster_path;
            movie.imageUrl = posterPath
              ? `https://image.tmdb.org/t/p/w500${posterPath}`
              : 'assets/default-movie.jpg';
  
            tempMovies.push(movie);
  
            
            if (tempMovies.length === data.length) {
              this.movies = tempMovies;
              console.log('Final movie list:', this.movies);
            }
          });
        });
      },
      error: (err) => {
        console.error('Failed to fetch movies:', err);
      }
    });
  }

  

  
              

  goToSearch() {
    this.router.navigate(['/search']);
  }

  viewDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
