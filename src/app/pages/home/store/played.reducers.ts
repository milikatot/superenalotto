import { Played } from './../../../shared/Models/played';
import { Action, createReducer, on } from "@ngrx/store";
import * as PlayedActions from "./played.actions";

export interface PlayedState {
    played: Played;
    error: boolean;
    loading: boolean;
}

export const initialState: PlayedState = {
    played: {} as Played,
    error: false,
    loading: false
}

export const reducer = createReducer(
    initialState,
    on(PlayedActions.newPlayed, (state, action) => ({ played: {} as Played, error: false, loading: true })),
    on(PlayedActions.newPlayedSuccess, (state, action) => ({ played: { ...action.played}, error: false, loading: false })),
    on(PlayedActions.newPlayedFalied, (state, action) => ({ ...state, error: true, loading: false })),
    on(PlayedActions.clearPlayed, (state, action) => ({ played: {} as Played, error: false, loading: false }))
);


export function playedReducer(state: PlayedState | undefined, action: Action){
    return reducer(state, action);
}