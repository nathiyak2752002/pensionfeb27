import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { PersonaldetailsComponent } from '../all-component/personaldetails/personaldetails.component';
import { MaterialModule } from '../shared/material.module';
import { OngoingPersonnelDetailsComponent } from '../all-component/ongoing-personnel-details/ongoing-personnel-details.component';

import { MatInputModule } from '@angular/material/input';
import { WorkingsheetComponent } from '../all-component/workingsheet/workingsheet.component';
import { WorkingsheetSettlementComponent } from '../all-component/workingsheet-settlement/workingsheet-settlement.component';
import { MatTableModule } from '@angular/material/table';
import { PaymentMonthlypensionComponent } from '../all-component/payment-monthlypension/payment-monthlypension.component';
import { PaymentSettlementComponent } from '../all-component/payment-settlement/payment-settlement.component';
import { PaymentSettlementScreen2Component } from '../all-component/payment-settlement-screen2/payment-settlement-screen2.component';
import { PaymentSettlementScreen3Component } from '../all-component/payment-settlement-screen3/payment-settlement-screen3.component';
import { PaymentMonthlypensionScreen2Component } from '../all-component/payment-monthlypension-screen2/payment-monthlypension-screen2.component';
import { ArrearScreen1Component } from '../all-component/arrear-screen1/arrear-screen1.component';
import { ArrearScreen2Component } from '../all-component/arrear-screen2/arrear-screen2.component';
import { ArrearScreen3Component } from '../all-component/arrear-screen3/arrear-screen3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    NavbarComponent,
    PersonaldetailsComponent,
    OngoingPersonnelDetailsComponent,
    WorkingsheetComponent,
    WorkingsheetSettlementComponent,
    PaymentMonthlypensionComponent,
    PaymentSettlementComponent,
    PaymentSettlementScreen2Component,
    PaymentSettlementScreen3Component ,
    PaymentMonthlypensionScreen2Component,
    ArrearScreen1Component,
    ArrearScreen2Component,
    ArrearScreen3Component,
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class HomeModule { }
