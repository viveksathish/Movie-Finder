import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(private router: ActivatedRoute,
              private _movieservice: MovieService ) { }

  ngOnInit() {

      this.router.params.subscribe((params) => {
        let id = params['id'];
        this._movieservice.getMovie(id).subscribe(movie => {
           this.movie = movie;
        })
      } )
  }

}
