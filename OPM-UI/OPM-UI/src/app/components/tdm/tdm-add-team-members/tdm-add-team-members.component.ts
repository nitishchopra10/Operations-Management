import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
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
      employeeId: new FormControl(),
      employeeName: new FormControl(),
      mCode: new FormControl(),
      subLevel: new FormControl(),
      project: new FormControl(),
      n1: new FormControl(),
      n2: new FormControl(),
      address: new FormControl(),
      assest: new FormControl(),
      contactNumber: new FormControl()
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
