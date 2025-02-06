import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderExcangeDetailsComponent } from './order-excange-details.component';

describe('OrderExcangeDetailsComponent', () => {
  let component: OrderExcangeDetailsComponent;
  let fixture: ComponentFixture<OrderExcangeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderExcangeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderExcangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
