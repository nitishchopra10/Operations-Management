import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private http:Http) { }
  portFolioData;
  ngOnInit() {
    this.http.get("http://localhost:8090/getData").map(res=>res.json()).subscribe(data=>
    {
    this.portFolioData=data
      
  });
  }

}
