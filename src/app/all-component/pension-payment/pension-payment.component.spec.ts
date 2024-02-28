import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionPaymentComponent } from './pension-payment.component';

describe('PensionPaymentComponent', () => {
  let component: PensionPaymentComponent;
  let fixture: ComponentFixture<PensionPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PensionPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PensionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
