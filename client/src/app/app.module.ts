import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationfareComponent } from './stationfare/stationfare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, StationfareComponent, BuyTicketComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
