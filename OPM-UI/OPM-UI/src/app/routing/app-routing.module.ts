import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';
import { TdmComponent } from '../components/tdm/tdm.component';
import { DeliveryPortfolioComponent } from '../components/delivery-portfolio/delivery-portfolio.component';
import { ViewComponent } from '../components/delivery-portfolio/view/view.component';
import { TdmViewAllComponent } from '../components/tdm/tdm-view-all/tdm-view-all.component';
import { TdmAddTeamMembersComponent } from '../components/tdm/tdm-add-team-members/tdm-add-team-members.component';
import { TdmUpdateDetailsComponent } from '../components/tdm/tdm-update-details/tdm-update-details.component';
import { TdmSearchComponent } from '../components/tdm/tdm-search/tdm-search.component';
import { CreateDpComponent } from '../components/delivery-portfolio/create-dp/create-dp.component';
import { UpdateDpComponent } from '../components/delivery-portfolio/update-dp/update-dp.component';

const appRoutes: Routes = [
  /* {path:'admin',component:AdminComponent,
       children: [
     { path: 'addUser',component:AddVendorComponent, outlet:'admin'},
     { path: 'modifyProduct',component:UpdateProductComponent, outlet:'admin'},
     { path: 'delete',component:DeleteComponent, outlet:'admin'},
     { path: 'order',component:OrderDetailComponent, outlet:'admin'},
     { path: 'addProduct',component:AddProductComponent, outlet:'admin'},
     { path: 'exportdatabase',component:ExportDataBaseComponent, outlet:'admin'}
 
   ]},*/
  {
    path: 'team-data-management', component: TdmComponent,
    children: [
      {path: '', component: TdmViewAllComponent},
      { path: 'tdm-view-members', component: TdmViewAllComponent },
      { path: 'tdm-update-details', component: TdmUpdateDetailsComponent },
      { path: 'tdm-search', component: TdmSearchComponent },
     
      { path: 'tdm-add-members', component: TdmAddTeamMembersComponent }
    ]},
  { path: 'delivery-portfolio', component: DeliveryPortfolioComponent },

  {
    path: 'delivery-portfolio', component: DeliveryPortfolioComponent,
    children: [
      { path:'', component: ViewComponent},
      { path: 'view', component: ViewComponent },
      { path: 'update-delivery-portfolio', component: UpdateDpComponent },
      { path: 'create-delivery-portfolio', component: CreateDpComponent },
    
    ]
  },
  { path: '**', component: HomeComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//export const routing = RouterModule.forRoot(appRoutes);