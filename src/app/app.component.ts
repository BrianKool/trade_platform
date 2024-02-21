import { Component, OnInit, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import * as accounts from '../../data/accounts.json';
import * as transections from '../../data/transactions.json';
import { IAccount, ITransaction } from './interface';
// import { HttpClient, HttpClientModule } from '@angular/common/http';



//try to use styleUrls but layout being strange !!
@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: 'app-root',
  template: `
    <div class="content">
      <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
      <ag-grid-angular
        style="width: 100%; height: 350px;"
        [class]="themeClass"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [defaultColDef]="defaultColDef"
        [rowSelection]="rowSelection"
        [suppressRowClickSelection]="true"
        [pagination]="true"
        [paginationPageSize]="paginationPageSize"
        [paginationPageSizeSelector]="paginationPageSizeSelector"
      >
      </ag-grid-angular>
    </div>
  `,
})


export class AppComponent implements OnInit{

  title = 'trade_platform';

  public accountdata: any = accounts;
  public transectiondata: any = transections;


  //trying to use httpclient from angular
  // public constructor(private http: HttpClient) {};


  //set-up step 
  public ngOnInit() {
    
    console.log('Accounts', this.accountdata.default);
    console.log('Transections', this.transectiondata.default);
    // const url: string  = '../../data/transactions.json';
    // this.http.get(url).subscribe((response) => {
    //   console.log(response);
    // })
    
    
  }
  
  themeClass = "ag-theme-quartz";

  // Row Data: The data to be displayed.  
  rowData: ITransaction[] = this.transectiondata.default;

  colDefs: ColDef<ITransaction>[] = [
    // group cell renderer needed for expand / collapse icons
    { field: '_id' },
    { field: 'accountId' },
    { field: 'description' },
    { field: "_currency" },
    { field: '_quantity' },
    { field: '_transactionDate' },
  ];

  public defaultColDef: ColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
  };
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public paginationPageSize = 500;
  public paginationPageSizeSelector: number[] | boolean = [200, 500, 1000];
  
}

