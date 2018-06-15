import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-portfolio',
  templateUrl: './delivery-portfolio.component.html',
  styleUrls: ['./delivery-portfolio.component.css']
})
export class DeliveryPortfolioComponent implements OnInit {

  constructor() { }
  colorFlag:number=0;
  ngOnInit() {
  }
   
  colorFlagChanger(value){
    this.colorFlag=value;
  }

  getMyStyles(d) {
    let myStyles = {
       'background': this.colorFlag==d ? ' rgba(0,0,0,0.7)' : '',
        'color':    this.colorFlag==d ? 'white' : '',
        'border':  this.colorFlag==d ? '0.2vw solid gainsboro': '',
    };
    return myStyles;
}  


}
