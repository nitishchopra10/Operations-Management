import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../../service/data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dataService:DataService) { }
  portFolioData;
  ngOnInit() {
    this.dataService.get("dpo/getData").map(res=>res.json()).subscribe(data=>
    {
    this.portFolioData=data
      
  });
  }

}
