import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2020, 0, 24);

  constructor() {}

  ngOnInit() {}

  dateFilter(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
}
