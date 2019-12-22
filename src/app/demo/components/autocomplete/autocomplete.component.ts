import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  options = ['Angular', 'React', 'Vue'];
  objectOptions = [
    {
      name: 'Angular',
    },
    {
      name: 'Angular Material',
    },
    {
      name: 'React',
    },
    {
      name: 'Vue',
    },
  ];

  // myFormGroup = new FormGroup(){
  //   myControl = new FormControl()
  // };
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option =>
      option.toLocaleLowerCase().includes(filterValue)
    );
  }
}
