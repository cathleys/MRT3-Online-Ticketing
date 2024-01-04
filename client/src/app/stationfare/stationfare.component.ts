import { Component, OnInit } from '@angular/core';
import { StationFareService } from '../api/services';
import { StationFareDto } from '../api/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stationfare',
  templateUrl: './stationfare.component.html',
  styleUrls: ['./stationfare.component.css'],
})
export class StationfareComponent implements OnInit {
  fares: StationFareDto[] = [];
  searchForm: FormGroup = new FormGroup({});

  constructor(
    private stationFareService: StationFareService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      from: [''],
      destination: [''],
    });
  }

  searchStationFare() {
    const values = { ...this.searchForm.value };

    this.stationFareService.searchStationFare(values).subscribe({
      next: (response) => (this.fares = response),
      error: (err) => console.log(err),
    });
  }
}
