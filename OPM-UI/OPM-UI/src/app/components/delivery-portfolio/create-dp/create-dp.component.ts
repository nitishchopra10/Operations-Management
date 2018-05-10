import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DeliveryPortFolio } from '../../../models/delivery-portfolio';
import { Http } from '@angular/http';
import { DataService } from '../../../service/data-service.service';

@Component({
  selector: 'app-create-dp',
  templateUrl: './create-dp.component.html',
  styleUrls: ['./create-dp.component.css']
})
export class CreateDpComponent implements OnInit {

  constructor(private dataService:DataService) { }
  addDeliveryPortfolio;
  ngOnInit() {
   
    this.addDeliveryPortfolio = new FormGroup({
      account: new FormControl(),
      status: new FormControl(),
      technologyStacks: new FormControl(),
      supportService: new FormControl(),
      dBASupport: new FormControl(),
      iAAS: new FormControl(),
      enhancements: new FormControl(),
      infraMonitoring: new FormControl(),
      testingService: new FormControl(),
      developmentService: new FormControl()
    });
  }


  onSubmit(data) {
    let deliveryPortfolio: DeliveryPortFolio=data;
    deliveryPortfolio.recordStatus="ACTIVE";
    console.log(deliveryPortfolio);
  
    this.dataService.post("dpo/updateData",deliveryPortfolio).subscribe(res=>{
      alert(res.status +" "+res.statusText);
      this.addDeliveryPortfolio.reset();
    });
  

  }
}
