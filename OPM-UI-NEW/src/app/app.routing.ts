/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TdmComponent } from './components/tdm/tdm.component';
import { DeliveryPortfolioComponent } from './components/delivery-portfolio/delivery-portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tdm', component: TdmComponent},
    {path: 'about', component: AboutComponent},
    {path: 'delivery-portfolio', component: DeliveryPortfolioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
