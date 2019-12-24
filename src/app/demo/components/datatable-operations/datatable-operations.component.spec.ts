import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableOperationsComponent } from './datatable-operations.component';

describe('DatatableOperationsComponent', () => {
  let component: DatatableOperationsComponent;
  let fixture: ComponentFixture<DatatableOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
