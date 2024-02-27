import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-workingsheet-settlement',
  templateUrl: './workingsheet-settlement.component.html',
  styleUrl: './workingsheet-settlement.component.css'
})
export class WorkingsheetSettlementComponent {
  settlement!:FormGroup;
  formBuilder: any;

  constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  this.settlement = this.fb.group({
    empId: ['', Validators.required],
    empName:['',Validators.required],
    designation:['',Validators.required],
    officeCode:['',Validators.required],
    dob:['',Validators.required],
    doa:['',Validators.required],
    dor:['',Validators.required],
    age:['',Validators.required],
    ppoNo:['',Validators.required],
    // arrearStart:['',Validators.required],
    // arrearTo:['',Validators.required],
    // basicPension:['',Validators.required],
    // commutedPension:['',Validators.required],    
    // pensionPayable:['',Validators.required],    
    totalPensionPayable:['',Validators.required],    
    additionalPension:['',Validators.required],    
    da:['',Validators.required],    
    ma:['',Validators.required],    
    grossPension:['',Validators.required],    
    dcrg:['',Validators.required],   
    commutation:['',Validators.required],   
    totalAmount:['',Validators.required],   
    recoveryOne:['',Validators.required],   
    recoveryTwo:['',Validators.required],   
    recoveryThree:['',Validators.required],   
    recoveryFour:['',Validators.required],   
    totalRecoveries:['',Validators.required],   
    netPayable:['',Validators.required], 
    rows: this.fb.array([this.createRow()]) 
    

});




}

get rows(): FormArray {
  return this.settlement.get('rows') as FormArray;
}

createRow(): FormGroup {
  return this.fb.group({
    arrearStart: ['', Validators.required],
    arrearTo: ['', Validators.required],
    basicPension: ['', Validators.required],
    commutedPension: ['', Validators.required],
    pensionPayable: ['', Validators.required],
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