import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModelComponent } from './alert-model.component';

describe('AlertModelComponent', () => {
  let component: AlertModelComponent;
  let fixture: ComponentFixture<AlertModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
