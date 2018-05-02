import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';

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
  { path: '**', component: HomeComponent }
 
];

@NgModule({
  
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }


//export const routing = RouterModule.forRoot(appRoutes);