import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LoginInfo } from './models/login-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('login'));
  }

  login(login: LoginInfo): Promise<any> {
    return new Promise((resolve, reject) => {
      if (login.username === 'test.user' && login.password === 'password') {
        setTimeout(resolve, 0, 'promise worked');
        localStorage.setItem('login', 'true');
        this.isLoggedIn.next(true);
      } else {
        setTimeout(reject, 1500, 'rejected');
      }
    });
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('login');
  }
}
