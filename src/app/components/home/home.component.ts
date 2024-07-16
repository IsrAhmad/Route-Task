import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customerData: any;
  transactionData: any;

  displayedColumns: string[] = ['id', 'name', 'customer_id', 'amount', 'date', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private _HomeService: HomeService) {}

  ngOnInit(): void {
    this.getCustomerData();
  }

  getCustomerData() {
    this._HomeService.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.customerData = res.customers;
        this.dataSource.data = this.customerData;
        this.transactionData = res.transactions;
        console.log(this.customerData);
        console.log(res.customers[0].name);
        console.log(this.transactionData);
      },
      error: (err: any) => {
        console.error('Error fetching customer data', err);
      }
    });
  }

  getCustomerName(customer_id: number): string {
    const customer = this.customerData.find((cust: any) => cust.id === customer_id);
    return customer ? customer.name : 'Unknown';
  }
}
