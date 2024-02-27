import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMonthlypensionComponent } from './payment-monthlypension.component';

describe('PaymentMonthlypensionComponent', () => {
  let component: PaymentMonthlypensionComponent;
  let fixture: ComponentFixture<PaymentMonthlypensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMonthlypensionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentMonthlypensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
