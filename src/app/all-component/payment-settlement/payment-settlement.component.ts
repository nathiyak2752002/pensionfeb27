import { Component,ElementRef,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
import * as XLSX from 'xlsx';
export interface PeriodicElement {
  position:number;
  employeeID:number;
  name: string;
  designation:string;
  officeCode:string;
  ppoNo:String;
  totalAmount:Number;
  totalRecoveries:Number;
  netPayable: Number;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position:1,
    employeeID:275,
    name: 'Dhiya',
    designation:'manager',
    officeCode:'4545',
    ppoNo:'455',
    totalAmount:466,
    totalRecoveries:4662,
    netPayable: 566,
    action:'update'
  },
  {
    position:2,
    employeeID:275,
    name: 'Dhiya',
    designation:'manager',
    officeCode:'4545',
    ppoNo:'455',
    totalAmount:466,
    totalRecoveries:4662,
    netPayable: 566,
    action:'update'
  }
  
];

@Component({
  selector: 'app-payment-settlement',
  templateUrl: './payment-settlement.component.html',
  styleUrl: './payment-settlement.component.css'
})
export class PaymentSettlementComponent {

 
  workingSheet= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'employeeID', 'name', 'designation', 'officeCode', 'ppoNo','totalAmount','totalRecoveries','netPayable', 'action'];

  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor() {}

 
  // downloadPDF(): void {
  //   const doc = new jspdf.jsPDF();
  //   const content = this.content.nativeElement;

  //   html2canvas(content).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const imgWidth = 210;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //     doc.addImage(imgData, 0, 0, imgWidth, imgHeight);
  //     doc.save('table.pdf');
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


  downloadXLSX(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(ELEMENT_DATA);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'data');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = fileName + '.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  

}
