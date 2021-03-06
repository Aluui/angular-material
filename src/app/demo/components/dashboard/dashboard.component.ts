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
      {
        routerLink: '/spinner',
        description: 'Go to Progress Spinner page',
      },
      {
        routerLink: '/toolbar',
        description: 'Go to Toolbar page',
      },
      {
        routerLink: '/sidenav',
        description: 'Go to Sidenav page',
      },
      {
        routerLink: '/menus',
        description: 'Go to Menus page',
      },
      {
        routerLink: '/layout-components',
        description: 'Go to Lists page',
      },
      {
        routerLink: '/grids',
        description: 'Go to Grids page',
      },
      {
        routerLink: '/expansion-panels',
        description: 'Go to Expansion Panels and Accordions page',
      },
      {
        routerLink: '/cards',
        description: 'Go to Cards page',
      },
      {
        routerLink: '/tabs',
        description: 'Go to Tabs page',
      },
      {
        routerLink: '/stepper',
        description: 'Go to Stepper page',
      },
      {
        routerLink: '/form-fields',
        description: 'Go to Form Fields page',
      },
      {
        routerLink: '/virtual-scrolling',
        description: 'Go to Virtual Scrolling page',
      },
    ];
  }
}
