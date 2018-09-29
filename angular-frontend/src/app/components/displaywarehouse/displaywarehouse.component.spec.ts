import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaywarehouseComponent } from './displaywarehouse.component';

describe('DisplaywarehouseComponent', () => {
  let component: DisplaywarehouseComponent;
  let fixture: ComponentFixture<DisplaywarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaywarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaywarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
