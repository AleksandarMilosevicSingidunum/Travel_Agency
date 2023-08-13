import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './SharedPage/navbar/navbar.component';
import { FooterComponent } from './SharedPage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddDestinationComponent } from './pages/add-destination/add-destination.component';
import { UpdateDestinationComponent } from './pages/update-destination/update-destination.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DestinationsComponent,
    DestinationPageComponent,
    LoginComponent,
    AdminPageComponent,
    AddDestinationComponent,
    UpdateDestinationComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
