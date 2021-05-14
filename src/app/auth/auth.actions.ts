import { createAction, props } from '@ngrx/store';
import { Usuario } from './usuario.model';

export const setLogin = createAction('[Login Usuario] setLogin', props<{ user: Usuario }>());
export const unSetLogin = createAction('[Login Usuario] unSetLogin');
