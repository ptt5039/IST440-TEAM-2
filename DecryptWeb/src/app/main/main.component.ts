import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpRequestService } from '../http-request.service';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as Tesseract from 'tesseract.js'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  tesseract;
  imageView = false;
  errorType = false;
  errorFile = false;
  ui;
  userData= {
    id:'',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    is_superuser:'',
  };
  fileToUpload: File = null;
  currentUpload;
  pastUploads;
  chosenImage;

  constructor(
    private userService: UserService,
    private httpRequest: HttpRequestService,
    private cookie: CookieService,
    private route: Router,
    private appService: AppService,
  ) {
    this.ui = this.userService.isLoggedCheck()
    if ( this.ui != null)
      this.getCurrentUser();
      this.getAllImages();
   }

  ngOnInit() {
  }

  

  getCurrentUser() {
    this.httpRequest.getUserById(this.ui).subscribe(
      data => {
        this.userData = data;
      }
    )
  }

  getAllImages() {
    this.httpRequest.getAllImages().subscribe(
      data => {
        this.pastUploads = data;
      }
    )
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
    
    
  }

  uploadImage() {
    if (this.fileToUpload != null){
      this.errorFile = false;
      if (this.fileToUpload.type.includes('image/') == true){
        this.errorType = false;
        this.httpRequest.uploadImage(this.ui, this.fileToUpload, 
          this.fileToUpload.name).subscribe(
            data => {
              alert('upload successfully!')
              if(this.currentUpload != null)
                this.pastUploads.push(this.currentUpload)
              this.currentUpload = data;
              this.tesseract = Tesseract.create({
                workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@v1.0.14/dist/tesseract.min.js',
                langPath: 'https://tessdata.projectnaptha.com/3.02/',
                corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',
              })
              this.tesseract.recognize(data.file_upload)
              .progress((p) => { console.log('progress', p) })
              .then((result) => {
                console.log('result', result);
              })
          }
          )
        }
      else
        this.errorType = true;
    }
    else
      this.errorFile = true;
  }

  viewImage(image) {
    this.cookie.set('ii', this.appService.encryptData(image.id))
    this.chosenImage = image;
    this.imageView = true;
    this.route.navigate(['inter'])
  }

  deleteImage(image) {
    this.httpRequest.deleteImage(image.id).subscribe(
      response => {
        this.pastUploads.splice(this.pastUploads.indexOf(image), 1)
      }
    )
  }

  logout() {
    this.cookie.deleteAll();
    this.route.navigate(['']);
  }
}
