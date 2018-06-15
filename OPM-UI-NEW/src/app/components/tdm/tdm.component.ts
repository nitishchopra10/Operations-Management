import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { DataService } from '../../service/data-service.service';
import { Employee } from '../../models/employee';
import { EditButtonRenderer } from '../renderers/editButtonRenderer';

@Component({
  selector: 'app-tdm',
  templateUrl: './tdm.component.html',
  styleUrls: ['./tdm.component.scss']
})
export class TdmComponent implements OnInit {

  employeeData: Array<Employee> = [];
  private gridApi;
  private gridColumnApi;
  
  private columnDefs;
  private context;
  private frameworkComponents;

  defaultColDef;
  editType;
  suppressClickEdit;

  rowIndex;
  oldRowData;

  ngOnInit() {
    this.http.get("tdm/allactive").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      
    })
  }
  constructor(private http: DataService) {
    this.setTable();
   }
  setTable() {
    this.columnDefs = [
      { headerName: 'Employee Id', field: 'empId' },
      { headerName: 'Employee Name', field: 'name' },
      { headerName: 'mCode', field: 'mCode' },
      { headerName: 'Sub Level', field: 'subLevel' },
      { headerName: 'Project', field: 'project' },
      { headerName: 'N+1', field: 'n1' },
      { headerName: 'N+2', field: 'n2' },
      { headerName: 'Contact Number', field: 'contactNumber' },
      { headerName: 'Address', field: 'address' },
      //{ headerName: 'View Assets', field: 'assetList' }
      {
        headerName: "Edit",
        editable: false,
        cellRenderer: "editButton",

      }
    ];

    this.defaultColDef = { 
      editable:true,
     
    };
    this.editType = "fullRow";    
    this.suppressClickEdit=true;
    this.context = { componentParent: this }
    this.frameworkComponents = { editButton: EditButtonRenderer }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }


  onRowValueChanged(param) {
      
    if(param.rowIndex!=this.rowIndex)
     {
      this.ngOnInit()
     }  

  }
 


  /*
   private newAttribute:Employee;
   addFieldValue1() {
   this.employeeData.push(this.newAttribute);
   }*/


   
  editMethodFromParent(params) {
    
    console.log("edit block");console.log(params)
   
    this.rowIndex=params.rowIndex;
   
    this.oldRowData=params.data;
    this.gridApi.setFocusedCell(params.rowIndex, 'empId');
    this.gridApi.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: "empId",
    });
  
  
  }

  saveEditRow(param) {
   
    console.log("Save block");console.log(param)

    this.gridApi.stopEditing();
     
         
  
      if (confirm("Update Data? ")) {
          this.http.post('tdm/update', param.data).subscribe(res => {
        //  console.log(param.data);
          
          alert("Sucessfully Updated !!! " +res.statusText)
          this.rowIndex=-1
  
        }, (error: Error) => { alert(error.message);
            this.ngOnInit();
        });
      }
      else
      {        
        this.rowIndex=-1
      }
        
    }
}
