import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js'
import { CookieService } from 'ngx-cookie-service';
import { HttpRequestService } from '../http-request.service';
import { AppService } from '../app.service';
import { MainComponent } from '../main/main.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-interpret',
  templateUrl: './interpret.component.html',
  styleUrls: ['./interpret.component.css']
})
export class InterpretComponent implements OnInit {

  fd;
  chosenImageId;
  chosenImage;
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private httpRequest: HttpRequestService,
    private appService: AppService,
    private main: MainComponent,
  ) {
    if(this.cookie.get('ii') != null){
      this.chosenImageId = this.appService.decryptData(this.cookie.get('ii'));
      this.getImageById(this.chosenImageId);
    }
    else
    {
      this.chosenImage = this.main.chosenImage;
      console.log(this.main.chosenImage);
      this.interpretImage(this.chosenImage)
    }
   }

  ngOnInit() {
  }

  getImageById(id) {
    this.httpRequest.getImageById(id).subscribe(
      data => {
        this.chosenImage = data
        this.interpretImage(data);
        console.log(data)
      }
    )
  }

  interpretImage(data) {
    Tesseract.detect(this.fd)
      .then(result =>{
    console.log(result)})
  }
}
