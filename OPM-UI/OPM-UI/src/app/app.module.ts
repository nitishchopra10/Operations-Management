import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { TdmComponent } from './components/tdm/tdm.component';

import { RouterLink,RouterOutlet } from '@angular/router';
import { DeliveryPortfolioComponent } from './components/delivery-portfolio/delivery-portfolio.component';
import { ViewComponent } from './components/delivery-portfolio/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    TdmComponent,
    DeliveryPortfolioComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
