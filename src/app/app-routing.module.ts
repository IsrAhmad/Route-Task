import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerDataComponent } from './components/view-customer-data/view-customer-data.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'view-customer-data', component: ViewCustomerDataComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
