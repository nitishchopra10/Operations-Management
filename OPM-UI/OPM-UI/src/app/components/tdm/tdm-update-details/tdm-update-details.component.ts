import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tdm-update-details',
  templateUrl: './tdm-update-details.component.html',
  styleUrls: ['./tdm-update-details.component.css']
})
export class TdmUpdateDetailsComponent implements OnInit {

  constructor(private http: Http) { }

  employeeData;
  updateTeamMemberForm;
  ngOnInit() {

    this.setTable();
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

  setTable() {
    this.http.get("http://localhost:9000/tdm/all").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      console.log(data);
    })

  }

  onSubmit(data) {
    let employee = {
      "empId": data.employeeId,
      "name": data.employeeName,
      "mCode": data.mCode,
      "contactNumber": data.contactNumber,
      "project": data.project,
      "address": data.address,
      "subLevel": data.subLevel,
      "n1": data.n1,
      "n2": data.n2
    }
    console.log(employee);

    this.http.post("http://localhost:9000/tdm/update", employee).subscribe(res => {
      alert(res.status + "  " + res.statusText);
      this.setTable();
      this.updateTeamMemberForm.reset();
    })

  }

  setData(data) {

    this.updateTeamMemberForm.controls['employeeId'].setValue(data.empId);
    this.updateTeamMemberForm.controls['employeeName'].setValue(data.name);
    this.updateTeamMemberForm.controls['mCode'].setValue(data.mCode);
    this.updateTeamMemberForm.controls['subLevel'].setValue(data.subLevel);
    this.updateTeamMemberForm.controls['project'].setValue(data.project);
    this.updateTeamMemberForm.controls['n1'].setValue(data.n1);
    this.updateTeamMemberForm.controls['n2'].setValue(data.n2);
    this.updateTeamMemberForm.controls['contactNumber'].setValue(data.contactNumber);
    this.updateTeamMemberForm.controls['address'].setValue(data.address);

    console.log("hello")

  }

}
