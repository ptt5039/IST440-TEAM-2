import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  baseUrl = 'http://ist440-ist440.7e14.starter-us-west-2.openshiftapps.com';
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

  requestVisionHandWrittenOcr(url : string) {
    const urlBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/read/core/asyncBatchAnalyze?mode=Handwritten';
    const httpOption = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        'ocp-apim-subscription-key':'76ed42ed97b0474eb950c3b163f8090a'}),
      observe: 'response' as 'response'
    };
    // const thisHeaders = new HttpHeaders({
    //   'content-type':'application/json',
    //   'ocp-apim-subscription-key':'76ed42ed97b0474eb950c3b163f8090a'});
    const formData={"url" : url};
    return this.http.post(urlBase, formData, httpOption);
  }

  gettingResult(url: string) {
    const httpOption = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        'ocp-apim-subscription-key':'76ed42ed97b0474eb950c3b163f8090a'})
    };
    return this.http.get(url, httpOption);
  }

  createMessage(imageId, message): Observable<any> {
    const body = { uploaded_file: imageId, message: message};
    return this.http.post(this.baseUrl + "/api/messages/", body, {headers: this.httpHeaders});
  }

  getMessageByImage(imageId): Observable<any> {
    return this.http.get(this.baseUrl + "/api/messages/?uploaded_file=" + imageId, {headers: this.httpHeaders});
  }

  updateMessage(id, imageMessage): Observable<any> {
    const body = {message: imageMessage}
    return this.http.patch(this.baseUrl + "/api/messages/" + id +"/", body, {headers: this.httpHeaders});
  }
 
}
