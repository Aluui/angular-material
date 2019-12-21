import { Component, OnInit } from '@angular/core';
import { IPageLink } from 'src/app/shared/models/page-link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  links: IPageLink[];

  constructor() {}

  ngOnInit() {
    this.links = [
      {
        routerLink: '/typography',
        description: 'Go to Typography page',
      },
      {
        routerLink: '/flexbox',
        description: 'Go to Flexbox page',
      },
      {
        routerLink: '/buttons',
        description: 'Go to Buttons page',
      },
      {
        routerLink: '/button-toggle',
        description: 'Go to Toggle Buttons page',
      },
      {
        routerLink: '/icons',
        description: 'Go to Icons page',
      },
      {
        routerLink: '/badges',
        description: 'Go to Badges page',
      },
    ];
  }
}
