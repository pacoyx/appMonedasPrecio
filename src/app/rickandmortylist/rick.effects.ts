import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RickandmortyService } from '../services/rickandmorty.service';
import { cargarPersonajes, cargarPersonajesError, cargarPersonajesSuccess } from './rick.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PersonajesEffects {

    constructor(private actions$: Actions, private rickServis: RickandmortyService) { }

    cargarPersonajes$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarPersonajes),
            mergeMap(
                () => this.rickServis.cargarPersonajes()
                    .pipe(
                        map(dataPer => cargarPersonajesSuccess({ listPer: dataPer })),
                        catchError(err => of(cargarPersonajesError({ error: err })))
                    )
            )
        ));

}
