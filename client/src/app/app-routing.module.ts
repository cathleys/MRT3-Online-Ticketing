import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationfareComponent } from './stationfare/stationfare.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

const routes: Routes = [
  { path: '', component: StationfareComponent },
  { path: 'station-fare', component: StationfareComponent },
  { path: 'buy-ticket/:id', component: BuyTicketComponent },
  { path: '**', component: StationfareComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
