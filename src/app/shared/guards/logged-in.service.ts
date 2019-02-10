import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.loginService.isLoggedIn.pipe(
      map(data => {
        if (!data) {
          this.router.navigate(['/login']);
        }
        return data;
      })
    );
  }
}
