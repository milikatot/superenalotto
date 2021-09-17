import { Component, Input } from '@angular/core';

@Component({
  selector: 'mich-normal-number',
  template: `
    <span [ngClass]="className">
      <ng-container *ngIf="number"> {{ number }}</ng-container>
    </span>
  `,
  styles: [
  ]
})
export class NormalNumberComponent {
  @Input() className: string = "ball";
  @Input() number: number | undefined = undefined;

}
