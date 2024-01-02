import { Component, OnInit } from '@angular/core';
import { StationFareService } from '../api/services';
import { StationFareDto } from '../api/models';

@Component({
  selector: 'app-stationfare',
  templateUrl: './stationfare.component.html',
  styleUrls: ['./stationfare.component.css'],
})
export class StationfareComponent implements OnInit {
  fares: StationFareDto[] = [];
  constructor(private stationFareService: StationFareService) {}

  ngOnInit(): void {}

  search() {
    this.stationFareService.searchStationFare().subscribe({
      next: (response) => (this.fares = response),
      error: (err) => console.log(err),
    });
  }
}
