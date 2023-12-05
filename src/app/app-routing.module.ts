import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShipmentComponent } from './components/add-shipment/add-shipment.component';
import { ListShipmentComponent } from './components/list-shipment/list-shipment.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"/shipment", pathMatch:"full"},
  {path:"shipment",children:[
    {path:"", component: ListShipmentComponent},
    {path:"create", component: AddShipmentComponent}], canActivate: [authGuard]
  },


  {path:"login", component: LoginComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
