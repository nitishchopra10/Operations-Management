import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data-service.service';
import { DeliveryPortFolio } from '../../../models/delivery-portfolio';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-dp',
  templateUrl: './update-dp.component.html',
  styleUrls: ['./update-dp.component.css']
})
export class UpdateDpComponent implements OnInit {

  constructor(private dataService: DataService) { }
  portFolioData: DeliveryPortFolio;
  buttonFlag: number = -1;
  searchForm;
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
  onSubmit(data) {
    let keyword = data.keyword;
    let option = data.option;

   
    this.dataService.get("dpo/searchData/" + option + "/" + keyword).map(res => res.json()).subscribe(data => {
        if (data[0] !== null || data== '') { this.portFolioData = data;  }
        else
          {alert("No Data Found");}

      });
  }


  changeValue(data, type) {

    if (this.buttonFlag==data.id) {
      switch (type) {

        case 'dBASupport':
          if (data.dBASupport == true)
            data.dBASupport = false
          else
            data.dBASupport = true;

          break;
        case 'iAAS':
          if (data.iAAS == true)
            data.iAAS = false
          else
            data.iAAS = true;
          break;
        case 'developmentService':
          if (data.developmentService == true)
            data.developmentService = false
          else
            data.developmentService = true;

          break;
        case 'enhancements':
          if (data.enhancements == true)
            data.enhancements = false
          else
            data.enhancements = true;
          break;
        case 'infraMonitoring':
          if (data.infraMonitoring == true)
            data.infraMonitoring = false
          else
            data.infraMonitoring = true;

          break;
        case 'supportService':
          if (data.supportService == true)
            data.supportService = false
          else
            data.supportService = true;

          break;
        case 'testingService':
          if (data.testingService == true)
            data.testingService = false
          else
            data.testingService = true;
          break;
      }
    }

  }

  buttonValue(label,data) {
    if (label == 'edit')
      this.buttonFlag = data.id;


    else
      {
        this.buttonFlag = -1;
        console.log(data);

          this.dataService.post("dpo/updateData",data).subscribe(data =>{
            alert(data.statusText+"  "+data.status);
            this.setTable();
          });
      }
   

  }

}
