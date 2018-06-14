import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../service/data-service.service';
import { error } from 'util';
import { EditButtonRenderer } from '../renderers/editButtonRenderer';
import { DeliveryPortFolio } from '../../models/delivery-portfolio';

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
  private rowSelection;

  oldRowData;
  rowIndex: Number = -1;

  btnEdit = 'Edit';
  private checkFlag = false;
  newRowFlag = false;
  constructor(private http: DataService) {
    this.setTable();
    this.checkFlag = true;
  }


  setTable() {

    this.columnDefs = [
      { headerName: 'Account', field: 'account' },
      { headerName: 'Technology Stacks', field: 'technologyStacks' },
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
        suppressSorting: true,
        suppressMenu: true
      }
    ];
    this.defaultColDef = {
      editable: false,
      /*
        suppressKeyboardEvent: function(event) {
          console.log("suppressing event");
          console.log(event);
          if (event.editing) return false;
        }*/

    };
    this.editType = "fullRow";
    this.suppressClickEdit = true;

    this.rowSelection = "multiple"
    this.context = { componentParent: this }
    this.frameworkComponents = { editButton: EditButtonRenderer }

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

    /*
    if (param.rowIndex != this.rowIndex) {
      this.ngOnInit()
    }
    */

  }
  updateRowData(event) {
    this.ngOnInit();
    console.log("hye");
    console.log(event);
  }
  onGridReady(params) {
    this.param = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.addEventListener("columnRowGroupChanged", this.updateRowData());
    this.gridApi.sizeColumnsToFit();
  }


  ngOnInit() {

    this.http.get("dpo/getData").map(res => res.json()).subscribe(data => {
      this.portFolioData = data;
      //console.log(data);
    })

  }

  colDefProperty(flag: Boolean) {

    this.param.api.columnController.allDisplayedColumns.forEach(element => {
      // console.log(element.colId)
      if (element.colId != 0) {
        var col = this.param.columnApi.getColumn(element.colId);
        // obtain the column definition from the column
        var colDef = col.getColDef();
        // update the header name
        colDef.editable = flag;
      }
    });

    // the column is now updated. to reflect the header change, get the grid refresh the header
    this.gridApi.refreshHeader();//  refreshHeader();
  }

  cellFocused(event) {

    if (this.rowIndex > -1 && this.rowIndex != event.rowIndex) {
      console.log(event)

      this.gridApi.setFocusedCell(this.rowIndex, 'account');
      this.gridApi.startEditingCell({
        rowIndex: this.rowIndex,
        colKey: "account",
      });

    }
  }

  editMethodFromParent(params, child) {

    if (this.rowIndex != -1) {

      child.invoke();

      this.gridApi.setFocusedCell(this.rowIndex, 'account');
      this.gridApi.startEditingCell({
        rowIndex: this.rowIndex,
        colKey: "account",
      });

    }
    else {
      this.colDefProperty(true);

      this.rowIndex = params.rowIndex;

      this.oldRowData = params.data;
      this.gridApi.setFocusedCell(params.rowIndex, 'account');
      this.gridApi.startEditingCell({
        rowIndex: params.rowIndex,
        colKey: "account",
      });
    }
  }

  saveEditRow(param) {
    //const data;
    //console.log("save block ");console.log(this.portFolioData)
    this.gridApi.stopEditing();
    this.colDefProperty(false);

    /*  var rowNode = this.gridApi.getDisplayedRowAtIndex(this.rowIndex);
            getDisplayedRowAtIndex(index) method is used for get the row by row index
        console.log("save block ");console.log(rowNode.data)
      */
    if (confirm("Update Data? ")) {
      this.http.post('dpo/updateData', param.data).subscribe(res => {
        //  this.setTable();
        alert("Sucessfully Updated !!! " + res.statusText)
        this.rowIndex = -1
        this.newRowFlag=true;
      }, (error: Error) => {
        alert(error.message);
        this.ngOnInit();
      });
    }
    else {
      // this.setTable();
      if (this.newRowFlag == false) {
        
        this.ngOnInit();
      }
      this.rowIndex = -1
    }
  }


  onAddRow() {
    var newItem = new DeliveryPortFolio();
    var res = this.gridApi.updateRowData({ add: [newItem] });
    this.newRowFlag=true;
  }

  onRemoveSelected() {
    let selectedData = this.gridApi.getSelectedRows();
   
    let rowIds:Array<number>=[];
    let count=0
    selectedData.forEach(element => {
     if(element.id!=null)
      rowIds[count]=element.id;
      count++;
    });

    console.log(rowIds);
    if(selectedData.length==0)
      alert("No Row Selected !!!")
      
    else{  
   
     
     if(confirm("Are You Want Delete ???")){
      var res = this.gridApi.updateRowData({ remove: selectedData });
   
      this.http.post("dpo/delData",rowIds).subscribe(res=>{
        alert("Sucessfully Deleted ."+ res.statusText);
        this.ngOnInit();
      })
    }
   
    }
  }
}
