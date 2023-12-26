import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationfareComponent } from './stationfare/stationfare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './_modules/shared.module';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    StationfareComponent,
    BuyTicketComponent,
    RegisterComponent,
    NavComponent,
    HomePageComponent,
    MyTicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
