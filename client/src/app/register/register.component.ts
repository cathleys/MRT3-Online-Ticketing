import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../api/services';
import { Router } from '@angular/router';
import { UserDto } from '../api/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      isFemale: [true, Validators.required],
    });
  }

  register() {
    const values = { ...this.registerForm.value };

    this.accountService.registerAccount({ body: values }).subscribe({
      next: (user: UserDto) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/station-fare');
          console.log(user);
        }
      },
      error: (error) => {
        this.toastr.error(error.error);
        console.log(error);
      },
    });
  }
}
