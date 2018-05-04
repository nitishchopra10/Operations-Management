import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tdm-update-details',
  templateUrl: './tdm-update-details.component.html',
  styleUrls: ['./tdm-update-details.component.css']
})
export class TdmUpdateDetailsComponent implements OnInit {

  constructor() { }

  updateTeamMemberForm;
  ngOnInit() {
    this.updateTeamMemberForm = new FormGroup({
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
    console.log(employee);

  }
}
