import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/core.module';

import * as RouterActions from './core/router/store/router.actions';

@Component({
  selector: 'mich-root',
  template: `

  <router-outlet></router-outlet>
  <mich-footer fxFlexOffset="auto"></mich-footer>
  `,
  styles: ['']
})
export class AppComponent { 

  constructor(private store: Store<AppState>){ }

  go(url: string){
    this.store.dispatch(RouterActions.go({ path: [url] }));
  }
}
