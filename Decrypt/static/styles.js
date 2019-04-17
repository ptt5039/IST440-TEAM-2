(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.sign-in-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n.sign-in-error {\n    display: block;\n    align-items: center;\n    width: 260px;\n    color: red;\n}\n.sign-in-wrapper img{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    padding-bottom: 50px;\n}\n.sign-in-wrapper input {\n    display: block;\n    /* width: 100%; */\n    padding: 16px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n    margin: 0 0 16px 0;\n    font-size: 20px;\n    border-left: 2px solid transparent;\n}\n.sign-in-wrapper input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.5);\n}\n.sign-in-wrapper button {\n    display: block;\n    background-color: rgba(175, 47, 47, 0.15);\n    width: 100%;\n    padding: 16px;\n    font-size: 20px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 64px;\n}\n.modal {\n\tdisplay:block;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    margin: auto;\n    width: 95%;\n    height: 95%;\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 90%;\n  max-width: 700px;\n}\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n.text {\n    bottom: 100px;\n    margin-left: 40px;\n    margin-right: 40px;\n    text-align: center;\n    line-height: 15px;\n    color:black;\n}\n.past-upload {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n    flex-wrap: wrap;\n}\n.past-upload img {\n    margin: 20px;\n    cursor: pointer;\n}\n.error {\n    color: rgb(255, 0, 0)\n}\n.delete {\n\tposition: relative;\n\ttop: -35px;\n\tmargin-left: -40px;\n\tcolor: #f32a2a;\n\tfont-size: 35px;\n\tfont-weight: bolder;\n\ttransition: 0.3s;\n  }\n.delete:hover,\n.delete:focus {\n\tcolor: rgb(151, 2, 2);\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n.loader {\n    position:absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -50px;\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n    z-index: 1;\n  }\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.indent-1 {\n    \n    float: left;\n  }\n.indent-1 section {\n    display: block;\n    float: left;\n    margin: 20px;\n  }\n.bank {\n    border-style: dotted;\n    width: 200px;\n    height: 100vh;\n}\n.bank .icon {\n    display:block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n}\n.file-bank {\n    width: 200px;\n    height: 75vh;\n    background-color: #ffe1f3cb;\n    overflow: auto;\n}\n.file-bank img {\n    margin-left: 5px;\n    margin-right: 7.5px;\n}\n.file-bank .dot {\n    font-size: 30px;\n    font-weight: bolder;\n}\n.file-bank img span {\n    display: inline-block;\n}\n.file-bank div{\n    margin-bottom: 7.5px;\n    cursor: pointer;\n}\n.scan {\n    top: 100px;\n    text-align: center;\n    width: auto;\n}\n.preview {\n    text-align: center;\n    background-color: rgba(163, 163, 163, 0.699);\n    height: 500px;\n    width: 500px;\n    margin-top: 90px;\n    overflow: auto;\n}\n.preview img {\n    width: 500px;\n    height: 500px;\n}\n.text {\n    max-width: 500px;\n    margin-left:-15px;\n}\n.user-nav {\n    text-align: center;\n    margin-bottom: 10px;\n\n}\n.image-view {\n    display: block;\n}\n.image-view .button-wrapper {\n    width: 50px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.decrypt-button {\n    display: block;\n    margin-left: -40px;\n    background-color: #f14e4e;\n    border:0.16em solid rgba(255,255,255,0);\n    border-radius:2em;\n    text-decoration:none;\n    font-family:'Roboto',sans-serif;\n    font-weight:300;\n    font-size: 30px;\n    color:#FFFFFF;\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\n    text-align:center;\n    transition: all 0.2s;\n\n}\n.decrypt-button:hover{\n    border-color: rgba(255,255,255,1);\n}\n.upload {\n    text-align: center;\n}\n.function-buttons {\n    text-align: center;\n    display: inline;\n    margin:10px;\n}\n.edit{\n    position: relative;\n    top: 40px;\n    margin-left: 30px;\n    color: #0b7c01;\n    font-size: 25px;\n    font-weight: bolder;\n    transition: 0.3s;\n    float: left;\n}\n.delete{\n    margin-right: 120px;\n    float: right;\n    top:40px;\n    font-size: 25px;\n}\n.delete-alert {\n\tposition: fixed;\n\tdisplay:block;\n  \tz-index: 1; /* Sit on top */\n  \ttop: 300px; /* Location of the box */\n\tpadding-top: 20px;\n\tleft: 530px;\n  \twidth: 500px;\n  \theight: 200px;\n\tbackground-color: rgb(255, 251, 251); /* Fallback color */\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n\n}\n.delete-alert p {\n\tmargin-left: 15px;\n\tfont-size: 30px;\n\tcolor: rgb(207, 29, 29);\n\n}\n.delete-alert button{\n\tcursor: pointer;\n\tpadding: 0 10px 0 10px;\n\tborder: 0;\n\tmargin: 15px;\n\tbackground: none;\n\tfont-size: 150%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: bold;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbackground-color: rgba(175, 47, 47, 0.15);\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.delete-alert .buttons {\n\tdisplay: flex;\n\tmargin-top: 35px;\n\tjustify-content: space-evenly;\n\t\n}\n.edit-input{\n    display: block;\n    font-size: 25px;\n    width: 500px;\n    margin-top: 50px;\n}\n@media all and (max-width: 480px){\n    .delete-alert {\n        display: none;\n    }\n\n    .indent-1 .bank {\n        display: none;\n    }\n\n    .edit-input {\n        display: none;\n    }\n\n    .function-buttons {\n        display: none;\n    }\n\n    .image-view .upload {\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .image-view .preview {\n        height:250px;\n        width:250px;\n        margin-left: auto;\n        margin-right:auto;\n\n    }\n\n    .image-view .preview img {\n        height:250px;\n        width:250px;\n        margin-left: auto;\n        margin-right:auto;\n\n    }\n\n    .image-view .text {\n        display: none;\n\n    }\n\n    .image-view .decrypt-button {\n        display: none;\n    }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0dBQ1QsWUFBWTtHQUNaLGFBQWE7Q0FDZixvQ0FBb0MsRUFBRSxtQkFBbUI7Q0FDekQsNEVBQTRFOztBQUU3RTtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZix1QkFBdUI7O0FBRXhCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLHFCQUFnQjtNQUFoQixnQkFBZ0I7Q0FDaEIsbUNBQW1DO0NBQ25DLGtDQUFrQztDQUNsQyx5Q0FBeUM7Q0FDekMsNEVBQTRFO0FBQzdFO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLDZCQUE2Qjs7QUFFOUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksYUFBYTs7SUFFakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLnNpZ24taW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5zaWduLWluLWVycm9yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBjb2xvcjogcmVkO1xufVxuICBcbi5zaWduLWluLXdyYXBwZXIgaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuICBcbi5zaWduLWluLXdyYXBwZXIgaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4gIFxuLnNpZ24taW4td3JhcHBlciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbiAgXG4uc2lnbi1pbi13cmFwcGVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbn1cblxuLm1vZGFsIHtcblx0ZGlzcGxheTpibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2JiYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbi5wYXN0LXVwbG9hZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wYXN0LXVwbG9hZCBpbWcge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApXG59XG5cbi5kZWxldGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogLTM1cHg7XG5cdG1hcmdpbi1sZWZ0OiAtNDBweDtcblx0Y29sb3I6ICNmMzJhMmE7XG5cdGZvbnQtc2l6ZTogMzVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0dHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICBcbi5kZWxldGU6aG92ZXIsXG4uZGVsZXRlOmZvY3VzIHtcblx0Y29sb3I6IHJnYigxNTEsIDIsIDIpO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvYWRlciB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbi5pbmRlbnQtMSB7XG4gICAgXG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuLmluZGVudC0xIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4uYmFuayB7XG4gICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5iYW5rIC5pY29uIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZmlsZS1iYW5rIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmUxZjNjYjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZpbGUtYmFuayBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3LjVweDtcbn1cblxuLmZpbGUtYmFuayAuZG90IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmZpbGUtYmFuayBpbWcgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlsZS1iYW5rIGRpdntcbiAgICBtYXJnaW4tYm90dG9tOiA3LjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY2FuIHtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuXG5cbi5wcmV2aWV3IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE2MywgMTYzLCAwLjY5OSk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnByZXZpZXcgaW1nIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLnRleHQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XG59XG5cbi51c2VyLW5hdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLmltYWdlLXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1hZ2UtdmlldyAuYnV0dG9uLXdyYXBwZXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmRlY3J5cHQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNGU0ZTtcbiAgICBib3JkZXI6MC4xNmVtIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gICAgYm9yZGVyLXJhZGl1czoyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDozMDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsMCwwLDAuMzUpO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG59XG5cbi5kZWNyeXB0LWJ1dHRvbjpob3ZlcntcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG5cbi51cGxvYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZ1bmN0aW9uLWJ1dHRvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOjEwcHg7XG59XG4uZWRpdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiAjMGI3YzAxO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uZGVsZXRle1xuICAgIG1hcmdpbi1yaWdodDogMTIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDo0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmRlbGV0ZS1hbGVydCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ZGlzcGxheTpibG9jaztcbiAgXHR6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gIFx0dG9wOiAzMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0bGVmdDogNTMwcHg7XG4gIFx0d2lkdGg6IDUwMHB4O1xuICBcdGhlaWdodDogMjAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MSwgMjUxKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cblx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxufVxuLmRlbGV0ZS1hbGVydCBwIHtcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Y29sb3I6IHJnYigyMDcsIDI5LCAyOSk7XG5cbn1cbi5kZWxldGUtYWxlcnQgYnV0dG9ue1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG5cdGJvcmRlcjogMDtcblx0bWFyZ2luOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDE1MCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZGVsZXRlLWFsZXJ0IC5idXR0b25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLXRvcDogMzVweDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFxufVxuXG4uZWRpdC1pbnB1dHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICAuZGVsZXRlLWFsZXJ0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaW5kZW50LTEgLmJhbmsge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5lZGl0LWlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuZnVuY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmltYWdlLXZpZXcgLnVwbG9hZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmltYWdlLXZpZXcgLnByZXZpZXcge1xuICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XG5cbiAgICB9XG5cbiAgICAuaW1hZ2UtdmlldyAucHJldmlldyBpbWcge1xuICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XG5cbiAgICB9XG5cbiAgICAuaW1hZ2UtdmlldyAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICB9XG5cbiAgICAuaW1hZ2UtdmlldyAuZGVjcnlwdC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuIl19 */", '', '']]

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