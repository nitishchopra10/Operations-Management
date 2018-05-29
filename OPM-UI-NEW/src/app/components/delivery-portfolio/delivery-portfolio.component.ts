import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../service/data-service.service';
import { error } from 'util';

@Component({
  selector: 'app-delivery-portfolio',
  templateUrl: './delivery-portfolio.component.html',
  styleUrls: ['./delivery-portfolio.component.scss']
})
export class DeliveryPortfolioComponent implements OnInit {

  portFolioData;

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  editFlag =false;
  btnEdit='Edit';
  constructor(private http: DataService) {
    this.setTable();
  }
  setTable() {

    this.columnDefs = [
      { headerName: 'Account', field: 'account' },
      { headerName: 'Technology Stacks', field: 'technologyStacks' },
      { headerName: 'Status', field: 'status' },
      { headerName: 'DBA Support', field: 'dBASupport', valueFormatter: this.booleanFormatter },
      { headerName: 'IAAS', field: 'iAAS', valueFormatter: this.booleanFormatter },
      { headerName: 'Development Service', field: 'developmentService', valueFormatter: this.booleanFormatter },
      { headerName: 'Enhancements', field: 'enhancements', valueFormatter: this.booleanFormatter },
      { headerName: 'Infra-Monitoring', field: 'infraMonitoring', valueFormatter: this.booleanFormatter },
      { headerName: 'Support Status', field: 'supportService', valueFormatter: this.booleanFormatter },
      { headerName: 'Testing Service', field: 'testingService', valueFormatter: this.booleanFormatter }
    ];
    
    this.defaultColDef = { editable: this.editFlag };
  }
 isForceRefreshSelected() {
    return document.querySelector("#forceRefresh");
  }
  editable() {
    if (this.editFlag ==true) {
        this.editFlag=false;
        console.log(this.editFlag);
        this.setTable();
        //this.gridApi.sizeColumnsToFit();
          this.btnEdit='Edit'
          }
    else{
     
        this.editFlag=true;
        console.log(this.editFlag);
        this.setTable();
       // this.gridApi.sizeColumnsToFit();
        this.btnEdit='Cancel'
      }
  }
  onCellValueChanged(param) {

    this.http.post('dpo/updateData', param.data).subscribe(res => {
      console.log(res.statusText);
      this.setTable();
     },(error: Error) => { alert(error.message) });
  
    console.log(param.data);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  booleanFormatter(params) {
    if (params.value == true)
      return "YES";
    else if (params.value == false)
      return "NO";
  }
  ngOnInit() {

    this.http.get("dpo/getData").map(res => res.json()).subscribe(data => {

      this.portFolioData = data;
      console.log(data);
    })

  }



}
