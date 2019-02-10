import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  isLoggedInSubscription: Subscription;
  isLoggedIn = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.isLoggedInSubscription = this.loginService.isLoggedIn.subscribe(data => this.isLoggedIn = data);
  }

  ngOnDestroy() {
    this.isLoggedInSubscription.unsubscribe();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
