import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { DataService } from '../../../service/data-service.service';
import { Assets } from '../../../models/assets';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tdm-update-details',
  templateUrl: './tdm-update-details.component.html',
  styleUrls: ['./tdm-update-details.component.css']
})
export class TdmUpdateDetailsComponent implements OnInit {

  constructor(private http: DataService,private localHttp:Http) { }

  employeeData;
  updateTeamMemberForm;
  assetTypes;
  searchForm;
  ngOnInit() {
    this.localHttp.get("../../../assets/data/asset_List.json").map(response => response.json()).subscribe(res=>{
      this.assetTypes=res;
     
    })
    this.setTable();
    this.searchForm = new FormGroup({
      option: new FormControl('name', Validators.required),
      keyword: new FormControl(null, Validators.required),

    });
    this.updateTeamMemberForm = new FormGroup({
      empId: new FormControl(null, [Validators.required, Validators.pattern(/^(0|[0-9])+$/)]),
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      mCode: new FormControl(null, [Validators.required, Validators.pattern(/^(0|[1-9]\d*)?$/)]),
      subLevel: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      project: new FormControl(null, Validators.required),
      n1: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      n2: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z  A-Z,.'-]+$/)]),
      address: new FormControl(null, Validators.required),
      assetList: new FormControl(),
      contactNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\+?(0|[1-9]\d*)?$/)]),
      status: new FormControl(null, Validators.required)
    });
  }
  onSubmitSearch(data) {
    
      let keyword = data.keyword;
      let option = data.option;
  
      if (!(option == 'id' && isNaN(keyword)))
      this.http.get("tdm/search/" + option + "/" + keyword).map(res => res.json()).subscribe(data => {
          if (data[0] !== null || data== '') { this.employeeData = data;  }
          else
            {alert("No Data Found");}
  
        });
  
        else
          alert("Enter Valid Employee ID !!!");
  
   

  }

  setTable() {
    this.http.get("tdm/all").map(res => res.json()).subscribe(data => {

      this.employeeData = data;
      console.log(data);
    })

  }

  onSubmit(data) {
    
    if(data.status=='ACTIVE')
          data.status=true;
    else
        data.status=false;
        
        data.assetList=this.fieldArray;
    let employee: Employee= data;
    console.log(employee);
    this.http.post("tdm/update", employee).subscribe(res => {
      alert(res.status + "  " + res.statusText);
      this.setTable();
      this.updateTeamMemberForm.reset();
    });

  }

  setData(data) {

    this.updateTeamMemberForm.controls['empId'].setValue(data.empId);
    this.updateTeamMemberForm.controls['name'].setValue(data.name);
    this.updateTeamMemberForm.controls['mCode'].setValue(data.mCode);
    this.updateTeamMemberForm.controls['subLevel'].setValue(data.subLevel);
    this.updateTeamMemberForm.controls['project'].setValue(data.project);
    this.updateTeamMemberForm.controls['n1'].setValue(data.n1);
    this.updateTeamMemberForm.controls['n2'].setValue(data.n2);
    this.updateTeamMemberForm.controls['contactNumber'].setValue(data.contactNumber);
    this.updateTeamMemberForm.controls['address'].setValue(data.address);
    if(data.status==true)
    this.updateTeamMemberForm.controls['status'].setValue("ACTIVE");
    else
    this.updateTeamMemberForm.controls['status'].setValue("INACTIVE");

    this.fieldArray=data.assetList;

  }


  private fieldArray: Array<Assets> = [];
  private newAttribute: any = {};
  private flag = false;

  flagValue(flag) {
    this.flag = flag;
    
  }
  saveAssetList(flag){
    this.flag = flag;
    this.updateTeamMemberForm.controls['assetList'].setValue(this.fieldArray);
  }


  addFieldValue() {
    
    this.newAttribute = {};
    this.fieldArray.push(this.newAttribute)


  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);

  }

  

}
