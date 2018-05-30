import { Assets } from "./assets";

export class Employee{
    public empId;
    public name;
    public mCode;
    public contactNumber;
    public project;
    public address;
    public subLevel;
    public n1;
    public n2;
    public assetList:Assets[]; 
    public status:boolean;


    setStatus(value:boolean):void{
            this.status=value;
    }

    getStatus(){
        return this.status;
    }
}