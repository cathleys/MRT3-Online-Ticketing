import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDto } from '../api/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSource = new BehaviorSubject<UserDto | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  user?: UserDto;

  setCurrentUser(user: UserDto) {
    this.currentUserSource.next(user);
  }
  loginUser(user: UserDto) {
    this.user = user;
    console.log('user service:', user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
