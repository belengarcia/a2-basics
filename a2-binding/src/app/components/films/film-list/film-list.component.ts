import { Film } from './../../../shared/models/film.model';
import filmsMock from './../../../shared/data/films.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html'
})
export class FilmListComponent {
  films: Array<Film> = filmsMock;
  // filmToCreate: Film = new Film();
  // posterPreview: string = '';
  // searchField: string = 'title';

  onClickDeleteFilm(film : Film): void {
    this.films = this.films.filter(f => f !== film);
  }

  onClickCreateFilm(filmToCreate : Film): void {
    this.films.push(filmToCreate);
  }

}


