import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private appService: AppService,
  ) { 
    if (this.cookie.get('9Edasfjalk2145sddcgYYasjfdjaKLjas52as1d') != null)
      this.httpHeaders = new HttpHeaders({'Authorization': this.appService.getCurrentToken()});
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.baseUrl + '/api/auth/', userData); 
  }
  
  getUser(username):Observable<any> {
    return this.http.get(this.baseUrl + '/api/users/?username=' + username, {headers: this.httpHeaders})
  }

  getUserById(id): Observable<any> {
    return this.http.get(this.baseUrl + '/api/users/' + id + '/', {headers: this.httpHeaders})
  }

  uploadImage(id, fileToUpload, name): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file_user', id);
    formData.append('file_upload', fileToUpload, name);
    return this.http.post(this.baseUrl + '/api/file/', formData, {headers: this.httpHeaders});
  }

  deleteImage(id){
    return this.http.delete(this.baseUrl + "/api/file/" + id + "/", {headers: this.httpHeaders});
  }

  getImageById(id){
    return this.http.get(this.baseUrl + "/api/file/" + id +"/", {headers: this.httpHeaders});
  }
  
  getAllImages(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/file/", {headers: this.httpHeaders});
  }

  createMessage(imageId, message): Observable<any> {
    const body = { uploaded_file: imageId, message: message};
    return this.http.post(this.baseUrl + "/apo/messages/", body, {headers: this.httpHeaders});
  }

 
}
