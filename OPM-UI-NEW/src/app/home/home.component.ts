/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private http:Http) { }
    data : any;
    ngOnInit() {
  
      this.http.get("../../assets/data/MENU_TILES_DATA.json").map(response => response.json()).subscribe(res=>{
        this.data=res;
      
      })
  
}
}
