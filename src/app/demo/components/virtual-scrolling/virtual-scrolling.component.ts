import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss'],
})
export class VirtualScrollingComponent implements OnInit {
  longArray = [...Array(1000).keys()];
  constructor() {}

  ngOnInit() {}
}
