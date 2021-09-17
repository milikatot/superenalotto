import { MaterialModule } from './../shared/material.module';
import { PlayedEffects } from './../pages/home/store/played.effects';
import { playedReducer, PlayedState } from './../pages/home/store/played.reducers';
import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, RouterReducerState, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './router/store/router.effects';


export interface AppState {
  router: RouterReducerState,
  numbers: PlayedState,  
}

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forRoot({
      numbers: playedReducer,
      router: routerReducer
    },
    {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot([
      RouterEffects,
      PlayedEffects
    ])
  ],
  exports: [
    FooterComponent
  ]
})
export class CoreModule { }
