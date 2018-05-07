import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tdm-search',
  templateUrl: './tdm-search.component.html',
  styleUrls: ['./tdm-search.component.css']
})
export class TdmSearchComponent implements OnInit {
  
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
