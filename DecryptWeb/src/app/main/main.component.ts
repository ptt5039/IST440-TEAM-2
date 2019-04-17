import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpRequestService } from '../http-request.service';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as Tesseract from 'tesseract.js'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  chosenEditText = {file_upload: null, message: null}
  error = true;
  loading = false;
  result = null;
  tesseract;
  imageView = false;
  errorType = false;
  errorFile = false;
  language = {lang: null};
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
  chosenImage = {file_upload: null, message: null};
  currentMessage = '';
  incrementName = 1;
  deleteAlert = false;
  edit = false;

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

      this.tesseract = Tesseract.create({
        workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@v1.0.14/dist/worker.min.js',
        langPath: 'https://tessdata.projectnaptha.com/3.02/',
        corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',
      })

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
        data.forEach(a => {
          a.name = this.incrementName;
          this.incrementName += 1;
        })
      }
    )
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)    
  }

  async delay(ms: number) {
    await new Promise(
      resolve => setTimeout(() => resolve (), ms))
      .then(() => console.log("fired"));
  }

  uploadImage() {
    if (this.fileToUpload != null){
      this.chosenImage = {file_upload: null, message: null};
      this.imageView = false;
      this.errorFile = false;
      if (this.fileToUpload.type.includes('image/') == true){
        this.errorType = false;
        this.httpRequest.uploadImage(this.ui, this.fileToUpload, 
          this.fileToUpload.name).subscribe(
            data => {
              alert('upload successfully!')
              data.name = this.incrementName;
              this.incrementName += 1;
              this.currentUpload = data;
              this.pastUploads.push(this.currentUpload)
              this.loading=true;
              this.tesseract.detect(data.file_upload)
                .then(p=> {
                  console.log(p)
                  if (p.tesseract_script_id == 4)
                  {
                    this.error = false;
                    console.log("Chinese");
                    this.language = {lang: 'chi_sim'};
                    this.delay(3000).then(any=>
                      {
                        this.usingTesseract(data);
                      });
                    
                  }
                  else if (p.tesseract_script_id == 5)
                  {
                    this.error = false;
                    console.log("Vietnamese")
                    this.language = {lang: 'vie'};
                    this.delay(3000).then(any=>
                      {
                        this.usingTesseract(data);
                      });
                  }
                  else
                  {
                    this.error = false;
                    this.language = {lang: 'eng'};
                    this.delay(3000).then(any=>
                    {
                        this.httpRequest.requestVisionHandWrittenOcr(data.file_upload).subscribe(
                          (response: HttpResponse<any>) => {
                            console.log(response.headers.get("Operation-Location"));
                          },
                          error => {
                            console.log(error);
                          }
                        )
                    });
                  }
                  
                  
                })
                this.delay(3000).then(any=>
                  {
                    if (this.error)
                    {
                      this.httpRequest.requestVisionHandWrittenOcr(data.file_upload).subscribe(
                        (response : HttpResponse<any>) => {
                          const link = response.headers.get("Operation-Location");
                          this.delay(10000).then(any=>
                            {
                              this.httpRequest.gettingResult(link).subscribe(
                                (res: any) => {
                                  if (res.recognitionResults[0].lines != null)
                                  {
                                    
                                    console.log(res.recognitionResults[0].lines);
                                    res.recognitionResults[0].lines.map(function(a)
                                    {return a['text']}).forEach(element => {
                                      this.currentMessage += element + ' ';
                                    });
                                    this.httpRequest.createMessage(data.id, this.currentMessage).subscribe(
                                      response => {
                                        this.loading = false;
                                        this.currentMessage = response;
                                      },
                                      error => {
                                        console.log(error)
                                      }
                                    )
                                  }
                                  
                                }
                              )
                            });
                        },
                        error => {
                          console.log(error);
                          this.loading = false;
                          alert("can not read image!")
                        }
                      )
                    }
                    else {
                      this.loading = true
                    }
                  });
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
    this.httpRequest.getMessageByImage(image.id).subscribe(
      response => {
        this.chosenImage.message = response[0].message;
      }
    )
  }

  alertDelete() {
    this.deleteAlert = true;
  }

  deleteNo() {
    this.deleteAlert = false;
  }

  deleteYes(image) {
    this.httpRequest.deleteImage(image.id).subscribe(
      response => {
        this.chosenImage = {file_upload: null, message: null};
        this.pastUploads.splice(this.pastUploads.indexOf(image), 1);
      }
    )
    this.deleteAlert=false;
  }

  editText(image) {
    this.chosenEditText = image;
    this.edit = true;
  }

  updateText(data) {
    this.httpRequest.getMessageByImage(data.id).subscribe(
      response =>{
          this.httpRequest.updateMessage(response[0].id, data.message).subscribe(
            data => {
              this.getAllImages();
              alert('The text of the image has been changed');
            }
          )
      }
    )
  }

  logout() {
    this.cookie.deleteAll();
    this.route.navigate(['']);
  }

  usingTesseract(data){
    this.tesseract.recognize(data.file_upload, this.language)
      .progress(p => { 
        console.log('progress', p) 
        if (p.status == "recognizing text" && p.progress == 1) 
        {
          this.loading = false;
        }  
        else
        {
          this.loading = true;
        }
      })
      .then(result => {
        console.log('result', result.text)
        this.httpRequest.createMessage(data.id, result.text).subscribe(
          response => {
            this.currentMessage = response;
          },
          error => {
            console.log(error)
          }
        )
      })
  }
}
