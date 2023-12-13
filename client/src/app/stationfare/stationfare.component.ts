import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StationFareService } from '../api/services';
import { StationFare } from '../api/models';

@Component({
  selector: 'app-stationfare',
  templateUrl: './stationfare.component.html',
  styleUrls: ['./stationfare.component.css'],
})
export class StationfareComponent implements OnInit {
  fares: StationFare[] = [];
  constructor(private stationFareService: StationFareService) {}

  ngOnInit(): void {}

  search() {
    this.stationFareService.apiStationFareGet().subscribe({
      next: (response) => (this.fares = response),
      error: (err) => console.log(err),
    });
  }
}
