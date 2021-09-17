import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { PlayedService } from '../services/played.service';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as PlayedActions from "./played.actions";

@Injectable()
export class PlayedEffects{

    constructor(
        private actions$: Actions,
        private service: PlayedService
    ){}

    newPlayed$ = createEffect(() => this.actions$.pipe(
        ofType(PlayedActions.newPlayed),
        debounceTime(1500),
        switchMap(() => this.service.newPlayed()
        .pipe(            
            map(played => PlayedActions.newPlayedSuccess({ played })),
            catchError(() => of(PlayedActions.newPlayedFalied()))
        ))
    ));

}