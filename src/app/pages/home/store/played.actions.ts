import { Played } from './../../../shared/Models/played';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const newPlayed = createAction('[Played] create');

export const newPlayedSuccess = createAction(
    '[Played] success',
    props<{ played: Played }>()
);

export const newPlayedFalied = createAction('[Played] failed');

export const clearPlayed = createAction('[Played] clear');