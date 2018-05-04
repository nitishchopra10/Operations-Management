import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { TdmComponent } from './components/tdm/tdm.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DeliveryPortfolioComponent } from './components/delivery-portfolio/delivery-portfolio.component';
import { ViewComponent } from './components/delivery-portfolio/view/view.component';
import { TdmViewAllComponent } from './components/tdm/tdm-view-all/tdm-view-all.component';
import { TdmAddTeamMembersComponent } from './components/tdm/tdm-add-team-members/tdm-add-team-members.component';
import { TdmUpdateDetailsComponent } from './components/tdm/tdm-update-details/tdm-update-details.component';
import { TdmSearchComponent } from './components/tdm/tdm-search/tdm-search.component';
import { HttpServiceService } from './service/http-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    TdmComponent,
    DeliveryPortfolioComponent,
    ViewComponent,
    TdmViewAllComponent,
    TdmAddTeamMembersComponent,
    TdmUpdateDetailsComponent,
    TdmSearchComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule, ReactiveFormsModule,FormsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
