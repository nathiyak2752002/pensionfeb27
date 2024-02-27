import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-payment-settlement-screen2',
  templateUrl: './payment-settlement-screen2.component.html',
  styleUrl: './payment-settlement-screen2.component.css'
})
export class PaymentSettlementScreen2Component {
 
  
pension!:FormGroup;
selectedRetirementType: string = '';
selectedType: string = '';
selectedType2: string = '';


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pension=this.fb.group({
      ppo:['',Validators.required],
      name:['',Validators.required],
      designation:['',Validators.required],
      officeCode:['',Validators.required],
      officeName:['',Validators.required],
      grade:['',Validators.required],
      dob:['',Validators.required],
      age:['',Validators.required],
      address:['',Validators.required],
      mobileNumber:['',Validators.required],
      emailId:['',Validators.required],
      panNumber:['',Validators.required],
      aadharNo:['',Validators.required],
      bankName:['',Validators.required],
      bankAccount:['',Validators.required],
      bankBranch:['',Validators.required],
      ifsc:['',Validators.required],
      pensionStatus:['',Validators.required],
      docc:['',Validators.required],
      docr:['',Validators.required],
      dateOfNrfp:['',Validators.required],
      originalPension:['',Validators.required],
      bonus:['',Validators.required],
      basicPension:['',Validators.required],
      commutedPesion:['',Validators.required],
      reducedPension:['',Validators.required],
      additionalPension:['',Validators.required],
      da:['',Validators.required],
      ma:['',Validators.required],
      grossPension:['',Validators.required],
      fsf:['',Validators.required],
      fa:['',Validators.required],
      nhis:['',Validators.required],
      tds:['',Validators.required],
      misc:['',Validators.required],
      totalDeductions:['',Validators.required],
      netPension:['',Validators.required],
      retirementType:['',Validators.required],
      spouseName:['',Validators.required],
      spouseDob:['',Validators.required],
      conversion:['',Validators.required],
      doc:['',Validators.required],
      pensionerName:['',Validators.required],
      pensionerDob:['',Validators.required],
      address2:['',Validators.required],
      mobileNum:['',Validators.required],
      email:['',Validators.required],
      panNum:['',Validators.required],
      aadhar:['',Validators.required],
      bankName2:['',Validators.required],
      accountNumber:['',Validators.required],
      bankBranch2:['',Validators.required],
      ifscCode:['',Validators.required],
      oldPensioner:['',Validators.required],
      dod:['',Validators.required],
      oldPensioner1:['',Validators.requiredTrue],
      dod1:['',Validators.required]      

  });
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
