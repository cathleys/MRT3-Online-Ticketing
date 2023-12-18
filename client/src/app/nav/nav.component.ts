import { Component, OnInit } from '@angular/core';
import { AccountService } from '../api/services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDto } from '../api/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    this.accountService.loginAccount({ body: this.loginForm.value }).subscribe({
      next: (user: UserDto) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/station-fare');
        }
      },
      error: (err) => console.log(err),
    });
  }

  // logOut() {
  // this.accountService.logOut();
  //localStorage.removeItem('user');
  //   this.router.navigateByUrl('/');
  // }
}
