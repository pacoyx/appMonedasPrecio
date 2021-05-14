import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Personaje } from '../models/personaje.model';
import { cargarPersonajes } from './rick.actions';

@Component({
  selector: 'app-rickandmortylist',
  templateUrl: './rickandmortylist.component.html',
  styleUrls: ['./rickandmortylist.component.css']
})
export class RickandmortylistComponent implements OnInit {
  personajesRick: Personaje[] = [];
  error: any;
  cargando: boolean;

  // movies$: Observable<any> = this.store.select(state => state.rick.personajes);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('rick').subscribe(subs => {
      console.log('data de personajes rick and morty:::');
      this.personajesRick = subs.personajes;
      this.error = subs.error;
      this.cargando = subs.cargando;
    });

    this.store.dispatch(cargarPersonajes());

    // this.rickServices.cargarPersonajes().subscribe(
    //   personajes => {
    //     console.log(personajes);
    //   }
    // );
  }

}
