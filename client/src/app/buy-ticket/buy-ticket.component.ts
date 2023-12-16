import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationFareService } from '../api/services';
import { StationFare } from '../api/models';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  ticketId: string = 'not loaded';
  stationFareTicket: StationFare = {};

  constructor(
    private route: ActivatedRoute,
    private stationFareService: StationFareService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (p) => this.buyTicket(p.get('id')),
    });
  }

  private buyTicket(ticketId: string | null) {
    this.ticketId = ticketId ?? 'not passed';

    this.stationFareService.buyStationFare({ id: this.ticketId }).subscribe({
      next: (ticket) => (this.stationFareTicket = ticket),
      error: this.handleError,
    });
  }

  private handleError = (err: any) => {
    if (err.status === 404) {
      console.log('station fare not found');
      this.router.navigateByUrl('/station-fare');
    }
    console.log('response status', err.status);
    console.log('response status text', err.statusText);
  };
}
