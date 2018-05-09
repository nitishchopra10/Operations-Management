import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdm',
  templateUrl: './tdm.component.html',
  styleUrls: ['./tdm.component.css']
})
export class TdmComponent implements OnInit {

  constructor() { }
  colorFlag:number=1;
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
