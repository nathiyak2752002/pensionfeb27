import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-settlement-screen3',
  templateUrl: './payment-settlement-screen3.component.html',
  styleUrl: './payment-settlement-screen3.component.css'
})
export class PaymentSettlementScreen3Component {
  settlement!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.settlement = this.fb.group({
      ppo:['',Validators.required],
      name:['',Validators.required],
      designation:['',Validators.required],
      workingPlace:['',Validators.required],
      doa:['',Validators.required],
      dor:['',Validators.required],
      age:['',Validators.required],
      arrearStart:['',Validators.required],
      arrearEnd:['',Validators.required],
      basicPension:['',Validators.required],
      additionalPension:['',Validators.required],
      commutedValue:['',Validators.required],
      pensionPayable:['',Validators.required],
      da:['',Validators.required],
      ma:['',Validators.required],
      grossPension:['',Validators.required],
      dcrg:['',Validators.required],
      commutationAmount:['',Validators.required],
      recoveryOne:['',Validators.required],
      recoveryTwo:['',Validators.required],
      recoveryThree:['',Validators.required],
      recoveryFour:['',Validators.required],
      recoveryFive:['',Validators.required],
      totalDeduction:['',Validators.required],
      netPayable:['',Validators.required]






    })
}
}