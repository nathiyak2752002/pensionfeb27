import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { PersonaldetailsComponent } from '../all-component/personaldetails/personaldetails.component';
import { OngoingPersonnelDetailsComponent } from '../all-component/ongoing-personnel-details/ongoing-personnel-details.component';
import { WorkingsheetComponent } from '../all-component/workingsheet/workingsheet.component';
import { WorkingsheetSettlementComponent } from '../all-component/workingsheet-settlement/workingsheet-settlement.component';
import { PaymentMonthlypensionComponent } from '../all-component/payment-monthlypension/payment-monthlypension.component';
import { PaymentSettlementComponent } from '../all-component/payment-settlement/payment-settlement.component';
import { PaymentSettlementScreen2Component } from '../all-component/payment-settlement-screen2/payment-settlement-screen2.component';
import { PaymentSettlementScreen3Component } from '../all-component/payment-settlement-screen3/payment-settlement-screen3.component';
import { PaymentMonthlypensionScreen2Component } from '../all-component/payment-monthlypension-screen2/payment-monthlypension-screen2.component';
import { ArrearScreen1Component } from '../all-component/arrear-screen1/arrear-screen1.component';
import { ArrearScreen2Component } from '../all-component/arrear-screen2/arrear-screen2.component';
import { ArrearScreen3Component } from '../all-component/arrear-screen3/arrear-screen3.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [{ path: '', redirectTo: 'pension-list', pathMatch: 'full' },

    { path: 'personaldetails', component: PersonaldetailsComponent },
    { path: 'ongoing-personnel-details/:id', component: OngoingPersonnelDetailsComponent },
    { path: 'workingsheet', component: WorkingsheetComponent },
    { path: 'workingsheet-settlement', component: WorkingsheetSettlementComponent },
    { path: 'payment-monthlypension', component: PaymentMonthlypensionComponent },
    { path: 'payment-settlement', component: PaymentSettlementComponent },
    { path: 'payment-settlement-screen2', component: PaymentSettlementScreen2Component },
    { path: 'payment-settlement-screen3', component: PaymentSettlementScreen3Component },
    { path: 'payment-monthlypension-screen2', component: PaymentMonthlypensionScreen2Component },
    { path: 'arrear-screen1', component: ArrearScreen1Component },
    { path: 'arrear-screen2', component: ArrearScreen2Component },
    { path: 'arrear-screen3', component: ArrearScreen3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
