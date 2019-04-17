(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");





var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DecryptWeb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http-request.service */ "./src/app/http-request.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [
                _http_request_service__WEBPACK_IMPORTED_MODULE_7__["HttpRequestService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
                _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
                _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var AppService = /** @class */ (function () {
    function AppService(cookie) {
        this.cookie = cookie;
        this.key = 'aksjd54Aasdas321eeWEDdsfds65';
    }
    AppService.prototype.encryptData = function (data) {
        try {
            return crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(data.toString(), this.key).toString();
        }
        catch (error) {
            console.log(error);
        }
    };
    AppService.prototype.decryptData = function (data) {
        try {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(data, this.key);
            if (bytes.toString()) {
                return bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
            }
            return data;
        }
        catch (error) {
            console.log(error);
        }
    };
    AppService.prototype.getCurrentToken = function () {
        return this.decryptData(this.cookie.get('9Edasfjalk2145sddcgYYasjfdjaKLjas52as1d'));
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/http-request.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-request.service.ts ***!
  \*****************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");





var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(http, cookie, appService) {
        this.http = http;
        this.cookie = cookie;
        this.appService = appService;
        this.baseUrl = 'http://ist440-ist440.7e14.starter-us-west-2.openshiftapps.com';
        if (this.cookie.get('9Edasfjalk2145sddcgYYasjfdjaKLjas52as1d') != null)
            this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.appService.getCurrentToken() });
    }
    HttpRequestService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + '/api/auth/', userData);
    };
    HttpRequestService.prototype.getUser = function (username) {
        return this.http.get(this.baseUrl + '/api/users/?username=' + username, { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + '/api/users/' + id + '/', { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.uploadImage = function (id, fileToUpload, name) {
        var formData = new FormData();
        formData.append('file_user', id);
        formData.append('file_upload', fileToUpload, name);
        return this.http.post(this.baseUrl + '/api/file/', formData, { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.deleteImage = function (id) {
        return this.http.delete(this.baseUrl + "/api/file/" + id + "/", { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.getImageById = function (id) {
        return this.http.get(this.baseUrl + "/api/file/" + id + "/", { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.getAllImages = function () {
        return this.http.get(this.baseUrl + "/api/file/", { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.requestVisionHandWrittenOcr = function (url) {
        var urlBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/read/core/asyncBatchAnalyze?mode=Handwritten';
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json',
                'ocp-apim-subscription-key': '76ed42ed97b0474eb950c3b163f8090a'
            }),
            observe: 'response'
        };
        // const thisHeaders = new HttpHeaders({
        //   'content-type':'application/json',
        //   'ocp-apim-subscription-key':'76ed42ed97b0474eb950c3b163f8090a'});
        var formData = { "url": url };
        return this.http.post(urlBase, formData, httpOption);
    };
    HttpRequestService.prototype.gettingResult = function (url) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json',
                'ocp-apim-subscription-key': '76ed42ed97b0474eb950c3b163f8090a'
            })
        };
        return this.http.get(url, httpOption);
    };
    HttpRequestService.prototype.createMessage = function (imageId, message) {
        var body = { uploaded_file: imageId, message: message };
        return this.http.post(this.baseUrl + "/api/messages/", body, { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.getMessageByImage = function (imageId) {
        return this.http.get(this.baseUrl + "/api/messages/?uploaded_file=" + imageId, { headers: this.httpHeaders });
    };
    HttpRequestService.prototype.updateMessage = function (id, imageMessage) {
        var body = { message: imageMessage };
        return this.http.patch(this.baseUrl + "/api/messages/" + id + "/", body, { headers: this.httpHeaders });
    };
    HttpRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-wrapper\">\n  <form>\n      <img src=\"http://ist440-ist440.7e14.starter-us-west-2.openshiftapps.com/media/LoginPageIcon.png\">\n      <div class=\"sign-in-error\" *ngIf = \"error\">Please enter the correct username and password. Note that both fields may be case-sensitive.</div>\n      <input [(ngModel)]=\"input.username\" name=\"username\"\n          type=\"text\" placeholder=\"Login ID\">\n      <input [(ngModel)]=\"input.password\" name=\"password\"\n          type=\"password\" placeholder=\"Password\" >\n      <button *ngIf=\"beforeLogin\" (click)=\"onLogin()\">Login</button>\n      <button *ngIf= \"logging\">Logging in ...</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-request.service */ "./src/app/http-request.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpRequest, cookie, appService, router, userService) {
        this.httpRequest = httpRequest;
        this.cookie = cookie;
        this.appService = appService;
        this.router = router;
        this.userService = userService;
        this.error = false;
        this.beforeLogin = true;
        this.logging = false;
        this.expiredValue = new Date();
        this.input = {
            username: '',
            password: ''
        };
        this.expiredValue.setHours(this.expiredValue.getHours() + 12);
        this.ui = this.userService.isLoggedCheck();
        if (this.ui != null)
            this.router.navigate(['main']);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.input = {
            username: '',
            password: ''
        };
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.beforeLogin = false;
        this.logging = true;
        this.error = false;
        this.httpRequest.loginUser(this.input).subscribe(function (response) {
            console.log(_this.input);
            _this.token = 'Token ' + response.token;
            _this.httpRequest.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Authorization': _this.token });
            _this.cookie.set('9Edasfjalk2145sddcgYYasjfdjaKLjas52as1d', _this.appService.encryptData(_this.token), _this.expiredValue, '/');
            _this.cookie.set('isLogged', 'true', _this.expiredValue, '/');
            _this.httpRequest.getUser(_this.input.username).subscribe(function (data) {
                _this.cookie.set('ui', _this.appService.encryptData(data[0].id), _this.expiredValue, '/');
                _this.router.navigate(['main']);
            }, function (error) {
                console.log(error);
                _this.beforeLogin = true;
                _this.logging = false;
            });
        }, function (error) {
            _this.error = true;
            _this.beforeLogin = true;
            _this.logging = false;
            console.log(error);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"loader\" ></div>\n\n<div *ngIf=\"deleteAlert\" class=\"delete-alert\" >\n        <p>Do you want to delete this image?</p>\n        <div class=\"buttons\">\n        <button (click)= deleteYes(chosenImage)>Yes</button>\n        <button (click)=\"deleteNo()\">No</button>\n        </div>\n</div>\n\n<section class=\"indent-1\">\n\n    <section class=\"bank\">\n        <img class='icon' src=\"http://ist440-ist440.7e14.starter-us-west-2.openshiftapps.com/media/LoginPageIcon.png\">\n        <div class=\"user-nav\">\n            Welcome, {{userData.username}}!\n            <button (click) = \"logout()\">Log out</button>\n        </div>\n        <div class=\"file-bank\">\n            <div *ngFor = \"let pastUpload of pastUploads\" (click)=viewImage(pastUpload) >\n                <span class=\"dot\">&#183;</span>\n                <img [src]=\"pastUpload.file_upload\" width=\"20px\" height=\"20px\">\n                <span>Image {{pastUpload.name}}</span>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"scan\">\n        <div class=\"upload\">\n            <p class=\"error\" *ngIf=\"errorType\">This file is not an image file, please re-upload</p>\n            <p class=\"error\" *ngIf=\"errorFile\">There is no file to upload, please choose a file</p>\n            <input type=file id=\"image\" accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n            <button (click) = \"uploadImage()\">Upload</button>\n        </div>\n\n        <input class=\"edit-input\" *ngIf =\"edit\" [(ngModel)]=\"chosenEditText.message\" \n            (keyup.enter)=\"updateText(chosenEditText)\">\n        <input class=\"edit-input\" *ngIf =\"editCurrent\" [(ngModel)]=\"chosenEditText.message\" \n            (keyup.enter)=\"updateMessage(chosenEditText)\">\n\n        <div class=\"function-buttons\">\n            <button (click)=\"editMessage(currentMessage)\" class=\"edit\" *ngIf=\"imageView == false && currentMessage.message != null\">\n                    Edit Text\n            </button>\n            <button (click)=\"editText(chosenImage)\" class=\"edit\" *ngIf=\"imageView && chosenImage.message != null\">\n                        Edit Text\n            </button>\n            <button class=\"delete\" *ngIf=\"chosenImage.file_upload != null\" (click)=\"alertDelete()\">Delete</button>\n        </div>\n        <div class=\"image-view\">\n            <div *ngIf = \"imageView == false\">\n                <div class=\"preview\">\n                    <img *ngIf = \"currentUpload\" [src]=\"currentUpload.file_upload\">   \n                </div>\n                <p class=\"text\" *ngIf = \"currentMessage.message != null\">Plain Text: {{currentMessage.message}}</p>\n            </div> \n            <div *ngIf = \"imageView\">\n                    <div class=\"preview\">\n                        <img *ngIf = \"chosenImage.file_upload != null\" [src]=\"chosenImage.file_upload\">\n                    </div>\n                    <p class=\"text\" *ngIf = \"chosenImage.message != null\">Plain Text: {{chosenImage.message}}</p>\n                </div> \n            <div class=\"button-wrapper\" *ngIf=\"imageView == false\">\n                <button (click)= decrypt(currentMessage) class=\"decrypt-button\">Decrypt</button>\n            </div>   \n            <div class=\"button-wrapper\" *ngIf=\"imageView\">\n                    <button (click)= decrypt(chosenImage) class=\"decrypt-button\">Decrypt</button>\n            </div>        \n        </div>\n    </section>\n</section>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-request.service */ "./src/app/http-request.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_7__);








var MainComponent = /** @class */ (function () {
    function MainComponent(userService, httpRequest, cookie, route, appService) {
        this.userService = userService;
        this.httpRequest = httpRequest;
        this.cookie = cookie;
        this.route = route;
        this.appService = appService;
        this.chosenEditText = { file_upload: null, message: null };
        this.error = true;
        this.loading = false;
        this.result = null;
        this.imageView = false;
        this.errorType = false;
        this.errorFile = false;
        this.language = { lang: null };
        this.userData = {
            id: '',
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            is_superuser: '',
        };
        this.fileToUpload = null;
        this.chosenImage = { file_upload: null, message: null };
        this.currentMessage = '';
        this.incrementName = 1;
        this.deleteAlert = false;
        this.edit = false;
        this.editCurrent = false;
        this.ui = this.userService.isLoggedCheck();
        if (this.ui != null)
            this.getCurrentUser();
        this.getAllImages();
        this.tesseract = tesseract_js__WEBPACK_IMPORTED_MODULE_7__["create"]({
            workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@v1.0.14/dist/worker.min.js',
            langPath: 'https://tessdata.projectnaptha.com/3.02/',
            corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',
        });
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.httpRequest.getUserById(this.ui).subscribe(function (data) {
            _this.userData = data;
        });
    };
    MainComponent.prototype.getAllImages = function () {
        var _this = this;
        this.incrementName = 1;
        this.httpRequest.getAllImages().subscribe(function (data) {
            _this.pastUploads = data;
            data.forEach(function (a) {
                a.name = _this.incrementName;
                _this.incrementName += 1;
            });
        });
    };
    MainComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MainComponent.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); })
                            .then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.uploadImage = function () {
        var _this = this;
        if (this.fileToUpload != null) {
            this.chosenImage = { file_upload: null, message: null };
            this.imageView = false;
            this.errorFile = false;
            if (this.fileToUpload.type.includes('image/') == true) {
                this.errorType = false;
                this.httpRequest.uploadImage(this.ui, this.fileToUpload, this.fileToUpload.name).subscribe(function (data) {
                    alert('upload successfully!');
                    data.name = _this.incrementName;
                    _this.incrementName += 1;
                    _this.currentUpload = data;
                    _this.pastUploads.push(_this.currentUpload);
                    _this.loading = true;
                    _this.tesseract.detect(data.file_upload)
                        .then(function (p) {
                        console.log(p);
                        if (p.tesseract_script_id == 4) {
                            _this.error = false;
                            console.log("Chinese");
                            _this.language = { lang: 'chi_sim' };
                            _this.delay(3000).then(function (any) {
                                _this.usingTesseract(data);
                            });
                        }
                        else if (p.tesseract_script_id == 5) {
                            _this.error = false;
                            console.log("Vietnamese");
                            _this.language = { lang: 'vie' };
                            _this.delay(3000).then(function (any) {
                                _this.usingTesseract(data);
                            });
                        }
                        else {
                            _this.error = false;
                            _this.language = { lang: 'eng' };
                            _this.delay(3000).then(function (any) {
                                _this.httpRequest.requestVisionHandWrittenOcr(data.file_upload).subscribe(function (response) {
                                    console.log(response.headers.get("Operation-Location"));
                                }, function (error) {
                                    console.log(error);
                                });
                            });
                        }
                    });
                    _this.delay(3000).then(function (any) {
                        if (_this.error) {
                            _this.httpRequest.requestVisionHandWrittenOcr(data.file_upload).subscribe(function (response) {
                                var link = response.headers.get("Operation-Location");
                                _this.delay(10000).then(function (any) {
                                    _this.httpRequest.gettingResult(link).subscribe(function (res) {
                                        if (res.recognitionResults[0].lines != null) {
                                            console.log(res.recognitionResults[0].lines);
                                            res.recognitionResults[0].lines.map(function (a) { return a['text']; }).forEach(function (element) {
                                                _this.currentMessage += element + ' ';
                                            });
                                            _this.httpRequest.createMessage(data.id, _this.currentMessage).subscribe(function (response) {
                                                _this.loading = false;
                                                _this.currentMessage = response;
                                            }, function (error) {
                                                console.log(error);
                                            });
                                        }
                                    });
                                });
                            }, function (error) {
                                console.log(error);
                                _this.loading = false;
                                alert("can not read image!");
                            });
                        }
                        else {
                            _this.loading = true;
                        }
                    });
                });
            }
            else
                this.errorType = true;
        }
        else
            this.errorFile = true;
    };
    MainComponent.prototype.viewImage = function (image) {
        var _this = this;
        this.cookie.set('ii', this.appService.encryptData(image.id));
        this.chosenImage = image;
        this.imageView = true;
        this.httpRequest.getMessageByImage(image.id).subscribe(function (response) {
            _this.chosenImage.message = response[0].message;
        });
    };
    MainComponent.prototype.alertDelete = function () {
        this.deleteAlert = true;
    };
    MainComponent.prototype.deleteNo = function () {
        this.deleteAlert = false;
    };
    MainComponent.prototype.deleteYes = function (image) {
        var _this = this;
        this.httpRequest.deleteImage(image.id).subscribe(function (response) {
            _this.chosenImage = { file_upload: null, message: null };
            _this.pastUploads.splice(_this.pastUploads.indexOf(image), 1);
        });
        this.deleteAlert = false;
    };
    MainComponent.prototype.editText = function (image) {
        this.chosenEditText = image;
        this.edit = true;
    };
    MainComponent.prototype.editMessage = function (image) {
        this.chosenEditText = image;
        this.editCurrent = true;
    };
    MainComponent.prototype.updateText = function (data) {
        var _this = this;
        this.loading = true;
        this.httpRequest.getMessageByImage(data.id).subscribe(function (response) {
            _this.httpRequest.updateMessage(response[0].id, data.message).subscribe(function (data) {
                _this.edit = false;
                _this.getAllImages();
                _this.loading = false;
                alert('The text of the image has been changed');
            });
        });
    };
    MainComponent.prototype.updateMessage = function (data) {
        var _this = this;
        this.loading = true;
        this.httpRequest.updateMessage(data.id, data.message).subscribe(function (data) {
            _this.editCurrent = false;
            _this.getAllImages();
            _this.loading = false;
            alert('The text of the image has been changed');
        });
    };
    MainComponent.prototype.decrypt = function (image) {
        alert('this function is currently unavailable, please try again later!');
    };
    MainComponent.prototype.logout = function () {
        this.cookie.deleteAll();
        this.route.navigate(['']);
    };
    MainComponent.prototype.usingTesseract = function (data) {
        var _this = this;
        this.tesseract.recognize(data.file_upload, this.language)
            .progress(function (p) {
            console.log('progress', p);
            if (p.status == "recognizing text" && p.progress == 1) {
                _this.loading = false;
            }
            else {
                _this.loading = true;
            }
        })
            .then(function (result) {
            console.log('result', result.text);
            _this.httpRequest.createMessage(data.id, result.text).subscribe(function (response) {
                _this.currentMessage = response;
            }, function (error) {
                console.log(error);
            });
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-request.service */ "./src/app/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");






var UserService = /** @class */ (function () {
    function UserService(cookie, router, httpRequest, appService) {
        this.cookie = cookie;
        this.router = router;
        this.httpRequest = httpRequest;
        this.appService = appService;
        this.dataUser = {
            id: '',
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            is_superuser: '',
        };
    }
    UserService.prototype.isLoggedCheck = function () {
        if (this.cookie.get('isLogged') != 'true') {
            this.cookie.deleteAll();
            this.router.navigate(['']);
            return null;
        }
        else
            return this.getCurrentUserId();
    };
    UserService.prototype.getCurrentUserId = function () {
        return this.appService.decryptData(this.cookie.get('ui'));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"],
            _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\School\IST440\Project\decryptweb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map