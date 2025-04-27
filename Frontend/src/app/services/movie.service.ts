import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, forkJoin } from 'rxjs';


export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  releaseYear: number;
  imageUrl?: string;
  // add any other fields you have
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:5151/api/movies';
  private tmdbUrl = 'https://api.themoviedb.org/3/search/movie';
  private TMDB_API_KEY = '23ae00dc14fdefd0d6a63919eda8e94d';
  private posterBaseUrl = 'https://image.tmdb.org/t/p/w500';  

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:5151/api/movies');
  }

  getPoster(title: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=23ae00dc14fdefd0d6a63919eda8e94d&query=${title}`;
    return this.http.get(url);
  }
  
  

  
  
}

