import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Http } from '@angular/http';
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
      employeeId: new FormControl(null,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      employeeName: new FormControl(null,Validators.required),
      mCode: new FormControl(null,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      subLevel: new FormControl(null,Validators.required),
      project: new FormControl(null,Validators.required),
      n1: new FormControl(null,Validators.required),
      n2: new FormControl(null,Validators.required),
      address: new FormControl(null,Validators.required),
      assest: new FormControl(null,Validators.required),
      contactNumber: new FormControl(null,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    });
  }

  onSubmit(data) {
   let  employee={
      "empId": data.employeeId,
       "name": data.employeeName,
       "mCode": data.mCode,
       "contactNumber": data.contactNumber,
       "project": data.project,
       "address": data.address,
       "subLevel": data.subLevel,
       "n1": data.n1,
       "n2" : data.n2
    }
    this.http.post("http://localhost:9000/tdm/add",employee).subscribe(p => {
      alert(p.status + p.statusText);
    });
    console.log(employee);

  }
}
