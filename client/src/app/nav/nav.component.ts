import { Component, OnInit } from '@angular/core';
import { AccountService } from '../api/services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDto } from '../api/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    public accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
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
          this.accountService.setCurrentUser(user);
          this.router.navigateByUrl('/station-fare');
        }
      },
      error: (err) => this.toastr.error(err.error),
    });
  }

  logOut() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
