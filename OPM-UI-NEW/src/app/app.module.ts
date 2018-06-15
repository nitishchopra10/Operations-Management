import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TdmComponent } from './components/tdm/tdm.component';
import { AgGridModule } from 'ag-grid-angular';
import { DeliveryPortfolioComponent } from './components/delivery-portfolio/delivery-portfolio.component';
import { DataService } from "./service/data-service.service";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditButtonRenderer } from "./components/renderers/editButtonRenderer";
import { CheckRenderer } from "./components/renderers/CheckRenderer";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        TdmComponent,
        DeliveryPortfolioComponent,
        LoginComponent,
        RegisterComponent,
        EditButtonRenderer,
        CheckRenderer
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        AgGridModule.withComponents([EditButtonRenderer,CheckRenderer])
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
