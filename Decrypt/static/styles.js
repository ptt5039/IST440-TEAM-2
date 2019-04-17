(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.sign-in-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n.sign-in-error {\n    display: block;\n    align-items: center;\n    width: 260px;\n    color: red;\n}\n.sign-in-wrapper img{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    padding-bottom: 50px;\n}\n.sign-in-wrapper input {\n    display: block;\n    /* width: 100%; */\n    padding: 16px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n    margin: 0 0 16px 0;\n    font-size: 20px;\n    border-left: 2px solid transparent;\n}\n.sign-in-wrapper input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.5);\n}\n.sign-in-wrapper button {\n    display: block;\n    background-color: rgba(175, 47, 47, 0.15);\n    width: 100%;\n    padding: 16px;\n    font-size: 20px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 64px;\n}\n.modal {\n\tdisplay:block;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    margin: auto;\n    width: 95%;\n    height: 95%;\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 90%;\n  max-width: 700px;\n}\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n.text {\n    bottom: 100px;\n    margin-left: 40px;\n    margin-right: 40px;\n    text-align: center;\n    line-height: 15px;\n    color:black;\n}\n.past-upload {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n    flex-wrap: wrap;\n}\n.past-upload img {\n    margin: 20px;\n    cursor: pointer;\n}\n.error {\n    color: rgb(255, 0, 0)\n}\n.delete {\n\tposition: relative;\n\ttop: -35px;\n\tmargin-left: -40px;\n\tcolor: #f32a2a;\n\tfont-size: 35px;\n\tfont-weight: bolder;\n\ttransition: 0.3s;\n  }\n.delete:hover,\n.delete:focus {\n\tcolor: rgb(151, 2, 2);\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n.loader {\n    position:absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -50px;\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n    z-index: 1;\n  }\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.indent-1 {\n    \n    float: left;\n  }\n.indent-1 section {\n    display: block;\n    margin: 20px;\n    float: left;\n  }\n.bank {\n    border-style: dotted;\n    width: 250px;\n    height: 100vh;\n}\n.bank .icon {\n    display:block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n}\n.file-bank {\n    width: 250px;\n    height: 75vh;\n    background-color: #ffe1f3cb;\n    overflow: auto;\n}\n.file-bank img {\n    margin-left: 5px;\n    margin-right: 7.5px;\n}\n.file-bank .dot {\n    font-size: 30px;\n    font-weight: bolder;\n}\n.file-bank img span {\n    display: inline-block;\n}\n.file-bank div{\n    margin-bottom: 7.5px;\n    cursor: pointer;\n}\n.scan {\n    top: 100px;\n    text-align: center;\n    width: auto;\n}\n.preview {\n    text-align: center;\n    background-color: rgba(163, 163, 163, 0.699);\n    height: 500px;\n    width: 650px;\n    margin-top: 50px;\n    overflow: auto;\n}\n.preview img {\n    width: 650px;\n    height: 500px;\n}\n.text {\n    max-width: 500px;\n}\n.user-nav {\n    text-align: center;\n    margin-bottom: 10px;\n\n}\n.image-view {\n    display: table;\n}\n.image-view .button-wrapper {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100px;\n}\n.decrypt-button {\n    display: block;\n    background-color: #f14e4e;\n    padding:0.3em 0.6em;\n    margin:auto;\n    border:0.16em solid rgba(255,255,255,0);\n    border-radius:2em;\n    text-decoration:none;\n    font-family:'Roboto',sans-serif;\n    font-weight:300;\n    font-size: 30px;\n    color:#FFFFFF;\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\n    text-align:center;\n    transition: all 0.2s;\n\n}\n.decrypt-button:hover{\n    border-color: rgba(255,255,255,1);\n}\n.upload {\n\n    text-align: center;\n}\n.function-buttons {\n    text-align: center;\n    display: inline;\n}\n.edit{\n    position: relative;\n    top: 40px;\n    margin-left: 60px;\n    color: #0b7c01;\n    font-size: 35px;\n    font-weight: bolder;\n    transition: 0.3s;\n    float: left;\n}\n.delete{\n    margin-right: 210px;\n    float: right;\n    top:40px;\n}\n.delete-alert {\n\tposition: fixed;\n\tdisplay:block;\n  \tz-index: 1; /* Sit on top */\n  \ttop: 300px; /* Location of the box */\n\tpadding-top: 20px;\n\tleft: 530px;\n  \twidth: 500px;\n  \theight: 200px;\n\tbackground-color: rgb(255, 251, 251); /* Fallback color */\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n\n}\n.delete-alert p {\n\tmargin-left: 15px;\n\tfont-size: 30px;\n\tcolor: rgb(207, 29, 29);\n\n}\n.delete-alert button{\n\tcursor: pointer;\n\tpadding: 0 10px 0 10px;\n\tborder: 0;\n\tmargin: 15px;\n\tbackground: none;\n\tfont-size: 150%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: bold;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbackground-color: rgba(175, 47, 47, 0.15);\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.delete-alert .buttons {\n\tdisplay: flex;\n\tmargin-top: 35px;\n\tjustify-content: space-evenly;\n\t\n}\n.edit-input{\n    display: block;\n    font-size: 25px;\n    width: 650px;\n    margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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Q0FDZixvQ0FBb0MsRUFBRSxtQkFBbUI7Q0FDekQsNEVBQTRFOztBQUU3RTtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZix1QkFBdUI7O0FBRXhCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLHFCQUFnQjtNQUFoQixnQkFBZ0I7Q0FDaEIsbUNBQW1DO0NBQ25DLGtDQUFrQztDQUNsQyx5Q0FBeUM7Q0FDekMsNEVBQTRFO0FBQzdFO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLDZCQUE2Qjs7QUFFOUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5zaWduLWluLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2lnbi1pbi1lcnJvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbiAgXG4uc2lnbi1pbi13cmFwcGVyIGltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbiAgXG4uc2lnbi1pbi13cmFwcGVyIGlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuICBcbi5zaWduLWluLXdyYXBwZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4gIFxuLnNpZ24taW4td3JhcHBlciBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG59XG5cbi5tb2RhbCB7XG5cdGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICNiYmI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGV4dCB7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG4ucGFzdC11cGxvYWQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGFzdC11cGxvYWQgaW1nIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKVxufVxuXG4uZGVsZXRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IC0zNXB4O1xuXHRtYXJnaW4tbGVmdDogLTQwcHg7XG5cdGNvbG9yOiAjZjMyYTJhO1xuXHRmb250LXNpemU6IDM1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cdHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgXG4uZGVsZXRlOmhvdmVyLFxuLmRlbGV0ZTpmb2N1cyB7XG5cdGNvbG9yOiByZ2IoMTUxLCAyLCAyKTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IC8qIEJsdWUgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4uaW5kZW50LTEge1xuICAgIFxuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbi5pbmRlbnQtMSBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuLmJhbmsge1xuICAgIGJvcmRlci1zdHlsZTogZG90dGVkO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmFuayAuaWNvbiB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZpbGUtYmFuayB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWYzY2I7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5maWxlLWJhbmsgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNy41cHg7XG59XG5cbi5maWxlLWJhbmsgLmRvdCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5maWxlLWJhbmsgaW1nIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZpbGUtYmFuayBkaXZ7XG4gICAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2NhbiB7XG4gICAgdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cblxuXG4ucHJldmlldyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAxNjMsIDE2MywgMC42OTkpO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDY1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcmV2aWV3IGltZyB7XG4gICAgd2lkdGg6IDY1MHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG59XG5cbi50ZXh0IHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4udXNlci1uYXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi5pbWFnZS12aWV3IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmltYWdlLXZpZXcgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZGVjcnlwdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTRlNGU7XG4gICAgcGFkZGluZzowLjNlbSAwLjZlbTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBib3JkZXI6MC4xNmVtIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gICAgYm9yZGVyLXJhZGl1czoyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDozMDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsMCwwLDAuMzUpO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG59XG5cbi5kZWNyeXB0LWJ1dHRvbjpob3ZlcntcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG5cbi51cGxvYWQge1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnVuY3Rpb24tYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cbi5lZGl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgY29sb3I6ICMwYjdjMDE7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5kZWxldGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOjQwcHg7XG59XG5cbi5kZWxldGUtYWxlcnQge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6YmxvY2s7XG4gIFx0ei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBcdHRvcDogMzAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdGxlZnQ6IDUzMHB4O1xuICBcdHdpZHRoOiA1MDBweDtcbiAgXHRoZWlnaHQ6IDIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTEsIDI1MSk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbn1cbi5kZWxldGUtYWxlcnQgcCB7XG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiByZ2IoMjA3LCAyOSwgMjkpO1xuXG59XG4uZGVsZXRlLWFsZXJ0IGJ1dHRvbntcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuXHRib3JkZXI6IDA7XG5cdG1hcmdpbjogMTVweDtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Zm9udC1zaXplOiAxNTAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmRlbGV0ZS1hbGVydCAuYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbi10b3A6IDM1cHg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRcbn1cblxuLmVkaXQtaW5wdXR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiA2NTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\School\IST440\Project\decryptweb\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map