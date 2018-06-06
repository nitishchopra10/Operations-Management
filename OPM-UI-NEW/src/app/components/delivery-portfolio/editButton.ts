import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    template: `<button style="height: 100%;width:100%" (click)="invokeParentMethod()" class="btn btn-info">{{btnText}}</button>`,
    styles: [
        `.btn {
            line-height: 0.5;
            margin-top:0;
            
            vertical-align:center

        }`
    ]
})
export class EditButton implements ICellRendererAngularComp {
    public params: any;
    public btnText="Edit";
    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        if(this.btnText=='Edit'){
            this.btnText="Save"
         this.params.context.componentParent.editMethodFromParent(this.params)
        }
        
        else{
            this.btnText='Edit'
            this.params.context.componentParent.saveEditRow(this.params)
        }
   
   
    }

    refresh(): boolean {
        return false;
    }
}