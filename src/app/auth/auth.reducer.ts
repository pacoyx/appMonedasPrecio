import { createReducer, on } from '@ngrx/store';
import { setLogin, unSetLogin } from './auth.actions';
import { Usuario } from './usuario.model';

export const initialState: Usuario = {
    usuario: null,
    clave: null
};

const _authReducer = createReducer(
    initialState,
    on(setLogin, (state, { user }) => ({ usuario: user.usuario, clave: user.clave })),
    on(unSetLogin, state => initialState),
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}
