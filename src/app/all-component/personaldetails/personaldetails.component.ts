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

  // downloadPDF(): void {
  //   const doc = new jspdf.jsPDF();
  //   const content = this.content.nativeElement;

  //   html2canvas(content).then(canvas => {
  //       // Convert the HTML content to canvas
  //       const tableImgData = canvas.toDataURL('image/png');
  //       const desiredWidth = 180; // Adjust the desired width of the table image
  //       const imgHeight = (canvas.height * desiredWidth) / canvas.width;

  //       // Calculate the position to align the table image with a margin of 60px from the top
  //       const tableImgX = (doc.internal.pageSize.getWidth() - desiredWidth) / 2;
  //       const tableImgY = 45;

  //       // Add the table image to the PDF
  //       doc.addImage(tableImgData, tableImgX, tableImgY, desiredWidth, imgHeight);

  //       // Load the header image
  //       const headerImg = new Image();
  //       headerImg.src = 'assets/TNHB.jpg';
  //       headerImg.onload = () => {
  //           // Ensure the image is loaded before adding it to the PDF
  //           const headerImgWidth = 180; // Adjust the width of the image as needed
  //           const headerImgHeight = (headerImg.height * headerImgWidth) / headerImg.width;

  //           // Calculate the position to center the header image horizontally
  //           const headerImgX = (doc.internal.pageSize.getWidth() - headerImgWidth) / 2;

  //           // Add the header image to the PDF
  //           doc.addImage(headerImg, 'JPEG', headerImgX, 10, headerImgWidth, headerImgHeight);

  //           // Save the PDF with both the table and the header image
  //           doc.save('table_with_header.pdf');
  //       };
  //   });
  // }
  downloadPDF(): void {
    const doc = new jspdf.jsPDF();
    const content = this.content.nativeElement;

    html2canvas(content).then(canvas => {
      // Convert the HTML content to canvas
      const tableImgData = canvas.toDataURL('image/png');
      const desiredWidth = 180; // Adjust the desired width of the table image
      const imgHeight = (canvas.height * desiredWidth) / canvas.width;

      // Calculate the position to align the table image with a margin of 60px from the top
      const tableImgX = (doc.internal.pageSize.getWidth() - desiredWidth) / 2;
      const tableImgY = 45;

      // Add the table image to the PDF
      doc.addImage(tableImgData, tableImgX, tableImgY, desiredWidth, imgHeight);

      // Load the header image
      const headerImg = new Image();
      headerImg.src = 'assets/TNHB.jpg';
      headerImg.onload = () => {
        // Ensure the image is loaded before adding it to the PDF
        const headerImgWidth = 180; // Adjust the width of the image as needed
        const headerImgHeight = (headerImg.height * headerImgWidth) / headerImg.width;

        // Calculate the position to center the header image horizontally
        const headerImgX = (doc.internal.pageSize.getWidth() - headerImgWidth) / 2;

        // Add the header image to the PDF
        doc.addImage(headerImg, 'JPEG', headerImgX, 10, headerImgWidth, headerImgHeight);

        // Save the PDF with both the table and the header image
        doc.save('table_with_header.pdf');
      };
    });
  }


  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.pension.data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'personal_details');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url: string = window.URL.createObjectURL(data);
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = url;
    a.download = fileName + '.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  update(item: any) {
    this.router.navigateByUrl('/pension/ongoing-personnel-details/' + item.pfNo)
  }
  visibility(item: any) {
    this.router.navigateByUrl('/pension/ongoing-personnel-details/' + item.pfNo)


  }

  // downloadPdf1() {
  //   html2canvas(this.content.nativeElement).then(canvas => {
  //     const contentDataURL = canvas.toDataURL('image/png');
  //     const pdf = new jspdf('p', 'mm', 'a4'); // A4 size paper
  //     const imgWidth = 208;
  //     const pageHeight = 295;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save('table.pdf');
  //   });
  // }

  // downloadPdf() {
  //   const element = this.content.nativeElement; // Ensure this is the correct element

  //   html2canvas(element).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     const imgWidth = 208;
  //     const imgHeight = canvas.height * imgWidth / canvas.width;
  //     let position = 0;
  //     let heightLeft = imgHeight;

  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

  //     while (heightLeft >= 0) {
  //       position = -(heightLeft - imgHeight);
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= imgHeight;
  //     }

  //     pdf.save('table.pdf');
  //   });
  // }

}
