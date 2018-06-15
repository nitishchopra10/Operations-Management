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
 
  btnEdit = 'Edit';
  private checkFlag = false;
  constructor(private http: DataService) {
    this.setTable();
    this.checkFlag = true;
  }


  setTable() {

    this.columnDefs = [
      { headerName: 'Account', field: 'account' },
      { headerName: 'Technology Stacks', field: 'technologyStacks'},
      { headerName: 'Status', field: 'status' },
     // { headerName: 'DBA Support', field: 'dBASupport', valueFormatter: this.booleanFormatter, width: 100 },
      { headerName: 'DBA Support', field: 'dBASupport' },
      { headerName: 'IAAS', field: 'iAAS' },
      { headerName: 'Development Service', field: 'developmentService' },
      { headerName: 'Enhancements', field: 'enhancements' },
      { headerName: 'Infra-Monitoring', field: 'infraMonitoring' },
      { headerName: 'Support Status', field: 'supportService' },
      { headerName: 'Testing Service', field: 'testingService' },
      {
        headerName: "Edit",
        editable: false,
        cellRenderer: "editButton",
      
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
  }
  
  booleanFormatter(params) {
    if (params.value == true)
      return "YES";
    else if (params.value == false)
      return "NO";
  }
  
  */
  onRowValueChanged(param) {
      
    if(param.rowIndex!=this.rowIndex)
     {
      this.ngOnInit()
     }  

  }

  onGridReady(params) {
    this.param = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  
  ngOnInit() {

    this.http.get("dpo/getData").map(res => res.json()).subscribe(data => {
      this.portFolioData = data;
      //console.log(data);
    })

  }

  editMethodFromParent(params) {
    console.log("edit block");console.log(params)
   
    this.rowIndex=params.rowIndex;
   
    this.oldRowData=params.data;
    this.gridApi.setFocusedCell(params.rowIndex, 'account');
    this.gridApi.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: "account",
    });
  
  }

  saveEditRow(param) {
    //const data;
    //console.log("save block ");console.log(this.portFolioData)
    this.gridApi.stopEditing();
     
  /*  var rowNode = this.gridApi.getDisplayedRowAtIndex(this.rowIndex);

        getDisplayedRowAtIndex(index) method is used for get the row by row index
      console.log("save block ");console.log(rowNode.data)
    
    
    */
    
      

    if (confirm("Update Data? ")) {
        this.http.post('dpo/updateData', param.data).subscribe(res => {
      //  this.setTable();
      debugger;
        
        alert("Sucessfully Updated !!! " +res.statusText)
        this.rowIndex=-1

      }, (error: Error) => { alert(error.message) });
    }
    else
    {
      // this.setTable();
      this.rowIndex=-1
      
    }
      
     
    }
    
   
  }
