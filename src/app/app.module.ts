import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';

import {MovieService} from './services/movie.service';

import {Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
