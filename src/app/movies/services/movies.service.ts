import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies, Movie } from '../interfaces/movies-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {

   }

   getMovieByName(name: string) {
     return this.http.get<Movies>(environment.apiurl + '/search/movie?query=' + name + '&api_key=' + environment.key);  
   }
   
   getMovieById(id: number) {
    return this.http.get<Movie>(environment.apiurl + '/movie/' + id + '?api_key=' + environment.key);  
   }
   
}
