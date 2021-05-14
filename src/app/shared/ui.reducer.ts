import { createReducer, on } from '@ngrx/store';
import { loading, loaded } from './ui.actions';

export interface State {
    estadoui: boolean;
}

export const initialState: State = {
    estadoui: false
};

const _uiReducer = createReducer(
    initialState,
    on(loading, (state) => ({ ...state, estadoui: true })),
    on(loaded, (state) => ({ ...state, estadoui: false }))
);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}
