import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsOverviewPageComponent } from './transactions-overview-page/transactions-overview-page.component';
import { TransactionsGridComponent } from './transactions-grid/transactions-grid.component';


@NgModule({
  declarations: [
    TransactionsOverviewPageComponent,
    TransactionsGridComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
