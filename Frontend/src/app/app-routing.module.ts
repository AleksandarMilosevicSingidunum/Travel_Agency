import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDestinationComponent } from './pages/add-destination/add-destination.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateDestinationComponent } from './pages/update-destination/update-destination.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'destinations',component: DestinationsComponent},
  {path:'destinations/:_id',component:DestinationPageComponent},
  {path:'login',component: LoginComponent},
  {path: 'admin-page',component: AdminPageComponent},
  {path: 'add-destination',component: AddDestinationComponent},
  {path: 'update-destination/:_id',component:UpdateDestinationComponent},
  {path: 'checkout/:_id',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
