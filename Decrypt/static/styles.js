(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.sign-in-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n.sign-in-error {\n    display: block;\n    align-items: center;\n    width: 260px;\n    color: red;\n}\n.sign-in-wrapper img{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    padding-bottom: 50px;\n}\n.sign-in-wrapper input {\n    display: block;\n    /* width: 100%; */\n    padding: 16px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n    margin: 0 0 16px 0;\n    font-size: 20px;\n    border-left: 2px solid transparent;\n}\n.sign-in-wrapper input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.5);\n}\n.sign-in-wrapper button {\n    display: block;\n    background-color: rgba(175, 47, 47, 0.15);\n    width: 100%;\n    padding: 16px;\n    font-size: 20px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 64px;\n}\n.modal {\n\tdisplay:block;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    margin: auto;\n    width: 95%;\n    height: 95%;\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 90%;\n  max-width: 700px;\n}\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n.text {\n    bottom: 100px;\n    margin-left: 40px;\n    margin-right: 40px;\n    text-align: center;\n    line-height: 15px;\n    color:black;\n}\n.past-upload {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n    flex-wrap: wrap;\n}\n.past-upload img {\n    margin: 20px;\n    cursor: pointer;\n}\n.error {\n    color: rgb(255, 0, 0)\n}\n.delete {\n\tposition: relative;\n\ttop: -35px;\n\tmargin-left: -40px;\n\tcolor: #f32a2a;\n\tfont-size: 35px;\n\tfont-weight: bolder;\n\ttransition: 0.3s;\n  }\n.delete:hover,\n.delete:focus {\n\tcolor: rgb(151, 2, 2);\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n.loader {\n    position:absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -50px;\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n    z-index: 1;\n  }\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.indent-1 {\n    \n    float: left;\n  }\n.indent-1 section {\n    display: block;\n    float: left;\n    margin: 20px;\n  }\n.bank {\n    border-style: dotted;\n    width: 200px;\n    height: 100vh;\n}\n.bank .icon {\n    display:block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n}\n.file-bank {\n    width: 200px;\n    height: 75vh;\n    background-color: #ffe1f3cb;\n    overflow: auto;\n}\n.file-bank img {\n    margin-left: 5px;\n    margin-right: 7.5px;\n}\n.file-bank .dot {\n    font-size: 30px;\n    font-weight: bolder;\n}\n.file-bank img span {\n    display: inline-block;\n}\n.file-bank div{\n    margin-bottom: 7.5px;\n    cursor: pointer;\n}\n.scan {\n    top: 100px;\n    text-align: center;\n    width: auto;\n}\n.preview {\n    text-align: center;\n    background-color: rgba(163, 163, 163, 0.699);\n    height: 500px;\n    width: 500px;\n    margin-top: 90px;\n    overflow: auto;\n}\n.preview img {\n    width: 500px;\n    height: 500px;\n}\n.text {\n    max-width: 500px;\n    margin-left:-15px;\n}\n.user-nav {\n    text-align: center;\n    margin-bottom: 10px;\n\n}\n.image-view {\n    display: block;\n}\n.image-view .button-wrapper {\n    width: 50px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.decrypt-button {\n    display: block;\n    margin-left: -40px;\n    background-color: #f14e4e;\n    border:0.16em solid rgba(255,255,255,0);\n    border-radius:2em;\n    text-decoration:none;\n    font-family:'Roboto',sans-serif;\n    font-weight:300;\n    font-size: 30px;\n    color:#FFFFFF;\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\n    text-align:center;\n    transition: all 0.2s;\n\n}\n.decrypt-button:hover{\n    border-color: rgba(255,255,255,1);\n}\n.upload {\n    text-align: center;\n}\n.function-buttons {\n    text-align: center;\n    display: inline;\n    margin:10px;\n}\n.edit{\n    position: relative;\n    top: 40px;\n    margin-left: 30px;\n    color: #0b7c01;\n    font-size: 35px;\n    font-weight: bolder;\n    transition: 0.3s;\n    float: left;\n}\n.delete{\n    margin-right: 120px;\n    float: right;\n    top:40px;\n}\n.delete-alert {\n\tposition: fixed;\n\tdisplay:block;\n  \tz-index: 1; /* Sit on top */\n  \ttop: 300px; /* Location of the box */\n\tpadding-top: 20px;\n\tleft: 530px;\n  \twidth: 500px;\n  \theight: 200px;\n\tbackground-color: rgb(255, 251, 251); /* Fallback color */\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n\n}\n.delete-alert p {\n\tmargin-left: 15px;\n\tfont-size: 30px;\n\tcolor: rgb(207, 29, 29);\n\n}\n.delete-alert button{\n\tcursor: pointer;\n\tpadding: 0 10px 0 10px;\n\tborder: 0;\n\tmargin: 15px;\n\tbackground: none;\n\tfont-size: 150%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: bold;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbackground-color: rgba(175, 47, 47, 0.15);\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.delete-alert .buttons {\n\tdisplay: flex;\n\tmargin-top: 35px;\n\tjustify-content: space-evenly;\n\t\n}\n.edit-input{\n    display: block;\n    font-size: 25px;\n    width: 500px;\n    margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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R0FDWixhQUFhO0NBQ2Ysb0NBQW9DLEVBQUUsbUJBQW1CO0NBQ3pELDRFQUE0RTs7QUFFN0U7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsdUJBQXVCOztBQUV4QjtBQUNBO0NBQ0MsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLHdCQUF3QjtDQUN4QixxQkFBZ0I7TUFBaEIsZ0JBQWdCO0NBQ2hCLG1DQUFtQztDQUNuQyxrQ0FBa0M7Q0FDbEMseUNBQXlDO0NBQ3pDLDRFQUE0RTtBQUM3RTtBQUNBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQiw2QkFBNkI7O0FBRTlCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4uc2lnbi1pbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZ24taW4tZXJyb3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG4gIFxuLnNpZ24taW4td3JhcHBlciBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4gIFxuLnNpZ24taW4td3JhcHBlciBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwMyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbiAgXG4uc2lnbi1pbi13cmFwcGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuICBcbi5zaWduLWluLXdyYXBwZXIgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuXG4ubW9kYWwge1xuXHRkaXNwbGF5OmJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMzVweDtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjYmJiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQge1xuICAgIGJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuLnBhc3QtdXBsb2FkIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBhc3QtdXBsb2FkIGltZyB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMClcbn1cblxuLmRlbGV0ZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtMzVweDtcblx0bWFyZ2luLWxlZnQ6IC00MHB4O1xuXHRjb2xvcjogI2YzMmEyYTtcblx0Zm9udC1zaXplOiAzNXB4O1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xuXHR0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuLmRlbGV0ZTpob3Zlcixcbi5kZWxldGU6Zm9jdXMge1xuXHRjb2xvcjogcmdiKDE1MSwgMiwgMik7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuLmluZGVudC0xIHtcbiAgICBcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4uaW5kZW50LTEgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbi5iYW5rIHtcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJhbmsgLmljb24ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5maWxlLWJhbmsge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTFmM2NiO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZmlsZS1iYW5rIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDcuNXB4O1xufVxuXG4uZmlsZS1iYW5rIC5kb3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uZmlsZS1iYW5rIGltZyBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maWxlLWJhbmsgZGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDcuNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNjYW4ge1xuICAgIHRvcDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG5cblxuLnByZXZpZXcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MywgMTYzLCAxNjMsIDAuNjk5KTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJldmlldyBpbWcge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4udGV4dCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tbGVmdDotMTVweDtcbn1cblxuLnVzZXItbmF2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4uaW1hZ2UtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZS12aWV3IC5idXR0b24td3JhcHBlciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZGVjcnlwdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0ZTRlO1xuICAgIGJvcmRlcjowLjE2ZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcbiAgICBib3JkZXItcmFkaXVzOjJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6I0ZGRkZGRjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwLjA0ZW0gMC4wNGVtIHJnYmEoMCwwLDAsMC4zNSk7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbn1cblxuLmRlY3J5cHQtYnV0dG9uOmhvdmVye1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cblxuLnVwbG9hZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnVuY3Rpb24tYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46MTBweDtcbn1cbi5lZGl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgY29sb3I6ICMwYjdjMDE7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5kZWxldGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOjQwcHg7XG59XG5cbi5kZWxldGUtYWxlcnQge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6YmxvY2s7XG4gIFx0ei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBcdHRvcDogMzAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdGxlZnQ6IDUzMHB4O1xuICBcdHdpZHRoOiA1MDBweDtcbiAgXHRoZWlnaHQ6IDIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTEsIDI1MSk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbn1cbi5kZWxldGUtYWxlcnQgcCB7XG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiByZ2IoMjA3LCAyOSwgMjkpO1xuXG59XG4uZGVsZXRlLWFsZXJ0IGJ1dHRvbntcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuXHRib3JkZXI6IDA7XG5cdG1hcmdpbjogMTVweDtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Zm9udC1zaXplOiAxNTAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmRlbGV0ZS1hbGVydCAuYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbi10b3A6IDM1cHg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRcbn1cblxuLmVkaXQtaW5wdXR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIl19 */", '', '']]

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