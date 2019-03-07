import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dataUser = {
    id:'',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    is_superuser:'',
  };

  constructor(
    private cookie: CookieService,
    private router: Router,
    private httpRequest: HttpRequestService,
    private appService: AppService,
  ) { }

  isLoggedCheck() {
    if (this.cookie.get('isLogged') != 'true')
    {  
      this.cookie.deleteAll();
      this.router.navigate(['']);
      return null;
    }
    else
      return this.getCurrentUserId();
  }

  getCurrentUserId() {
    return this.appService.decryptData(this.cookie.get('ui'));
  }
  
}
