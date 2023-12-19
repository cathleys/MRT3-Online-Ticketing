import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationfareComponent } from './stationfare/stationfare.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { authGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'station-fare',
    component: StationfareComponent,
    canActivate: [authGuard],
  },
  {
    path: 'buy-ticket/:id',
    component: BuyTicketComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: StationfareComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
