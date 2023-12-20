import { Component, OnInit } from '@angular/core';
import { UserDto } from './api/models';
import { UserService } from './_helpers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;

    const user: UserDto = JSON.parse(userString);
    this.userService.setCurrentUser(user);
  }
}
