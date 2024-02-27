import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSettlementScreen2Component } from './payment-settlement-screen2.component';

describe('PaymentSettlementScreen2Component', () => {
  let component: PaymentSettlementScreen2Component;
  let fixture: ComponentFixture<PaymentSettlementScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentSettlementScreen2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentSettlementScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
