import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../service/data-service.service';
import { error } from 'util';
import { EditButton } from './editButton';

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
  private frameworkComponents;
  private context;
  private editType;
  private param;
  private suppressClickEdit;
 

  oldRowData;
  rowIndex:Number=-1;
  editFlag = true;
  btnEdit = 'Edit';
  private checkFlag = false;
  constructor(private http: DataService) {
    this.setTable();
    this.checkFlag = true;
  }


  setTable() {

    this.columnDefs = [
      { headerName: 'Account', field: 'account', width: 100 },
      { headerName: 'Technology Stacks', field: 'technologyStacks', width: 100 },
      { headerName: 'Status', field: 'status', width: 100 },
     // { headerName: 'DBA Support', field: 'dBASupport', valueFormatter: this.booleanFormatter, width: 100 },
      { headerName: 'DBA Support', field: 'dBASupport', width: 100 },
      { headerName: 'IAAS', field: 'iAAS', width: 100 },
      { headerName: 'Development Service', field: 'developmentService', width: 100 },
      { headerName: 'Enhancements', field: 'enhancements', width: 100 },
      { headerName: 'Infra-Monitoring', field: 'infraMonitoring', width: 100 },
      { headerName: 'Support Status', field: 'supportService', width: 100 },
      { headerName: 'Testing Service', field: 'testingService', width: 100 },
      {
        headerName: "Edit",
        editable: false,
        cellRenderer: "editButton",
        width: 100
      }
    ];
    this.defaultColDef = { 
      editable:true,
    /*
      suppressKeyboardEvent: function(event) {
        console.log("suppressing event");
        console.log(event);
        if (event.editing) return false;
      }*/
    
    };
    this.editType = "fullRow";
    this.suppressClickEdit=true;
    this.context = { componentParent: this }
    this.frameworkComponents = { editButton: EditButton }
    if (this.checkFlag == true)
      this.onGridReady(this.param)
  }
 


  //isForceRefreshSelected() {
  // return document.querySelector("#forceRefresh");
  // }
 /* editable() {
    if (this.editFlag == true) {
      this.editFlag = false;
      //  console.log(this.editFlag);
      this.setTable();
      this.gridApi.sizeColumnsToFit();
      this.btnEdit = 'Edit'
    }
    else {

      this.editFlag = true;
      // console.log(this.editFlag);
      this.setTable();

      this.gridApi.sizeColumnsToFit();

      this.btnEdit = 'Cancel'
    }
  }*/
  onRowValueChanged(param) {
    //console.log(param);
    
    if(param.rowIndex!=this.rowIndex)
     {
      this.ngOnInit()

     }  

  }

  onGridReady(params) {
    this.param = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

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
      //console.log(data);
    })

  }

  editMethodFromParent(params) {
    //console.log(params)
    this.editFlag=true;
    this.rowIndex=params.rowIndex;
    this.oldRowData=params.data;
    this.gridApi.setFocusedCell(params.rowIndex, 'account');
    this.gridApi.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: "account",
    });
  
  }

  saveEditRow(param) {
   this.editFlag = false;
  
    if (confirm("Update Data? ")) {
      this.http.post('dpo/updateData', param.data).subscribe(res => {
        console.log(res.statusText);
        this.setTable();
        alert("Sucessfully Updated !!! " +res.statusText)

      }, (error: Error) => { alert(error.message) });
    }
    else
      {
       this.setTable();
      }
      this.gridApi.stopEditing();
      this.rowIndex=-1
    }
    
  }
