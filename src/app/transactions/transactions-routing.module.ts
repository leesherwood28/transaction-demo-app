import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsOverviewPageComponent } from './transactions-overview-page/transactions-overview-page.component';

const routes: Routes = [{ path: '', component: TransactionsOverviewPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
