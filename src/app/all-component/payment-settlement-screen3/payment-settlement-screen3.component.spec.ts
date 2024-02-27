import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSettlementScreen3Component } from './payment-settlement-screen3.component';

describe('PaymentSettlementScreen3Component', () => {
  let component: PaymentSettlementScreen3Component;
  let fixture: ComponentFixture<PaymentSettlementScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentSettlementScreen3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentSettlementScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
