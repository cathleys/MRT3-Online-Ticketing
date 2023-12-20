import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { UserService } from '../_helpers/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const toastr = inject(ToastrService);

  return userService.currentUser$.pipe(
    map((user) => {
      if (user) return true;
      else {
        toastr.info('You should login first');
        return false;
      }
    })
  );
};
