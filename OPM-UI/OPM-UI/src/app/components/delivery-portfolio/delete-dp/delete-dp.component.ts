import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data-service.service';

@Component({
  selector: 'app-delete-dp',
  templateUrl: './delete-dp.component.html',
  styleUrls: ['./delete-dp.component.css']
})
export class DeleteDpComponent implements OnInit {

  constructor(private dataService:DataService) { }
  portFolioData;
  ngOnInit() {
    this.setTable();
  }

  setTable(){
    this.dataService.get("dpo/getData").map(res => res.json()).subscribe(data => {
      this.portFolioData = data

    });

  }

  delete(data){

    let id= [];
    id.push(data.id);
    
   this.dataService.post("dpo/delData",id).subscribe(res=>{
      alert("Sucessfully Updated  "+res.statusText+" "+res.status);
      this.setTable();
    })
  }

}
