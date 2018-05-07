import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdm-search',
  templateUrl: './tdm-search.component.html',
  styleUrls: ['./tdm-search.component.css']
})
export class TdmSearchComponent implements OnInit {

  constructor(private http: Http) { }
  employeeData;
  searchForm;
  ngOnInit() {

    this.searchForm = new FormGroup({
      option: new FormControl('name', Validators.required),
      keyword: new FormControl(null, Validators.required),

    });
    this.setTable();
  }

  onSubmit(data) {
    let keyword=data.keyword;
    let option=data.option;
    this.http.get("http://localhost:9000/tdm/search/"+option+"/"+keyword).map(res => res.json()).subscribe(data => {
      this.employeeData = data;
     
    });
    

    console.log(data);
    console.log("keyword : "+option);
  }
  setTable() {
    this.http.get("http://localhost:9000/tdm/all").map(res => res.json()).subscribe(data => {
      this.employeeData = data;

    })

  }
}
