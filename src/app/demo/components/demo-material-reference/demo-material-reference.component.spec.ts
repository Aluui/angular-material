import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterialReferenceComponent } from './demo-material-reference.component';

describe('DemoMaterialReferenceComponent', () => {
  let component: DemoMaterialReferenceComponent;
  let fixture: ComponentFixture<DemoMaterialReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMaterialReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMaterialReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
