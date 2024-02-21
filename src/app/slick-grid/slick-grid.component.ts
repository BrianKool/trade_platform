import { Component, OnInit } from '@angular/core';
import { AngularSlickgridModule, Column, GridOption } from 'angular-slickgrid';
import * as accounts from '../../../data/accounts.json';
import * as transactions from '../../../data/transactions.json';
import { IAccount, ITransaction } from '../interface';


@Component({
  standalone: true,
  imports: [AngularSlickgridModule],
  selector: 'slick-grid',
  template: `
  <div class="container">
  <angular-slickgrid gridId="grid1"
    [columnDefinitions]="columnDefinitions"
    [gridOptions]="gridOptions"
    [dataset]="dataset">
  </angular-slickgrid>
  </div>
`
})
export class GridBasicComponent implements OnInit {
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: ITransaction[] = [];

  public transactionData: any = transactions;

  constructor() {
    this.prepareGrid();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  prepareGrid() {
    this.columnDefinitions = [
      { id: '_id', name: 'Transaction ID', field: '_id', sortable: true },
      { id: 'accountId', name: 'Account ID', field: 'accountId', sortable: true },
      { id: 'description', name: 'Description', field: 'description', sortable: true },
      { id: '_currency', name: 'Currency', field: '_currency' },
      { id: '_quantity', name: 'Amount', field: '_quantity' },
      { id: '_transactionDate', name: 'Transaction Date', field: '_transactionDate' },
    ];

    this.gridOptions = {
      enableAutoResize: true,
      enableSorting: true
    };

    // fill the dataset with your data (or read it from the DB)
    this.dataset = this.transactionData.default;
  }
}