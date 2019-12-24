import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadioButtonsComponent } from './checkbox-radio-buttons.component';

describe('CheckboxRadioButtonsComponent', () => {
  let component: CheckboxRadioButtonsComponent;
  let fixture: ComponentFixture<CheckboxRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
