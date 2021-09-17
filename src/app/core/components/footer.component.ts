import { Component } from '@angular/core';

@Component({
  selector: 'mich-footer',
  template: `
    <footer class="footer text-center">
      <mat-toolbar-row>
        <span>{{ date | date:'yyyy'}} &#169; <a href="https://michelecorazza.name/">Developer</a></span>
      </mat-toolbar-row>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent { 
  date = Date.now();
}
