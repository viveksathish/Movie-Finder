import { Component, OnInit } from '@angular/core';

import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieservice: MovieService) {
      this._movieservice.getPopular().subscribe(res => {
          this.popularList = res.results;
          console.log(res);
      });
      this._movieservice.getInTheaters().subscribe(res => {
        this.theatersList = res.results;
    });
   }

   searchMovies() {
      this._movieservice.searchMovies(this.searchStr).subscribe(res => {
          this.searchRes = res.results;
      })
   }

  ngOnInit() {
  }

}
