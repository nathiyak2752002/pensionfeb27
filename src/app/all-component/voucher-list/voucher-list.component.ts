import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface PeriodicElement {
  position:number;
  ppo:number;
  name:string;
  grossPension:number;
  totalDeduction:number;
  netPension:number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position:1,
    ppo:4546,
    name:'dhiya',
    grossPension:4549,
    totalDeduction:4878,
    netPension:7878
  },
  {
    position:2,
    ppo:4546,
    name:'dhiya',
    grossPension:4549,
    totalDeduction:4878,
    netPension:7878
  }
  
];

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrl: './voucher-list.component.css'
})
export class VoucherListComponent {

  selectType!: string;
 

  voucherTable1= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position','ppo','name','grossPension','totalDeduction','netPension'];
  voucherTable2= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns2: string[] = ['position','ppo','name','grossPension','totalDeduction','netPension'];
  voucherTable3= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns3: string[] = ['position','ppo','name','grossPension','totalDeduction','netPension'];
@ViewChild('content', { static: false }) content!: ElementRef;
voucher!:FormGroup;
// selectedRetirementType: any;


constructor(private fb : FormBuilder){
 
}


ngOnInit(): void {
  this.voucher = this.fb.group({
    voucherNo: ['', Validators.required],
    ppo: ['', Validators.required],
    pensionPayment: ['', Validators.required],
  })
}
}
