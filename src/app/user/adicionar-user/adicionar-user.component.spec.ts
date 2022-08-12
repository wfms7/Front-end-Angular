import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarUserComponent } from './adicionar-user.component';

describe('AdicionarUserComponent', () => {
  let component: AdicionarUserComponent;
  let fixture: ComponentFixture<AdicionarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
