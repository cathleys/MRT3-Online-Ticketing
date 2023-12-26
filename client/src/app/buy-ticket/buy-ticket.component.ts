import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationFareService } from '../api/services';
import { StationFare, StationFareTicketDto } from '../api/models';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_helpers/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  ticketId: string = 'not loaded';
  stationFareTicket: StationFare = {};
  username: string | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private stationFareService: StationFareService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user();

    this.route.paramMap.subscribe({
      next: (p) => this.findStationFare(p.get('id')),
    });
  }

  buyTicket() {
    const stationFareTicket: StationFareTicketDto = {
      ticketId: this.stationFareTicket.id,
      username: this.username,
      price: this.stationFareTicket.price,
      from: this.stationFareTicket.from,
      destination: this.stationFareTicket.destination,
    };

    this.stationFareService
      .buyStationFare({ body: stationFareTicket })
      .subscribe({
        next: () => {
          console.log('buyticket info: ', stationFareTicket);
          this.toastr.success('You have successfully bought the ticket.');
          this.router.navigateByUrl('/my-tickets');
        },
        error: this.handleError,
      });
  }

  private findStationFare(ticketId: string | null) {
    this.ticketId = ticketId ?? 'not passed';

    this.stationFareService.findStationFare({ id: this.ticketId }).subscribe({
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

  private user() {
    this.userService.currentUser$.subscribe((user) => {
      if (user) {
        this.username = user.username;
      }
    });
  }
}
