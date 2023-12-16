import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentsComponent } from './card-payments/card-payments.component';
import { NetBankingComponent } from './net-banking/net-banking.component';

const routes: Routes = [
{path:'',component:UpiPaymentComponent},
{path:'card-payment',component:CardPaymentsComponent},
{path:'net-banking',component:NetBankingComponent},
{path:'upi-payment',component:UpiPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
