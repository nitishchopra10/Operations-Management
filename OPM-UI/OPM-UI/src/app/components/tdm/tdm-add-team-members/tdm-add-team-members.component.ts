import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Http } from '@angular/http';
import { Employee } from '../../../models/employee';
@Component({
  selector: 'app-tdm-add-team-members',
  templateUrl: './tdm-add-team-members.component.html',
  styleUrls: ['./tdm-add-team-members.component.css']
})
export class TdmAddTeamMembersComponent implements OnInit {

  constructor(private http:Http) { }

  addTeamMemberForm;

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
      assest: new FormControl(null,Validators.required),
      contactNumber: new FormControl(null,[Validators.required, Validators.pattern(/^\+?(0|[1-9]\d*)?$/)])
    });
  }

  onSubmit(data) {
   let  employee:Employee;
   employee=data;
   
   this.http.post("http://localhost:9000/tdm/add",employee).subscribe(p => {
      alert(p.status + p.statusText);
    });
    console.log(employee);

  }
}
