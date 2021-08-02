import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsOverviewPageComponent } from './transactions-overview-page/transactions-overview-page.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsOverviewPageComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
