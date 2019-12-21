import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  opened = false;
  modes: string[];
  sidenavMode: string;
  constructor() {}

  ngOnInit() {
    this.modes = ['over', 'push', 'side'];

    this.sidenavMode = this.modes[0];
  }
}
