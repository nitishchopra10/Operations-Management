import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data-service.service';

@Component({
  selector: 'app-tdm-view-all',
  templateUrl: './tdm-view-all.component.html',
  styleUrls: ['./tdm-view-all.component.css']
})
export class TdmViewAllComponent implements OnInit {

  constructor(private http:DataService) { }
  employeeData;
  flag;
  modalData;
  ngOnInit() {
    this.setTable();
  }

  
  setTable() {
    this.http.get("tdm/allactive").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      console.log(data);
    })

  }

  
  flagValue(flag,data)
  {
        this.flag=flag;
        this.modalData=data;
  }

}
