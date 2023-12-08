import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationfareComponent } from './stationfare/stationfare.component';

const routes: Routes = [
  { path: '', component: StationfareComponent },
  { path: '**', component: StationfareComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
