import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from 'src/app/services/home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customerData: any;
  transactionData: any;

  displayedColumns: string[] = ['id', 'name', 'customer_id', 'amount1', 'amount2', 'date', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private _HomeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.getCustomerData();
  }

  getCustomerData() {
    this._HomeService.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.customerData = res.customers;
        this.transactionData = this.transformTransactionData(res.transactions);
        this.dataSource.data = this.transactionData;
        console.log(this.customerData);
        console.log(res.customers[0].name);
        console.log(this.transactionData);
      },
      error: (err: any) => {
        console.error('Error fetching customer data', err);
        this.transactionData = []; // Ensure transactionData is an empty array on error
      }
    });
  }

  getCustomerName(customer_id: number): string {
    const customer = this.customerData.find((cust: any) => cust.id === customer_id);
    return customer ? customer.name : 'Unknown';
  }

  transformTransactionData(transactions: any[]): any[] {
    const groupedData = transactions.reduce((acc: any, curr: any) => {
      const existing = acc.find((item: any) => item.customer_id === curr.customer_id);
      if (existing) {
        existing.amount2 = curr.amount;
      } else {
        acc.push({ ...curr, amount1: curr.amount, amount2: null });
      }
      return acc;
    }, []);
    return groupedData;
  }

  logRowData(item: any): void {
    this.router.navigate(['/view-customer-data'], { queryParams: { data: JSON.stringify(item) } });
  }
}
