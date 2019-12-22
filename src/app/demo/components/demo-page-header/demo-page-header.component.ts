import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-page-header',
  templateUrl: './demo-page-header.component.html',
  styleUrls: ['./demo-page-header.component.scss'],
})
export class DemoPageHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
