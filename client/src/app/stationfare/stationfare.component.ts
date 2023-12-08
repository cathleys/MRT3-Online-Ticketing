import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stationfare',
  templateUrl: './stationfare.component.html',
  styleUrls: ['./stationfare.component.css'],
})
export class StationfareComponent implements OnInit {
  fares: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5233/api/stationfare').subscribe({
      next: (r) => (this.fares = r),
    });
  }
}
