import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageHeaderComponent } from './demo-page-header.component';

describe('DemoPageHeaderComponent', () => {
  let component: DemoPageHeaderComponent;
  let fixture: ComponentFixture<DemoPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
