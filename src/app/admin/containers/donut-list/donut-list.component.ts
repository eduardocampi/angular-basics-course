import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut';

@Component({
  selector: 'donut-list',
  template: `
    <div *ngFor="let donut of donuts">
      <donut-card [donut]="donut"></donut-card>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor () {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: '12jk3hbr12',
        name: 'Just chocolate',
        icon: 'just-chocolate',
        price: 123,
        description: 'blablabla chocolate'
      },
      {
        id: '2kjrt',
        name: 'Glazed fudge',
        icon: 'glazed-fudge',
        price: 153,
        description: 'blablabla glazed'
      },
      {
        id: 'k24jrth',
        name: 'Caramel',
        icon: 'caramel-swirl',
        price: 113,
        description: 'blablabla caramel'
      }
    ]
  }
}
