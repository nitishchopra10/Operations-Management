import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tdm-view-all',
  templateUrl: './tdm-view-all.component.html',
  styleUrls: ['./tdm-view-all.component.css']
})
export class TdmViewAllComponent implements OnInit {

  constructor(private http:Http) { }
  employeeData;
  ngOnInit() {
    this.setTable();
  }

  
  setTable() {
    this.http.get("http://localhost:9000/tdm/all").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      console.log(data);
    })

  }


}
