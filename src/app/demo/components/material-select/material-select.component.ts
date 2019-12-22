import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-select',
  templateUrl: './material-select.component.html',
  styleUrls: ['./material-select.component.scss'],
})
export class MaterialSelectComponent implements OnInit {
  selectedValue: string;
  constructor() {}

  ngOnInit() {}
}
