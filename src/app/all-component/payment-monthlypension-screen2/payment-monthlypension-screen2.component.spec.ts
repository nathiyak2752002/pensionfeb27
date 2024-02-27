import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMonthlypensionScreen2Component } from './payment-monthlypension-screen2.component';

describe('PaymentMonthlypensionScreen2Component', () => {
  let component: PaymentMonthlypensionScreen2Component;
  let fixture: ComponentFixture<PaymentMonthlypensionScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMonthlypensionScreen2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentMonthlypensionScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
