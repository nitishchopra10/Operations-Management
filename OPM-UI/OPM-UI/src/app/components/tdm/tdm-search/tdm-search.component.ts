import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../../service/data-service.service';

@Component({
  selector: 'app-tdm-search',
  templateUrl: './tdm-search.component.html',
  styleUrls: ['./tdm-search.component.css']
})
export class TdmSearchComponent implements OnInit {

  constructor(private http: DataService) { }
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
    this.http.get("tdm/search/" + option + "/" + keyword).map(res => res.json()).subscribe(data => {
        if (data[0] !== null || data== '') { this.employeeData = data;  }
        else
          {alert("No Data Found");}

      });

      else
        alert("Enter Valid Employee ID !!!");

  }

  setTable() {
    this.http.get("tdm/allactive").map(res => res.json()).subscribe(data => {
      this.employeeData = data;

    })

  }



  flagValue(flag, data) {
    this.flag = flag;
    this.modalData = data;
  }
}
