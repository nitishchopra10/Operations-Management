import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-dp',
  templateUrl: './delete-dp.component.html',
  styleUrls: ['./delete-dp.component.css']
})
export class DeleteDpComponent implements OnInit {

  constructor(private dataService:DataService) { }
  portFolioData;
  searchForm
  ngOnInit() {
    this.searchForm = new FormGroup({
      option: new FormControl('', Validators.required),
      keyword: new FormControl(null, Validators.required),

    });

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

  onSubmit(data) {
    let keyword = data.keyword;
    let option = data.option;

   
    this.dataService.get("dpo/searchData/" + option + "/" + keyword).map(res => res.json()).subscribe(data => {
        if (data[0] !== null || data== '') { this.portFolioData = data;  }
        else
          {alert("No Data Found");}

      });

      

  }

}
