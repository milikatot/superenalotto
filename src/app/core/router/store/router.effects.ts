import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from 'rxjs/operators';
import { Location } from "@angular/common";

import * as RouterActions from './router.actions';

@Injectable()
export class RouterEffects {

    goEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.go),
        tap(action => {
            this.router.navigate(action.path, action.extras);
        })
    ), 
    { 
        dispatch: false 
    }
    );

    backEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back )
    ));

    forwardEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.forward)
    ));
    
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) {}
}