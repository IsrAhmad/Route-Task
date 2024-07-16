import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerDataComponent } from './components/view-customer-data/view-customer-data.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: ViewCustomerDataComponent },
  { path: 'no-data', component: NoDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
