import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut';

@Component({
  selector: 'donut-card',
  template: `
    <div class="donut-card">
      <img
        src="assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon">
      <div>
        <p class="donut-name"> {{ donut.name }} </p>
        <p class="donut-price">{{ donut.price }} </p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  constructor () {}
}
