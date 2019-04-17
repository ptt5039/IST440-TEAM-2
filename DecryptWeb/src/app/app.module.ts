import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpRequestService } from './http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from './app.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpRequestService,
    CookieService,
    AppService,
    UserService,
    MainComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
