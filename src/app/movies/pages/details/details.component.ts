import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie!: Movie;

  constructor(private ms: MoviesService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.params
    .pipe(
      switchMap(({id}) => this.ms.getMovieById(id))
    ).subscribe(movie => this.movie = movie);
  }

}
