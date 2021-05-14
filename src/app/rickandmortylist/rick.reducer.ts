import { createReducer, on } from '@ngrx/store';
import { Personaje } from '../models/personaje.model';
import { cargarPersonajes, cargarPersonajesError, cargarPersonajesSuccess } from './rick.actions';


export interface PersonajesState {
    personajes: Personaje[];
    cargando: boolean;
    cargaFin: boolean;
    error: any;
}

export const EstadoInicial: PersonajesState = {
    personajes: [{ nombre: 'xxxx', edad: 0 }],
    cargando: false,
    cargaFin: false,
    error: null
};

// tslint:disable-next-line: variable-name
const _personajesReducer = createReducer(
    EstadoInicial,
    on(cargarPersonajes, (state) => ({ ...state, cargando: true })),
    // tslint:disable-next-line: max-line-length
    on(cargarPersonajesSuccess, (state, { listPer }) => ({
        ...state,
        cargando: false,
        cargaFin: true,
        personajes: [...listPer]
    })),
    on(cargarPersonajesError, (state, error) => ({ ...state, cargando: false, cargaFin: false, error }))
);


// tslint:disable-next-line: typedef
export function personajesReducer(state, action) {
    return _personajesReducer(state, action);
}
