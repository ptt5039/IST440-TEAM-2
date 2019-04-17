import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error = false;
  beforeLogin = true;
  logging = false;
  token;
  expiredValue = new Date();
  ui;

  input = {
    username: '',
    password: ''
  };

  constructor(
    private httpRequest: HttpRequestService,
    private cookie: CookieService,
    private appService: AppService,
    private router: Router,
    private userService: UserService,
  ) {
    this.expiredValue.setHours(this.expiredValue.getHours() + 12);
    this.ui = this.userService.isLoggedCheck();
    if ( this.ui != null) 
      this.router.navigate(['main'])
   }

  ngOnInit() : void {
      this.input = {
      username: '',
      password: ''
    };
  }

  onLogin() {
    this.beforeLogin = false;
    this.logging = true;
    this.error = false;
    this.httpRequest.loginUser(this.input).subscribe(
      response => {
        console.log(this.input);
        this.token = 'Token ' + response.token;
        this.httpRequest.httpHeaders = new HttpHeaders({'Authorization': this.token});
        this.cookie.set('9Edasfjalk2145sddcgYYasjfdjaKLjas52as1d',
          this.appService.encryptData(this.token), this.expiredValue, '/');
        this.cookie.set('isLogged','true', this.expiredValue, '/');
        this.httpRequest.getUser(this.input.username).subscribe(
          data => {
            this.cookie.set('ui', this.appService.encryptData(data[0].id),
              this.expiredValue, '/');
            this.router.navigate(['main']);
          },
          error => {
            console.log(error);
            this.beforeLogin = true;
            this.logging = false;
          }
        );
      },
      error => {
        this.error = true;
        this.beforeLogin = true;
        this.logging = false;
        console.log(error);
      }     
    )
  }

}
