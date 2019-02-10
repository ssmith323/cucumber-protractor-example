import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LoginInfo } from './models/login-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = new Subject<boolean>();

  constructor() { }

  login(login: LoginInfo): Promise<any> {
    return new Promise((resolve, reject) => {
      if (login.username === 'test.user' && login.password === 'password') {
        setTimeout(resolve, 0, 'promise worked');
        this.isLoggedIn.next(true);
      } else {
        setTimeout(reject, 1500, 'rejected');
      }
    });
  }
}
