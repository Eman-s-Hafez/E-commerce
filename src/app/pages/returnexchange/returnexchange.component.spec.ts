import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnexchangeComponent } from './returnexchange.component';

describe('ReturnexchangeComponent', () => {
  let component: ReturnexchangeComponent;
  let fixture: ComponentFixture<ReturnexchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnexchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
