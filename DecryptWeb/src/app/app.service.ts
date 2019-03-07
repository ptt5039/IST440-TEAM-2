import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  key = 'aksjd54Aasdas321eeWEDdsfds65';
  constructor(
    private cookie: CookieService,
  ) { }

  encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(data.toString(), this.key).toString();
    } catch (error) {
      console.log(error)
    }
  }

  decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.key)
      if (bytes.toString()) {
        return bytes.toString(CryptoJS.enc.Utf8);
      }
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  getCurrentToken() {
    return this.decryptData(this.cookie.get('9Edasfjalk2145sddcgYYasjfdjaKLjas52as1d'));
  }
}
