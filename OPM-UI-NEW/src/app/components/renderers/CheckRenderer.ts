import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    template: `  <span>
                <img src="../../../assets/icon/check.png" style="margin-left:30%;height:50%" *ngIf="value==true"/>
                <img src="../../../assets/icon/Xmark.svg" style="margin-left:30%;height:50%" *ngIf="value==false"/>
            </span>`,
    styles: [
        `
        `
    ]
})
export class CheckRenderer implements ICellRendererAngularComp {
    private imageSource: string;
    private value: any;

    agInit(params: any): void {
      
        this.value = params.value;
    }   
   
    

    refresh(): boolean {
        return true;
    }
}