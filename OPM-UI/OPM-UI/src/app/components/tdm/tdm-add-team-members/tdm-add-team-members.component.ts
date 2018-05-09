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

  constructor(private http:DataService) { }

  addTeamMemberForm;
  flag=false;
  ngOnInit() {
    this.addTeamMemberForm = new FormGroup({
      empId: new FormControl(null,[Validators.required, Validators.pattern(/^(0|[0-9])+$/)]),
      name: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      mCode: new FormControl(null,[Validators.required, Validators.pattern(/^(0|[1-9]\d*)?$/)]),
      subLevel: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      project: new FormControl(null,Validators.required),
      n1: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      n2: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      address: new FormControl(null,Validators.required),
      asset: new FormControl(null),
      contactNumber: new FormControl(null,[Validators.required, Validators.pattern(/^\+?(0|[1-9]\d*)?$/)])
    });
  }

  onSubmit(data) {
   let  employee:Employee=data;
   
   console.log(data);
   //this.http.post("/tdm/add",employee).subscribe(p => {
    //  alert(p.status + p.statusText);
    //});
    console.log("Employee : "+employee);

  }

  
  flagValue(flag)
  {
        this.flag=flag;
        this.addTeamMemberForm.controls['asset'].setValue(this.fieldArray);  
  }


  private fieldArray: Array<Assets> = [];
  private newAttribute: Assets;

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
           //this.newAttribute = {};
     
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
      
  }

}