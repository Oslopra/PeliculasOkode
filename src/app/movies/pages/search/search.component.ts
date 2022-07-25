import { Component} from '@angular/core';
import { Movie } from '../../interfaces/movies-interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movies: Movie[] = [];
  suggestions: Movie[] = [];
  input = '';

  constructor(private ms: MoviesService) { }

  fSearch(input: string) {
    this.ms.getMovieByName(input)
    .subscribe(movies => {
      this.movies = movies.results;
      this.suggestions = [];
    },
    (err) => this.movies = [])
  }

  fSuggestions(input: string) {
    this.ms.getMovieByName(input)
    .subscribe(movies => this.suggestions = movies.results.splice(0,4),
    (err) => this.suggestions = []
    )
  }
}
