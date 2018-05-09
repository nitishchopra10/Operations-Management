import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DeliveryPortFolio } from '../../../models/delivery-portfolio';

@Component({
  selector: 'app-create-dp',
  templateUrl: './create-dp.component.html',
  styleUrls: ['./create-dp.component.css']
})
export class CreateDpComponent implements OnInit {

  constructor() { }
  addDeliveryPortfolio;
  ngOnInit() {
   
    this.addDeliveryPortfolio = new FormGroup({
      account: new FormControl(),
      status: new FormControl(),
      technologyStacks: new FormControl(),
      supportService: new FormControl(),
      dbaSupport: new FormControl(),
      iaas: new FormControl(),
      enhancements: new FormControl(),
      infraMonitoring: new FormControl(),
      testingService: new FormControl(),
      developmentService: new FormControl()
    });
  }


  onSubmit(data) {
    let deliveryPortfolio: DeliveryPortFolio=data;
    this.addDeliveryPortfolio.reset();
    console.log(deliveryPortfolio);


  }
}
