import { createAction, props } from '@ngrx/store';
import { Personaje } from '../models/personaje.model';

export const cargarPersonajes = createAction('[RickAndMorty] Cargar Personajes');

export const cargarPersonajesSuccess = createAction('[RickAndMorty] Cargar Personajes Success',
    props<{ listPer: Personaje[] }>());

export const cargarPersonajesError = createAction('[RickAndMorty] Cargar Personajes Error',
    props<{ error: any }>());
