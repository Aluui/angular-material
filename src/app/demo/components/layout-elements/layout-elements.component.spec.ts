import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutElementsComponent } from './layout-elements.component';

describe('LayoutElementsComponent', () => {
  let component: LayoutElementsComponent;
  let fixture: ComponentFixture<LayoutElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
