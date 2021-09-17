import { Observable } from 'rxjs';
import { getPlayed, getPlayedLoading } from './store/played.selectors';
import * as PlayedActions from "./store/played.actions";
import { Played } from './../../shared/Models/played';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/core.module';

@Component({
  selector: 'mich-home',
  template: `
     <mat-card class="fullpage-centered">
      <mat-card-title class="redBox h2">
        SuperEnalotto
      </mat-card-title>
      <mat-card-content fxLayout="row">
        <mich-grid-result [played]="played$ | async"></mich-grid-result>
      </mat-card-content>
      <mat-card-actions align="end" >
        <button mat-mini-fab color="primary" (click)="newNumber()" [disabled]="loading$ | async">
          <i class="material-icons">wifi_protected_setup</i>
        </button>
        <button mat-mini-fab color="basic" class="container" (click)="clear()" [disabled]="loading$ | async">
          <i class="material-icons">clear</i>
        </button>
      </mat-card-actions>
      <mat-card-footer>
        <mat-progress-bar mode="indeterminate" *ngIf="loading$ | async"></mat-progress-bar>
      </mat-card-footer>
    </mat-card>
     
  `,
  styles: [`
  .container {
      margin-left : 10px;
    }
  `
  ]
})
export class HomeComponent {

  loading$: Observable<boolean> = this.store.select(getPlayedLoading);
  played$: Observable<Played> = this.store.pipe(select(getPlayed));
 

  constructor(private store: Store<AppState>) { }  

  clear = () => this.store.dispatch(PlayedActions.clearPlayed());

  newNumber = () => this.store.dispatch(PlayedActions.newPlayed());
  
}
