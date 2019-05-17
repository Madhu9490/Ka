import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { SourceOfFinanceComponent } from './source-of-finance/source-of-finance.component';
import { FinancialAssetComponent } from './financial-asset/financial-asset.component';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { StrresComponent } from './strres/strres.component';
import { AddWardBlockStreetComponent } from './add-ward-block-street/add-ward-block-street.component';

const routes: Routes = [
	{ path: 'source-of-finance', component: SourceOfFinanceComponent },
	{ path: 'financial-asset', component: FinancialAssetComponent },
	{ path: 'financial-year', component: FinancialYearComponent },
	{ path: 'streets', component: StrresComponent },
	{ path: 'add-ward-block-street', component: AddWardBlockStreetComponent },
	{ path: '',   redirectTo: '/source-of-finance', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
