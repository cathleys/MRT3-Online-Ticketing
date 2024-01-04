import { Component, OnInit } from '@angular/core';
import { AccountService } from '../api/services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '../api/models';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_helpers/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private accountService: AccountService,
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.accountService.loginAccount({ body: this.loginForm.value }).subscribe({
      next: (user: UserDto) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.userService.setCurrentUser(user);
          this.userService.loginUser(this.loginForm.get('username')?.value);

          this.router.navigateByUrl('/station-fare');
        }
      },
      error: (err) => this.toastr.error(err.error),
    });
  }

  logOut() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
}
