import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Http } from '@angular/http';
import { Employee } from '../../../models/employee';
import { DataService } from '../../../service/data-service.service';
import { Assets } from '../../../models/assets';
@Component({
  selector: 'app-tdm-add-team-members',
  templateUrl: './tdm-add-team-members.component.html',
  styleUrls: ['./tdm-add-team-members.component.css']
})
export class TdmAddTeamMembersComponent implements OnInit {

  constructor(private http:DataService,private localHttp:Http) { }

  addTeamMemberForm;
  flag=false;
  assetTypes;
  ngOnInit() {

    this.localHttp.get("../../../assets/data/asset_List.json").map(response => response.json()).subscribe(res=>{
      this.assetTypes=res;
     
    })


    this.addTeamMemberForm = new FormGroup({
      empId: new FormControl(null,[Validators.required, Validators.pattern(/^(0|[0-9])+$/)]),
      name: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      mCode: new FormControl(null,[Validators.required, Validators.pattern(/^(0|[1-9]\d*)?$/)]),
      subLevel: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      project: new FormControl(null,Validators.required),
      n1: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      n2: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      address: new FormControl(null,Validators.required),
      assetList: new FormControl(null),
      contactNumber: new FormControl(null,[Validators.required, Validators.pattern(/^\+?(0|[1-9]\d*)?$/)])
    });
  }

  onSubmit(data) {
   let  employee:Employee=data;
   employee.status=true;
     this.http.post("/tdm/add",employee).subscribe(p => {
     alert(p.status + p.statusText);
     this.addTeamMemberForm.reset();
    });
  
  }

  
  flagValue(flag)
  {
        this.flag=flag;
        console.log(this.fieldArray)
        this.addTeamMemberForm.controls['assetList'].setValue(this.fieldArray);  
  }


  private fieldArray: Array<Assets> = [];
  private newAttribute:any={};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute);
 
       
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
      
  }

}
