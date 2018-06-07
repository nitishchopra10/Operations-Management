import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdm-delete',
  templateUrl: './tdm-delete.component.html',
  styleUrls: ['./tdm-delete.component.css']
})
export class TdmDeleteComponent implements OnInit {

  constructor(private dataService: DataService) { }
  employeeData;
  searchForm;
  flag;
  modalData;
  ngOnInit() {

    this.searchForm = new FormGroup({
      option: new FormControl('name', Validators.required),
      keyword: new FormControl(null, Validators.required),

    });
    this.setTable();
  }

  onSubmit(data) {
    let keyword = data.keyword;
    let option = data.option;

    if (!(option == 'id' && isNaN(keyword)))
      this.dataService.get("tdm/search/" + option + "/" + keyword+"/type/ALL").map(res => res.json()).subscribe(data => {

        if (data[0] != null && data.length != 0) { this.employeeData = data; }
        else { alert("No Data Found"); }

      });

    else
      alert("Enter Valid Employee ID !!!");

  }

  setTable() {
    this.dataService.get("tdm/allactive").map(res => res.json()).subscribe(data => {
      this.employeeData = data;

    })

  }

  
  
  flagValue(flag,data)
  {
        this.flag=flag;
        this.modalData=data;
  }

  delete(data){
      let id=[];
      id.push(data.empId);
      this.dataService.post("tdm/delete",id).subscribe(res=>{
        alert(res.statusText+" Deleted !!!")
        this.setTable();
      });
  }

}
