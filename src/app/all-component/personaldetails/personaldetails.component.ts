// import { Component } from '@angular/core';
// import { Component , ElementRef, ViewChild} from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import * as XLSX from 'xlsx';
// import html2canvas from 'html2canvas';
// import jspdf from 'jspdf';

import { MatTableDataSource } from '@angular/material/table';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PensionService } from '../../services/pensionservice.service';
import { Router } from '@angular/router';






export interface PeriodicElement {
  position: number;
  empId: number;
  name: string;
  pfno: number;
  ppo: number;
  retirement: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    empId: 123,
    name: 'dhiya',
    pfno: 565623,
    ppo: 454,
    retirement: 'SUPERANNUATION',
    action: 'update'
  },
  {
    position: 2,
    empId: 4151,
    name: 'joe',
    pfno: 565623,
    ppo: 454,
    retirement: 'SUPERANNUATION',
    action: 'update'
  }
];

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css'] // corrected styleUrl to styleUrls
})
export class PersonaldetailsComponent implements OnInit {

  pension = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'pfno', 'name', 'ppo', 'retirement', 'action'];
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(private pensionService: PensionService,
    private router: Router) {

  }

  ngOnInit() {
    console.log('init');

    this.getAllPensionDetails()
  }


  getAllPensionDetails() {
    this.pensionService.getAllPension().subscribe(res => {
      if (res && res.length > 0) {
        // res.forEach((element, index) => {
        //   element.id = index + 1;
        // });
        this.pension.data = res;
      } else {
        this.pension.data = [];
      }
    })
  }

  
 
}
