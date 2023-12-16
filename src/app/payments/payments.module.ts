import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentsComponent } from './card-payments/card-payments.component';
import { NetBankingComponent } from './net-banking/net-banking.component';


@NgModule({
  declarations: [
    UpiPaymentComponent,
    CardPaymentsComponent,
    NetBankingComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
