import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 



@Component({
  selector: 'app-arrear-screen2',
  templateUrl: './arrear-screen2.component.html',
  styleUrl: './arrear-screen2.component.css'
})
export class ArrearScreen2Component {
 
  
arrear!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.arrear=this.fb.group({
    ppoNo:['',Validators.required],
    name:['',Validators.required],
    designation:['',Validators.required],
    officeCode:['',Validators.required],
    dob:['',Validators.required],
    doa:['',Validators.required],
    dor:['',Validators.required],
    dod:['',Validators.required],
    age:['',Validators.required],
    arrearStartDate:['',Validators.required],
    arrearEndDate:['',Validators.required],
    duesBasicPension:['',Validators.required],
    duesCommutedPension:['',Validators.required],
    duesAdditionalPension:['',Validators.required],
    pensionPayable:['',Validators.required],
    duesDa:['',Validators.required],
    duesMa:['',Validators.required],
    totalDues:['',Validators.required],
    drawnBasicPension:['',Validators.required],
    drawnCommutedPension:['',Validators.required],
    drwanAdditionalPension:['',Validators.required],
    drawnPensionPayable:['',Validators.required],
    drawnDa:['',Validators.required],
    DrawnMa:['',Validators.required],
    drawnTotalDues:['',Validators.required],
    diffInPension:['',Validators.required],
    diffInDcrg:['',Validators.required],
    diffCommutation:['',Validators.required],
    totalDifference:['',Validators.required],
    recoveryOne:['',Validators.required],
    recoveryTwo:['',Validators.required],
    recoveryThree:['',Validators.required],
    recoveryFour:['',Validators.required],
    recoveryFive:['',Validators.required],
    totalDeduction:['',Validators.required],
    netPayable:['',Validators.required],
   
    

  });
}



      
  
}
