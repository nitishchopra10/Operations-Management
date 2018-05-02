import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data;
  constructor(private http:Http) { }

  ngOnInit() {
  
    this.http.get("../../../assets/mock-data/MOCK_DATA.json").map(response => response.json()).subscribe(res=>{
      this.data=res;
      console.log(res);
    })
  
  }


}
