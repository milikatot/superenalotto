import { Component, Input, OnInit } from '@angular/core';
import { Played } from 'src/app/shared/Models/played';

@Component({
  selector: 'mich-grid-result',
  template: `
    <div class="results">      
      <mich-normal-number [number]="played?.num1"></mich-normal-number>
      <mich-normal-number [number]="played?.num2"></mich-normal-number>
      <mich-normal-number [number]="played?.num3"></mich-normal-number>
      <mich-normal-number [number]="played?.num4"></mich-normal-number>
      <mich-normal-number [number]="played?.num5"></mich-normal-number>
      <mich-normal-number [number]="played?.num6"></mich-normal-number>
      <mich-normal-number [number]="played?.numSS" className="superstar"></mich-normal-number>
    </div>
  `,
  styles: [
  ]
})
export class GridResultComponent {
  @Input() played: Played | null = null;
}
