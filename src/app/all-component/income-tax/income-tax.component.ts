import { Component,ElementRef,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface settlement{
  position:number;
  ppoNo:string;
  name:string;
  totalPay:string;
  action:string;
}
const  ELEMENT_DATA:settlement[] = [
{
  position:1,
  ppoNo:'',
  name:'',
  totalPay:'',
  action:'update'
},
{
  position:2,
  ppoNo:'',
  name:'',
  totalPay:'',
  action:'update'
}
]
@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrl: './income-tax.component.css'
})
export class IncomeTaxComponent {
  dataSource = new MatTableDataSource<settlement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'ppoNo', 'name', 'totalPay',  'action'];
  @ViewChild('content', { static: false }) content!: ElementRef;
  
  incomeTax!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.incomeTax=this.fb.group({
      itFrom:['',Validators.required],
      itTo:['',Validators.required],
      itValues:['',Validators.required],
  });
}



}
