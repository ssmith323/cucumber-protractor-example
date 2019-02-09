import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  loginFailed = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  async loginUser(): Promise<any> {
    this.isSubmitted = true;
    this.loginFailed = false;
    try {
      await this.loginService.login(this.loginForm.value);
      return await this.router.navigate(['/my-account']);
    } catch (e) {
      this.isSubmitted = false;
      this.loginFailed = true;
    }
  }

}
