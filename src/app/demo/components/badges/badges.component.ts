import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent implements OnInit {
  notifications = 2;
  hiddenNotification = 0;

  constructor() {}

  ngOnInit() {}
}
