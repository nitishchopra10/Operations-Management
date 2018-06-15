import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { DataService } from '../../service/data-service.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-tdm',
  templateUrl: './tdm.component.html',
  styleUrls: ['./tdm.component.scss']
})
export class TdmComponent implements OnInit {
  
  employeeData:Array<Employee>=[];
  private gridApi;
  private gridColumnApi;
  constructor(private http: DataService) { }


  columnDefs = [
    { headerName: 'Employee Id', field: 'empId' },
    { headerName: 'Employee Name', field: 'name' },
    { headerName: 'mCode', field: 'mCode' },
    { headerName: 'Sub Level', field: 'subLevel' },
    { headerName: 'Project', field: 'project' },
    { headerName: 'N+1', field: 'n1' },
    { headerName: 'N+2', field: 'n2' },
    { headerName: 'Contact Number', field: 'contactNumber' },
    { headerName: 'Address', field: 'n2' },
    //{ headerName: 'View Assets', field: 'assetList' }
  ];

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  
    params.api.sizeColumnsToFit();
  }
  
  ngOnInit() {
    this.http.get("tdm/allactive").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      console.log(data);
    })
  }

 
 /*
  private newAttribute:Employee;
  addFieldValue1() {
  this.employeeData.push(this.newAttribute);
  }*/
}
