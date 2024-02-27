import { Component } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment-settlement-screen3',
  templateUrl: './payment-settlement-screen3.component.html',
  styleUrl: './payment-settlement-screen3.component.css'
})
export class PaymentSettlementScreen3Component {
  da!: FormGroup;
  formBuilder: any;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.da = this.fb.group({
      empId:['',Validators.required],
      empName:['',Validators.required],
      designationCode:['',Validators.required],
      designationName:['',Validators.required],
      officeCode:['',Validators.required],
      officeName:['',Validators.required],
      joiningDate:['',Validators.required],
      bp:['',Validators.required],
      rows: this.fb.array([this.createRow()]) 
    })
    
  }
  get rows(): FormArray {
    return this.da.get('rows') as FormArray;
  }

  createRow(): FormGroup {
    return this.fb.group({
      recoveries:['',Validators.required],
      totalDemand:['',Validators.required],
      monthDemand:['',Validators.required],
      date:['',Validators.required],
      noOfMonth:['',Validators.required],
      monthlyBalance:['',Validators.required],
    });
  }

  addPaymentRow(): void {
    this.rows.push(this.createRow());
  }

  removePaymentRow(index: number): void {
    if (this.rows.length > 1) {
      this.rows.removeAt(index);
    }
  }

  calculateAge() {
    const dobInput = document.getElementById('dob') as HTMLInputElement;
      const dobValue = new Date(dobInput.value);
      const today = new Date();
      let age = today.getFullYear() - dobValue.getFullYear();
      const monthDiff = today.getMonth() - dobValue.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobValue.getDate())) {
          age--;
      }
  
      const ageInput = document.getElementById('age') as HTMLInputElement;
      ageInput.value = age.toString();
  }
  
  
}


   
