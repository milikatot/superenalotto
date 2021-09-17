import { PlayedState } from './played.reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/core.module';

export const getNumbers = (state: AppState) => state.numbers;

export const getPlayed = createSelector(
    getNumbers,
    (state: PlayedState) => state.played
);

export const getPlayedError = createSelector(
    getNumbers,
    (state: PlayedState) => state.error
);

export const getPlayedLoading = createSelector(
    getNumbers,
    (state: PlayedState) => state.loading
);