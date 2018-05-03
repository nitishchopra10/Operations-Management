import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';
import { TdmComponent } from '../components/tdm/tdm.component';
import { DeliveryPortfolioComponent } from '../components/delivery-portfolio/delivery-portfolio.component';
import { ViewComponent } from '../components/delivery-portfolio/view/view.component';

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
  {path:'team-data-management',component:TdmComponent},
  {path:'delivery-portfolio',component:DeliveryPortfolioComponent},
  {path:'delivery-portfolio',component:DeliveryPortfolioComponent,
        children:[
          {path :'view', component:ViewComponent}
        ]},
  { path: '**', component: HomeComponent }
 
];

@NgModule({
  
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }


//export const routing = RouterModule.forRoot(appRoutes);