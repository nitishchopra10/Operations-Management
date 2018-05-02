import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  flag=false;
  ngOnInit() {
  }

  menuFlag(){
    if(this.flag==true)
      this.flag=false;

    else
      this.flag=true;
  }

}
