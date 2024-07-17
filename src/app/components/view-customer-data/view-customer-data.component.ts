import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-view-customer-data',
  templateUrl: './view-customer-data.component.html',
  styleUrls: ['./view-customer-data.component.scss']
})
export class ViewCustomerDataComponent implements OnInit, AfterViewInit {
  transactionData: any;
  chart: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.transactionData = JSON.parse(params['data']);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.transactionData) {
      this.createChart();
    }
  }

  createChart(): void {
    const ctx = document.getElementById('transactionChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Amount 1', 'Amount 2'],
        datasets: [{
          label: 'Transaction Amounts',
          data: [this.transactionData.amount1, this.transactionData.amount2],
          backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
