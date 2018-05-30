import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { DataService } from '../../service/data-service.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.scss']
})
export class AdminModuleComponent implements OnInit {
  
  employeeData:Array<Employee>=[];
  gridApi;
  gridColumnApi;
  flag:Boolean=false;
  autoGroupColumnDef;
  
  rowSelection;
  constructor(private http: DataService) {
       this.rowSelection = "multiple";
   
   }
  columnDefs = [
    { headerName: 'Employee Id', field: 'empId', checkboxSelection: true, },
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
  ngOnInit() {
    this.http.get("tdm/allactive").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      console.log(data);
    })
  }
 
  showTable(){
    this.flag=!this.flag;
  
   
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  
    params.api.sizeColumnsToFit();
  }

  print(data){
   console.log(data.data);
  }
  onSelectionChanged(data){
    console.log('selection',data);
    console.log(data,"selection changed = ");
   }
}
