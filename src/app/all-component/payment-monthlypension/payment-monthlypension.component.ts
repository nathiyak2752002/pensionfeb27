import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
import * as XLSX from 'xlsx';
export interface settlement{
  position:number;
  empId:string;
  name:string;
  basicPay:string;
  action:string;
}
const  ELEMENT_DATA:settlement[] = [
{
  position:1,
  empId:'2652',
  name:'dhiya',
  basicPay:'216',
   action:'update'
},
{
  position:2,
  empId:'2652',
  name:'joe',
  basicPay:'216',
   action:'update'
  
}
]
@Component({
  selector: 'app-payment-monthlypension',
  templateUrl: './payment-monthlypension.component.html',
  styleUrl: './payment-monthlypension.component.css'
})
export class PaymentMonthlypensionComponent {
  dataSource = new MatTableDataSource<settlement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'date', 'voucherNo', 'totalPay',  'action'];
  @ViewChild('content', { static: false }) content!: ElementRef;
  
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
    const fileName = 'table_data.xlsx';
    const data = this.dataSource.data;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, fileName);
  }
}
