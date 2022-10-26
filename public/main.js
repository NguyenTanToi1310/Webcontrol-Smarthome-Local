(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cognito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cognito.service */ "pUv1");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service.service */ "UPSQ");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function LoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0110\u0103ng nh\u1EADp th\u00E0nh c\u00F4ng !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_28_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.statusLogin.message);
} }
function LoginComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_ng_template_28_h3_0_Template, 2, 1, "h3", 18);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.statusLogin !== "");
} }
const _c0 = function () { return ["/registration"]; };
class LoginComponent {
    constructor(router, cognitoService, auth, common) {
        this.router = router;
        this.cognitoService = cognitoService;
        this.auth = auth;
        this.common = common;
        this.information = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.user = {};
    }
    ngOnInit() {
        this.statusLogin = {
            message: "",
        };
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user.email = this.information.value.email;
            this.user.password = this.information.value.password;
            // console.log(this.user.email)
            // console.log(this.user.password)
            this.statusLogin = yield this.auth.signIn(this.user);
            if (!this.statusLogin) {
                this.router.navigate(['/home']);
                this.statusLogin = "SIGNIN_OK";
                this.auth.isLogin();
            }
            // this.cognitoService.currentSession().then(res=>{
            //   let accessToken = res.getAccessToken()
            //   let jwt = accessToken.getJwtToken()
            //   You can print them to see the full objects
            //   console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
            //   console.log(`myJwt: ${jwt}`)
            // })
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cognito_service__WEBPACK_IMPORTED_MODULE_4__["CognitoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 30, vars: 7, consts: [["id", "content"], ["id", "left"], ["src", "../../../assets/sign-in-sign-up/signin-image.jpg"], ["id", "right"], [1, "d-flex", "display-4", "title-standee"], [1, "d-flex"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "type", "email", "formControlName", "email", "required", "", 3, "email"], ["matInput", "", "type", "password", "formControlName", "password", "required", ""], ["mat-flat-button", "", "type", "submit", "color", "primary", 1, "example-button-row", 3, "disabled"], [2, "margin-top", "20px"], [1, "forgetPass-login"], ["routerLinkActive", "router-link-active", 1, "forgetPass-login", 2, "margin-left", "60px", 3, "routerLink"], [1, "d-flex", "notify-status"], [1, "example-form"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0110\u0103ng nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "M\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " \u0110\u0103ng nh\u1EADp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Qu\u00EAn m\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, LoginComponent_ng_template_28_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.information);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("email", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.information.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusLogin === "SIGNIN_OK")("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 300px;\n  width: 100%;\n  \n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-standee[_ngcontent-%COMP%] {\n  \n  font-size: 35px;\n  width: 100%;\n  \n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.forgetPass-login[_ngcontent-%COMP%] {\n  \n  font-size: 15px;\n}\n\n.forgetPass-login[_ngcontent-%COMP%]:hover {\n  color: red;\n  cursor: pointer;\n  transition: 0.4s; \n}\n\n.notify-status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: red;\n  \n}\n\n#content[_ngcontent-%COMP%]{\n  width: 50vw;\n  height: 50vh;\n  margin: 15vh auto;\n  \n}\n\n#left[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  text-align: right;\n}\n\n#right[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50%;\n  padding-top: 40px;\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUUseUJBQXlCO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLXN0YW5kZWUge1xuICAvKiBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cbiAgZm9udC1zaXplOiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuXG4uZm9yZ2V0UGFzcy1sb2dpbiB7XG4gIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZm9yZ2V0UGFzcy1sb2dpbjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40czsgLyogdOG6oW8gxJHhu5kgdHLhu4UgY2hvIGhvdmVyICovXG59XG5cbi5ub3RpZnktc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgLyogZm9udC1mYW1pbHk6IExvcmE7ICovXG59XG4jY29udGVudHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxNXZoIGF1dG87XG4gIFxufVxuI2xlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4jcmlnaHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KLTN\Webcontrol-Smarthome\src\main.ts */"zUnb");


/***/ }),

/***/ "0aRt":
/*!************************************!*\
  !*** ./src/app/user/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth-service.service */ "UPSQ");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-service.service */ "aCBZ");



class AuthGuard {
    constructor(auth, common) {
        this.auth = auth;
        this.common = common;
    }
    canActivate(route, state) {
        if (!this.auth.isLogin()) {
            this.common.loginPage();
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2EcK":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [["id", "content"], ["id", "left"], ["id", "logo-lite", "src", "../../../assets/logo/warmhouse-lite.png"], ["id", "description"], ["id", "right"], ["id", "bg", "src", "../../../assets/home-page/background.jpg"], ["id", "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gi\u1EA3i ph\u00E1p Nh\u00E0 th\u00F4ng minh (Smart Home Solution) l\u00E0 s\u1EF1 thi\u1EBFt k\u1EBF c\u00E1c thi\u1EBFt b\u1ECB nh\u00E0 th\u00F4ng minh (Smart Home Devices) theo nhu c\u1EA7u c\u1EE7a ch\u1EE7 nh\u00E0, nh\u1EB1m k\u1EBFt n\u1ED1i v\u00E0 \u0111i\u1EC1u khi\u1EC3n c\u00E1c thi\u1EBFt b\u1ECB \u0111i\u1EC7n trong nh\u00E0 nh\u01B0 \u0111\u00E8n chi\u1EBFu s\u00E1ng, r\u00E8m c\u1EEDa, b\u00ECnh n\u01B0\u1EDBc n\u00F3ng, Tivi, \u0111i\u1EC1u h\u00F2a\u2026 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Copyright \u00A9 2021 by WarmHouse Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#bg[_ngcontent-%COMP%]{\n    width:520px; \n    height: auto;\n}\nbody[_ngcontent-%COMP%]{\n    \n    height: 90vh;\n    width: 100vw;\n    padding: 0px 100px 0px 0px;\n    position: absolute;\n}\n#content[_ngcontent-%COMP%]{\n    width: 80vw;\n    height: 60vh;\n    margin-top: 10vh;\n    margin-left: 10vw;\n}\n#left[_ngcontent-%COMP%] {\n    padding-left:0vw;\n    float: left;\n    width: 50%;\n    text-align: justify;\n    \n  }\n#right[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 50%;\n    text-align: right;\n}\n#logo-lite[_ngcontent-%COMP%]{\n    height: 60px;\n    width: auto;\n}\n#description[_ngcontent-%COMP%]{\n    font-size: 30px;\n    font-weight: bold;\n}\n#footer[_ngcontent-%COMP%]{\n    text-align: center;\n    background-color: rgb(73, 73, 73);\n    color: white;\n    width: 100vw;\n    height: 4vh;\n    bottom: 0px;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvS0c7QUFDSDtJQUNJLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDO0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5iYWNrZ3JvdW5kLWhvbWUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lLXBhZ2UvYmFja2dyb3VuZC05LmpwZ1wiKTsgXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRleigwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGV6KDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgei1pbmRleDogMDtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpOyBcbn1cblxuLmJvZHktY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIxMywgMjEzLCAwLjIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uanNzMDEtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgICBtaW4taGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uanNzMDEtY29udGVudCAuanNzMDEtY29udGVudC0wMDEge1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBhbmltYXRpb24tbmFtZToganNzMDEtY29udGVudC0wMDE7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbn1cbkBrZXlmcmFtZXMganNzMDEtY29udGVudC0wMDEge1xuICAgIGZyb20ge3BhZGRpbmctdG9wOiAxMDBweH1cbiAgICB0byB7fVxufVxuXG5cbi5qc3MwMS1jb250ZW50IC5qc3MwMS1jb250ZW50LTAwMSBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBmb250LWZhbWlseTogTG9yYSwgSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZiwgVGFob21hO1xufVxuLmpzczAxLWNvbnRlbnQgLmpzczAxLWNvbnRlbnQtMDAxIGgxIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZhMDAwO1xufVxuXG4uanNzMDEtY29udGVudCAuanNzMDEtY29udGVudC0wMDEgaDIge1xuICAgIGNvbG9yOiByZ2IoMjM0LCAxMSwgMjQxKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmpzczAyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzV2aDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uanNzMDItY29udGVudC0wMDEge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGExMzM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM2Yzg2NjgsICMwNzk2MWEpO1xufVxuXG4uanNzMDItY29udGVudCAucm93IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50OyAgIFxufVxuLmpzczAyLWNvbnRlbnQgLmZhcm0taW5mb3JtYXRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIwNiwgMjAzLCAwLjIpO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDIzNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDFweDtcbn1cbi5qc3MwMi1jb250ZW50IC5mYXJtLWluZm9ybWF0aW9uOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5qc3MwMi1jb250ZW50IC5mYXJtLWluZm9ybWF0aW9uIC5mYXJtLWluZm9ybWF0aW9uLTAwMSB7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5cbi5qc3MwMi1jb250ZW50IC5mYXJtLWluZm9ybWF0aW9uIC50ZWNobm9sb2d5LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoNTQsIDQ5LCA1NCwgMC44KTtcbn1cblxuLmZvb3Rlci1ib3gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4IDtcbn1cblxuI2JveC0wMDEge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuI2JveC0wMDEgaDEsICNib3gtMDAyIGgxLCAjYm94LTAwMyBoMSB7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWYsIFRhaG9tYTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufVxuI2JveC0wMDEgaDEgc3BhbntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IExvcmEsIEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWYsIFRhaG9tYTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjZmZhMDAwO1xufVxuI2JveC0wMDEgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMyk7XG59XG5cbiNib3gtMDAyIHVsIGxpLCBhe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogcmdiKDIyMiwgMjIyLCAyMjMpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbiNib3gtMDAyIHVsIGxpOmhvdmVyLCBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2FmYTYyNztcbn1cblxuI2JveC0wMDMgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMyk7XG59XG5cbiNjb3BweXJpZ2h0LXdhcm1ob3VzZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgVGFob21hO1xuICAgIGNvbG9yOiAjNTMzYzEzO1xufSAqL1xuI2Jne1xuICAgIHdpZHRoOjUyMHB4OyAvKiB5b3UgY2FuIHVzZSAlICovXG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuYm9keXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZmQ1OyAqL1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2NvbnRlbnR7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59XG4jbGVmdCB7XG4gICAgcGFkZGluZy1sZWZ0OjB2dztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLyogY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAqL1xuICB9XG4jcmlnaHQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNsb2dvLWxpdGV7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuI2Rlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNmb290ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDczKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNHZoO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseConfig: {
        // apiKey: "AIzaSyCjTIsWo-ZVC8ggWIDa-xyxWeZ1270FPTM",
        // authDomain: "smarthomev1-3713d.firebaseapp.com",
        // databaseURL: "https://smarthomev1-3713d.firebaseio.com",
        // projectId: "smarthomev1-3713d",
        // storageBucket: "smarthomev1-3713d.appspot.com",
        // messagingSenderId: "980677063692",
        // appId: "1:980677063692:web:156c14da1f4c9aafab6a29"
        apiKey: "AIzaSyAY3M7_DxwgMgaPktojTNnPDQfanVxRHAQ",
        authDomain: "smarthome-quoctoi-bfa7d.firebaseapp.com",
        databaseURL: "https://smarthome-quoctoi-bfa7d-default-rtdb.firebaseio.com",
        projectId: "smarthome-quoctoi-bfa7d",
        storageBucket: "smarthome-quoctoi-bfa7d.appspot.com",
        messagingSenderId: "772364253996",
        appId: "1:772364253996:web:d4a8b9a083d6beb8784a89",
    },
    cognito: {
        userPoolId: 'ap-southeast-1_J7vJimaTM',
        userPoolWebClientId: '2ahhouuiiu8eho8e041sifhtag',
    }
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

/***/ "OACj":
/*!***************************************************************!*\
  !*** ./src/app/page/confirm-email/confirm-email.component.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



const _c0 = function () { return ["/login"]; };
class ConfirmEmailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmEmailComponent.ɵfac = function ConfirmEmailComponent_Factory(t) { return new (t || ConfirmEmailComponent)(); };
ConfirmEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmEmailComponent, selectors: [["app-confirm-email"]], decls: 13, vars: 2, consts: [[1, "box-email-css", "justify-content-center"], [1, "d-flex", "justify-content-center"], ["src", "../../../assets/email-page/email-check.png", "width", "25%", "alt", ""], [1, "box-email-content"], ["routerLinkActive", "router-link-active", 1, "login", 3, "routerLink"], ["mat-flat-button", "", "type", "submit", "color", "primary", 1, "example-button-row"]], template: function ConfirmEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ch\u00FAng t\u00F4i \u0111\u00E3 g\u1EEDi \u0111\u1EBFn b\u1EA1n m\u1ED9t email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vui l\u00F2ng x\u00E1c nh\u1EADn \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n b\u1EB1ng c\u00E1ch nh\u1EA5p v\u00E0o \u0111\u01B0\u1EDDng link trong email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sau khi x\u00E1c nh\u1EADn, b\u1EA1n c\u00F3 th\u1EC3 \u0111\u0103ng nh\u1EADp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0110\u0103ng nh\u1EADp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".box-email-content[_ngcontent-%COMP%] {\n    font-size: 25px;\n    padding-top: 25px;\n}\n.login[_ngcontent-%COMP%]{\n    min-width: 25vw;\n    text-align: center;\n    padding-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImNvbmZpcm0tZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtZW1haWwtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLmxvZ2lue1xuICAgIG1pbi13aWR0aDogMjV2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59Il19 */"] });


/***/ }),

/***/ "PPYe":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service.service */ "UPSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function RegistrationComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0110\u0103ng k\u00FD th\u00E0nh c\u00F4ng !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistrationComponent_ng_template_44_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.statusRegistration.message);
} }
function RegistrationComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RegistrationComponent_ng_template_44_h3_0_Template, 2, 1, "h3", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.statusRegistration !== "");
} }
const _c0 = function () { return ["/login"]; };
class RegistrationComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.information = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            repassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.statusRegistration = {
            message: ""
        };
    }
    registration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.information.value.password == this.information.value.repassword) {
                this.statusRegistration = yield this.auth.signUp(this.information);
                if (!this.statusRegistration.message) {
                    const profile = {
                        phone: this.information.value.phone,
                        firstname: this.information.value.firstname,
                        lastname: this.information.value.lastname
                    };
                    let edit = yield this.auth.updateProfileUser(profile);
                    if (edit) {
                        this.statusRegistration = "SIGNUP_OK";
                        this.router.navigate(['/confirm-email']);
                    }
                    ;
                    this.router.navigate(['/confirm-email']);
                }
            }
            else {
                this.statusRegistration.message = "Xác nhận mật khẩu không trùng khớp";
            }
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 46, vars: 7, consts: [["id", "content"], ["id", "left"], ["src", "../../../assets/sign-in-sign-up/signin-image.jpg"], ["id", "right"], ["routerLinkActive", "router-link-active", 1, "login", 3, "routerLink"], [2, "vertical-align", "middle", "display", "inline-block"], [1, "d-flex", "title-standee"], [1, "d-flex"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "type", "text", "formControlName", "firstname", "ngModel", "", "required", ""], ["matInput", "", "type", "email", "formControlName", "lastname", "ngModel", "", "required", ""], ["matInput", "", "type", "email", "formControlName", "email", "ngModel", "", "required", "", 3, "email"], ["matInput", "", "type", "password", "formControlName", "password", "required", ""], ["matInput", "", "type", "password", "formControlName", "repassword", "required", ""], ["matInput", "", "type", "number", "formControlName", "phone", "required", ""], ["mat-flat-button", "", "type", "submit", "color", "primary", 1, "example-button-row", 3, "disabled"], [1, "d-flex", "notify-status"], [1, "example-form"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0110\u0103ng nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_13_listener() { return ctx.registration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "H\u1ECD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "T\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "M\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i (+84)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " \u0110\u0103ng k\u00FD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, RegistrationComponent_div_43_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, RegistrationComponent_ng_template_44_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.information);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("email", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.information.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusRegistration === "SIGNUP_OK")("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 300px;\n  width: 100%;\n  \n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-standee[_ngcontent-%COMP%] {\n  \n  font-size: 35px;\n  width: 100%;\n  \n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.forgetPass-login[_ngcontent-%COMP%] {\n  \n  font-size: 15px;\n}\n\n.forgetPass-login[_ngcontent-%COMP%]:hover {\n  color: red;\n  transition: 0.4s; \n}\n\n.notify-status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: red;\n  \n}\n\n\n\n#content[_ngcontent-%COMP%]{\n  width: 50vw;\n  height: 50vh;\n  margin: 5vh auto;\n  \n}\n\n#left[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  text-align: right;\n  margin: 10vh auto;\n}\n\n#right[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50%;\n  padding-top: 30px;\n  padding-left: 50px;\n}\n\n.login[_ngcontent-%COMP%] {\n  \n  font-size: 20px;\n}\n\n.login[_ngcontent-%COMP%]:hover {\n  color: red;\n  cursor: pointer;\n  transition: 0.4s; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUUseUJBQXlCO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7dUdBQ3VHOztBQUN2RztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0IsRUFBRSx5QkFBeUI7QUFDN0MiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtc3RhbmRlZSB7XG4gIC8qIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyAqL1xuICBmb250LXNpemU6IDM1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG5cbi5mb3JnZXRQYXNzLWxvZ2luIHtcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mb3JnZXRQYXNzLWxvZ2luOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogMC40czsgLyogdOG6oW8gxJHhu5kgdHLhu4UgY2hvIGhvdmVyICovXG59XG5cbi5ub3RpZnktc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgLyogZm9udC1mYW1pbHk6IExvcmE7ICovXG59XG5cbi8qIGtodW5nIOG7nyBsb2dpbiBz4bq9IG1hcmdpbiAxNXZoID0+IMSR4buDIG7Dom5nIGZvcm0gxJHEg25nIGvDvSBsw6puID0+IG7Dom5nIGPhuqMgY29udGVudCBsw6puIHRow6ptIDEwdmhcbj0+IGNvbnRlbnQgYsOqbiBuw6B5IG1hcmdpbiA1dmgsIMSR4buDIGxlZnQgc2lnbiB1cCB0csO5bmcgbGVmdCBzaWduIGluIHRow6wgbGVmdCBzaWduIHVwIHBo4bqjaSBo4bqhIHh14buRbmcgMTB2aCAqL1xuI2NvbnRlbnR7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogNXZoIGF1dG87XG4gIFxufVxuI2xlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMTB2aCBhdXRvO1xufVxuI3JpZ2h0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmxvZ2luIHtcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sb2dpbjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40czsgLyogdOG6oW8gxJHhu5kgdHLhu4UgY2hvIGhvdmVyICovXG59XG4iXX0= */"] });


/***/ }),

/***/ "S3tI":
/*!*****************************************************!*\
  !*** ./src/app/page/personal/personal.component.ts ***!
  \*****************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function PersonalComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0111\u00E3 chia s\u1EBB thi\u1EBFt b\u1ECB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " v\u1EDBi b\u1EA1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalComponent_div_11_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const index_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.replyDemand(index_r4, "accept", 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0110\u1ED3ng \u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalComponent_div_11_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const index_r4 = ctx.$implicit; const emlement_r5 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.replyDemand(index_r4, "refuse", emlement_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "T\u1EEB ch\u1ED1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r4 = ctx.$implicit;
    const emlement_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.listEmailShareRequest[emlement_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](index_r4);
} }
function PersonalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PersonalComponent_div_11_div_1_Template, 14, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listdeviceIdShareRequest);
} }
function PersonalComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kh\u00F4ng c\u00F3 th\u00F4ng b\u00E1o m\u1EDBi n\u00E0o");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PersonalComponent {
    constructor(common) {
        this.common = common;
        this.listdeviceIdShareRequest = [];
        this.listEmailShareRequest = [];
        this.listUIDShareRequest = [];
        this.numberDeviceShare = 0;
    }
    ngOnInit() {
        this.userInfor = this.common.userInfor;
        this.common.getShareHistories();
        this.common.getShareRequest();
        this.common.numberDeviceShare$.subscribe(number => {
            this.numberDeviceShare = number;
        });
        this.common.listShareRequest.subscribe(res => {
            this.listdeviceIdShareRequest = [];
            this.listEmailShareRequest = [];
            this.listUIDShareRequest = [];
            let list = Object.keys(res);
            list.forEach(element => {
                Object.keys(res[element]).forEach((sharers) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if ((res[element])[sharers].deviceId && (res[element])[sharers].status == "waiting") {
                        this.listdeviceIdShareRequest.push((res[element])[sharers].deviceId);
                        this.listUIDShareRequest.push((res[element])[sharers].from);
                        this.listEmailShareRequest.push((yield this.common.searchByUID((res[element])[sharers].from)).email);
                    }
                }));
            });
        });
    }
    replyDemand(deviceId, command, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (command === "accept") {
                yield this.common.acceptShareDeviceDemand(deviceId);
            }
            else if (command === "refuse") {
                yield this.common.refuseShareDeviceDemand(deviceId, this.listUIDShareRequest[index]);
            }
        });
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 14, vars: 4, consts: [[1, "content"], [1, "left"], [1, "hero-text"], ["src", "../../../assets/about/toi.jpg", "width", "100px", "alt", "Avatar", 1, "avatar"], [2, "font-size", "30px", "text-align", "center"], [2, "font-size", "20px", "text-align", "center"], ["class", "right", 4, "ngIf", "ngIfElse"], ["noNoti", ""], [1, "right"], [4, "ngFor", "ngForOf"], [1, "info-box"], [2, "margin-bottom", "10px", "font-size", "15px"], [2, "color", "#FF914D", "font-weight", "bold"], [2, "text-align", "right"], ["mat-flat-button", "", 1, "decision-btn", 3, "click"], [2, "text-align", "center", "font-size", "18px"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PersonalComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PersonalComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userInfor.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userInfor.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numberDeviceShare !== 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n\n.hero-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 43%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  width: 100%;\n}\n\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    vertical-align: middle;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 3px solid white;\n}\n\n\n.content[_ngcontent-%COMP%]{\n    width: 80vw;\n    height: 60vh;\n    margin-top: 10vh;\n    margin-left: 10vw;\n}\n\n\n.left[_ngcontent-%COMP%] {\n  padding-left:0vw;\n  float: left;\n  width: 50%;\n  text-align: justify;\n  \n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('uit2.jpg');\n  height: 50%;\n  min-height: 350px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-radius: 10px;\n}\n\n\n.right[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50%;\n  text-align: left;\n\n  \n}\n\n\n.info-box[_ngcontent-%COMP%] {\n  background-color: rgb(243, 243, 243);\n  width: 90%;\n  border-radius: 10px;\n  padding: 15px 15px;\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n\n\n.decision-btn[_ngcontent-%COMP%]{\n  margin-right:10px;\n  background-color: rgb(243, 243, 243);\n  \n}\n\n\n.decision-btn[_ngcontent-%COMP%]:hover{\n  color:white;\n  background-color: #FF914D;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwRkFBaUg7RUFDakgsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCOztFQUVoQjs7O3FCQUdtQjtBQUNyQjs7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLCtCQUErQjtBQUNqQzs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwZXJzb25hbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5oZXJvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MyU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdmF0YXIge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNvbnRlbnR7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59XG4ubGVmdCB7XG4gIHBhZGRpbmctbGVmdDowdnc7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAvKiBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy8vYWJvdXQvdWl0Mi5qcGdcIik7XG4gIGhlaWdodDogNTAlO1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucmlnaHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIC8qIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3OyovXG59XG5cbi5pbmZvLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kZWNpc2lvbi1idG57XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxNEQ7ICovXG59XG4uZGVjaXNpb24tYnRuOmhvdmVye1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTE0RDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-service.service */ "UPSQ");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function () { return ["/login"]; };
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0110\u0103ng nh\u1EADp/\u0110\u0103ng k\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function AppComponent_div_18_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.userInfor.name);
} }
function AppComponent_div_18_button_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "marquee", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r5.userInfor.name, " c\u00F3 ", ctx_r5.numberDeviceShare, " th\u00F4ng b\u00E1o");
} }
const _c1 = function () { return ["/personal-page"]; };
function AppComponent_div_18_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_18_button_1_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_18_button_1_ng_template_2_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numberDeviceShare == 0)("ngIfElse", _r4);
} }
function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_18_button_1_Template, 4, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0110\u0103ng xu\u1EA5t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r1.userInfor);
} }
const _c2 = function () { return ["/information-device"]; };
const _c3 = function () { return ["/home"]; };
const _c4 = function () { return ["/about"]; };
class AppComponent {
    constructor(auth, common, router) {
        this.auth = auth;
        this.common = common;
        this.router = router;
        this.title = 'WebControl';
        this.logined = this.auth.isLogin();
        if (this.logined) {
            this.userInfor = this.common.userInfor;
        }
        else {
            this.userInfor = "";
        }
        this.common.getShareRequest();
        this.common.numberDeviceShare$.subscribe(number => {
            this.numberDeviceShare = number;
        });
    }
    ngOnInit() {
        this.auth.currentMessage.subscribe(message => {
            this.logined = message;
            if (this.logined) {
                this.userInfor = this.common.userInfor;
            }
            else {
                this.userInfor = "";
            }
        });
        this.common.getShareRequest();
        this.common.numberDeviceShare$.subscribe(number => {
            this.numberDeviceShare = number;
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.signOut();
            // await localStorage.removeItem("access_token")
            this.logined = this.auth.isLogin();
            this.userInfor = "";
            location.reload();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "max-height", "10vh", "background-color", "#ffffff !important", "color", "aliceblue !important"], [1, "container-fluid"], ["href", "/home", 1, "navbar-brand-name"], ["src", "../assets/logo/warmhouse.png", 1, "navbar-brand-name"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "button-name"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "me-auto"], [1, "example-button-row"], ["mat-button", "", "routerLinkActive", "router-link-active", 1, "button-hover", 3, "routerLink"], ["class", "notLogined", 4, "ngIf"], ["class", "Logined", 4, "ngIf"], [1, "notLogined"], ["mat-flat-button", "", "routerLinkActive", "router-link-active", 1, "loginButton", 3, "routerLink"], [1, "Logined"], ["class", "userName", "mat-flat-button", "", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], ["mat-flat-button", "", 1, "logoutButton", 3, "click"], ["mat-flat-button", "", "routerLinkActive", "router-link-active", 1, "userName", 3, "routerLink"], [4, "ngIf", "ngIfElse"], ["noti", ""], [2, "width", "9vw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0110i\u1EC1u khi\u1EC3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Mua h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Gi\u1EDBi thi\u1EC7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_div_17_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_div_18_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logined == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logined == true);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".navbar-brand-name[_ngcontent-%COMP%] {\n    height: 10vh;\n    width:auto;\n    margin-left: 20px;\n}\n.navbar-collapse[_ngcontent-%COMP%]{\n    color:#FF914D\n}\na[_ngcontent-%COMP%]:-webkit-any-link {\n    text-decoration: underline;\n    text-decoration: none;\n    color: aliceblue;\n}\nbutton[_ngcontent-%COMP%]   .button-name[_ngcontent-%COMP%] {\n    outline: none;\n}\n.example-button-row[_ngcontent-%COMP%]{\n    padding-right: 10px;\n}\n.button-hover[_ngcontent-%COMP%]{\n    font-size: 15px;\n    \n}\n.button-hover[_ngcontent-%COMP%]:hover { \n    color: black;\n}\n\n.loginButton[_ngcontent-%COMP%]{\n    color: #FF914D;\n    font-size: 15px;\n    width: 100%;\n    min-width: 18vw;\n    border: solid #FF914D;\n    border-radius: 20px;\n}\n.loginButton[_ngcontent-%COMP%]:hover{\n    background-color: #FF914D;\n    color: white;\n    transition-duration: 0.5s;\n}\n\n.Logined[_ngcontent-%COMP%]{\n    min-width: 18vw;\n    border:solid #FF914D;\n    text-align: center;\n}\n.Logined[_ngcontent-%COMP%], .userName[_ngcontent-%COMP%], .logoutButton[_ngcontent-%COMP%]{\n    background-color: #FF914D;\n    color: white;\n    font-size: 15px;\n    border-radius: 20px;\n    text-align: center;\n}\n.userName[_ngcontent-%COMP%]{\n    min-width: 11vw; \n}\n.userName[_ngcontent-%COMP%]:hover, .userName[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    background-color: white;\n    color: #FF914D;\n    transition-duration: 0.5s;\n}\n.logoutButton[_ngcontent-%COMP%]:hover, .logoutButton[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    background-color: white;\n    color: #FF914D;\n    transition-duration: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZSxFQUFFLHlCQUF5QjtBQUM5QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZC1uYW1lIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgd2lkdGg6YXV0bztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5uYXZiYXItY29sbGFwc2V7XG4gICAgY29sb3I6I0ZGOTE0RFxufVxuYTotd2Via2l0LWFueS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuYnV0dG9uIC5idXR0b24tbmFtZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5leGFtcGxlLWJ1dHRvbi1yb3d7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5idXR0b24taG92ZXJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC8qIGZvbnQtZmFtaWx5OiBUYWhvbWE7ICovXG59XG5cbi5idXR0b24taG92ZXI6aG92ZXIgeyBcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGtoaSBjaMawYSDEkcSDbmcgbmjhuq1wICovXG4ubG9naW5CdXR0b257XG4gICAgY29sb3I6ICNGRjkxNEQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTh2dztcbiAgICBib3JkZXI6IHNvbGlkICNGRjkxNEQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5sb2dpbkJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MTREO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG4vKiBraGkgxJHDoyDEkcSDbmcgbmjhuq1wICovXG4uTG9naW5lZHtcbiAgICBtaW4td2lkdGg6IDE4dnc7XG4gICAgYm9yZGVyOnNvbGlkICNGRjkxNEQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkxvZ2luZWQsIC51c2VyTmFtZSwgLmxvZ291dEJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MTREO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlck5hbWV7XG4gICAgbWluLXdpZHRoOiAxMXZ3OyAvKmluIGNhc2Ugc2hvcnQgdXNlcm5hbWUqL1xufVxuLnVzZXJOYW1lOmhvdmVyLCAudXNlck5hbWU+c3BhbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogI0ZGOTE0RDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuLmxvZ291dEJ1dHRvbjpob3ZlciwgLmxvZ291dEJ1dHRvbj5zcGFue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjRkY5MTREO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG4iXX0= */"] });


/***/ }),

/***/ "UFh1":
/*!************************************************************************!*\
  !*** ./src/app/devices/controller-board/controller-board.component.ts ***!
  \************************************************************************/
/*! exports provided: ControllerBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerBoardComponent", function() { return ControllerBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");









function ControllerBoardComponent_div_12_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_12_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_12_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_12_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.virtualDevice.state)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0110\u1ED9 s\u00E1ng: ", ctx_r0.data.virtualDevice.brightness, "");
} }
function ControllerBoardComponent_div_13_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: \u0110\u00E8n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_7_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: Qu\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: Thi\u1EBFt b\u1ECB kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_13_ng_template_7_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_13_ng_template_7_ng_template_1_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.data.virtualDevice.switch_type === "fan")("ngIfElse", _r20);
} }
function ControllerBoardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_13_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_13_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ControllerBoardComponent_div_13_h2_6_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ControllerBoardComponent_div_13_ng_template_7_Template, 3, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.data.virtualDevice.state)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.data.virtualDevice.switch_type === "light")("ngIfElse", _r17);
} }
function ControllerBoardComponent_div_14_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: K\u00EDch ho\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_14_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_14_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_14_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Ch\u1ECDn k\u00EDch ho\u1EA1t \u0111\u1EC3 l\u1EA5y d\u1EEF li\u1EC7u m\u1EDBi nh\u1EA5t!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.data.virtualDevice.stream.active)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Nhi\u1EC7t \u0111\u1ED9: ", ctx_r2.data.virtualDevice.temp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0110\u1ED9 \u1EA9m: ", ctx_r2.data.virtualDevice.humi, "");
} }
function ControllerBoardComponent_div_15_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Gi\u1EA5c ng\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_11_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: L\u1EEDa ch\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_11_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: B\u1EEDa ti\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_11_ng_template_1_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: C\u1EA7u v\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_11_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Theo m\u00E0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_11_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_15_ng_template_11_ng_template_1_ng_template_1_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_15_ng_template_11_ng_template_1_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r36.modeColorLight === "rainbow")("ngIfElse", _r38);
} }
function ControllerBoardComponent_div_15_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_15_ng_template_11_ng_template_1_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_15_ng_template_11_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r33.modeColorLight === "party")("ngIfElse", _r35);
} }
function ControllerBoardComponent_div_15_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_15_ng_template_11_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_15_ng_template_11_ng_template_1_Template, 3, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r30.modeColorLight === "burning")("ngIfElse", _r32);
} }
function ControllerBoardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_15_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_15_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ControllerBoardComponent_div_15_h2_10_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ControllerBoardComponent_div_15_ng_template_11_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.data.virtualDevice.state)("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0110\u1ED9 s\u00E1ng: ", ctx_r3.data.virtualDevice.brightness, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("M\u00E3 m\u00E0u: ", ctx_r3.data.virtualDevice.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.modeColorLight === "sleep")("ngIfElse", _r29);
} }
function ControllerBoardComponent_div_16_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_16_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_16_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.data.virtualDevice.state)("ngIfElse", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("M\u1EE9c \u0111\u1ED9: ", ctx_r4.data.virtualDevice.fanspeed, "");
} }
function ControllerBoardComponent_div_17_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang kh\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang m\u1EDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_17_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_17_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.data.virtualDevice.state)("ngIfElse", _r44);
} }
function ControllerBoardComponent_div_18_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_18_input_8_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r51.data.virtualDevice.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.data.virtualDevice.state);
} }
function ControllerBoardComponent_div_18_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_18_ng_template_9_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.data.virtualDevice.active = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r48.data.virtualDevice.active);
} }
function ControllerBoardComponent_div_18_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ED9 s\u00E1ng:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_18_div_15_Template_mat_slider_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.data.virtualDevice.brightness = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r49.data.virtualDevice.brightness);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx_r49.formatLabel)("ngModel", ctx_r49.data.virtualDevice.brightness);
} }
function ControllerBoardComponent_div_18_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thi\u1EBFt l\u1EADp m\u00E0u \u0111\u00E8n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_18_div_16_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r57.data.virtualDevice.color = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Ch\u1ECDn ch\u1EBF \u0111\u1ED9:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_18_div_16_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r59.setModeColorLight("rainbow"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "C\u1EA7u v\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_18_div_16_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r60.setModeColorLight("burning"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "L\u1EEDa ch\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_18_div_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r61.setModeColorLight("party"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "B\u1EEFa ti\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_18_div_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r62.setModeColorLight("sleep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Gi\u1EA5c ng\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_18_div_16_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r63.setModeColorLight("none"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Theo m\u00E0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r50.data.virtualDevice.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r50.data.virtualDevice.color);
} }
function ControllerBoardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "B\u1EADt/T\u1EAFt thi\u1EBFt b\u1ECB:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ControllerBoardComponent_div_18_input_8_Template, 1, 1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ControllerBoardComponent_div_18_ng_template_9_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ControllerBoardComponent_div_18_div_15_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ControllerBoardComponent_div_18_div_16_Template, 20, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.data.virtualDevice.type !== "sensor-th")("ngIfElse", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.data.virtualDevice.type !== "switch" && ctx_r6.data.virtualDevice.type !== "sensor-th" && ctx_r6.data.virtualDevice.type !== "fan" && ctx_r6.data.virtualDevice.type !== "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.data.virtualDevice.type === "color-light");
} }
function ControllerBoardComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0110\u1ED3ng \u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "K\u00EDch ho\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ControllerBoardComponent {
    constructor(dialogRef, data, common) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.common = common;
        this.modeColorLight = "";
    }
    ngOnInit() {
        if (this.data.virtualDevice.type === "fan") {
            this.data.virtualDevice.fanspeed = "S2";
        }
        else if (this.data.virtualDevice.type === "color-light") {
            if (this.data.virtualDevice.burning) {
                this.modeColorLight = "burning";
            }
            else if (this.data.virtualDevice.sleep) {
                this.modeColorLight = "sleep";
            }
            else if (this.data.virtualDevice.rainbow) {
                this.modeColorLight = "rainbow";
            }
            else if (this.data.virtualDevice.party) {
                this.modeColorLight = "party";
            }
            else {
                this.modeColorLight = "none"; // khong co mode nao duoc chon se chon mode none
            }
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
    setModeColorLight(mode) {
        switch (mode) {
            case 'sleep':
                this.modeColorLight = "sleep";
                break;
            case 'burning':
                this.modeColorLight = "burning";
                break;
            case 'rainbow':
                this.modeColorLight = "rainbow";
                break;
            case 'party':
                this.modeColorLight = "party";
                break;
            default:
                this.modeColorLight = "none"; // khong co mode nao duoc chon se sáng màu được chọn
        }
    }
    onYesClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.virtualDevice.type === "color-light") {
                if (this.modeColorLight === "burning") {
                    this.data.virtualDevice.burning = true;
                    this.data.virtualDevice.sleep = false;
                    this.data.virtualDevice.rainbow = false;
                    this.data.virtualDevice.party = false;
                }
                else if (this.modeColorLight === "sleep") {
                    this.data.virtualDevice.burning = false;
                    this.data.virtualDevice.sleep = true;
                    this.data.virtualDevice.rainbow = false;
                    this.data.virtualDevice.party = false;
                }
                else if (this.modeColorLight === "rainbow") {
                    this.data.virtualDevice.burning = false;
                    this.data.virtualDevice.sleep = false;
                    this.data.virtualDevice.rainbow = true;
                    this.data.virtualDevice.party = false;
                }
                else if (this.modeColorLight === "party") {
                    this.data.virtualDevice.burning = false;
                    this.data.virtualDevice.sleep = false;
                    this.data.virtualDevice.rainbow = false;
                    this.data.virtualDevice.party = true;
                }
                else if (this.modeColorLight === "none") {
                    this.data.virtualDevice.burning = false;
                    this.data.virtualDevice.sleep = false;
                    this.data.virtualDevice.rainbow = false;
                    this.data.virtualDevice.party = false;
                }
            }
            yield this.common.controlDevice(this.data.virtualDevice);
        });
    }
    formatLabel(value) {
        return value;
    }
}
ControllerBoardComponent.ɵfac = function ControllerBoardComponent_Factory(t) { return new (t || ControllerBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"])); };
ControllerBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ControllerBoardComponent, selectors: [["app-controller-board"]], decls: 26, vars: 13, consts: [[2, "text-align", "right"], ["mat-button", "", 3, "click"], [1, "tag-header"], ["mat-dialog-content", "", 1, "container", 2, "margin-left", "15px", "margin-right", "15px"], [1, "device-name"], [4, "ngIf"], ["class", "control-device", 4, "ngIf"], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"], [4, "ngIf", "ngIfElse"], ["sensorType", ""], [1, "tag-content"], ["class", "row d-flex", 4, "ngIf", "ngIfElse"], ["elseStateDevice", ""], [1, "row", "d-flex"], ["elseSwitchType_1", ""], ["elseSwitchType_2", ""], [1, "sensor-notify"], ["elseSleep", ""], ["elseBurning", ""], ["elseParty", ""], ["elseModeColor", ""], [1, "control-device"], [1, "onOff"], [1, "onOffText"], [1, "onOffButton"], [1, "col"], [1, "toggle-wrapper2"], [1, "toggle2", "dog-rollover2"], ["id", "doggo2", "type", "checkbox", "class", "inputCheckbox", "checked", "data.virtualDevice.state", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["for", "doggo2", 1, "toggle-item2"], [1, "dog2"], [1, "face2"], ["id", "doggo2", "type", "checkbox", "checked", "data.virtualDevice.state", 1, "inputCheckbox", 3, "ngModel", "ngModelChange"], ["id", "doggo2", "type", "checkbox", "checked", "data.virtualDevice.active", 1, "inputCheckbox", 3, "ngModel", "ngModelChange"], [1, "row"], ["color", "primary", "thumbLabel", "", "tickInterval", "1", "step", "1", "min", "0", "max", "100", "aria-label", "units", 3, "displayWith", "value", "ngModel", "ngModelChange"], [2, "text-align", "center"], ["type", "color", "id", "head", "name", "head", "value", "data.virtualDevice.color", 2, "width", "80%", "height", "40px", 3, "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Basic outlined example", 1, "btn-group", 2, "margin-bottom", "20px"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function ControllerBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_Template_button_click_1_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ControllerBoardComponent_div_12_Template, 9, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ControllerBoardComponent_div_13_Template, 10, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ControllerBoardComponent_div_14_Template, 13, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ControllerBoardComponent_div_15_Template, 14, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ControllerBoardComponent_div_16_Template, 9, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ControllerBoardComponent_div_17_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ControllerBoardComponent_div_18_Template, 17, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_Template_button_click_20_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_Template_button_click_22_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ControllerBoardComponent_span_23_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ControllerBoardComponent_ng_template_24_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.virtualDevice.ot_nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("T\u00EAn ti\u1EBFng anh: ", ctx.data.virtualDevice.en_nickname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("M\u00E3 thi\u1EBFt b\u1ECB: ", ctx.data.virtualDevice.deviceId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type === "normal-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type === "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type === "sensor-th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type === "color-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type === "fan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type === "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type !== "sensor-th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.data.virtualDevice.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type !== "sensor-th")("ngIfElse", _r8);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]], styles: [".tag-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #FF914D;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.sensor-notify[_ngcontent-%COMP%] {\n  color: rgb(50, 50, 233);\n}\n\n.onOff[_ngcontent-%COMP%]{\n  width: 100%;\n  display: block;\n}\n\n.onOffText[_ngcontent-%COMP%] {\n  padding-left:0vw;\n  float: left;\n  width: 38%;\n  text-align: left;\n  \n}\n\n.onOffButton[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 45%;\n  text-align: left;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-size: 16px;\n    margin: 0px;\n\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n\n.inputCheckbox[_ngcontent-%COMP%] {\n  height: 20px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 20px;\n}\n\n.toggle-wrapper2[_ngcontent-%COMP%] {\n  flex: 1 1 calc(100% / 3);\n  min-height: auto;\n  display: flex;\n  align-items: left;\n  justify-content: left;\n  overflow: hidden;\n  position: relative;\n}\n\n@media (max-width: 480px) {\n  .toggle-wrapper2[_ngcontent-%COMP%] {\n    flex: 1 1 calc(100% / 2);\n  }\n}\n\n@media (max-width: 350px) {\n  .toggle-wrapper2[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n}\n\n\n\n.toggle2[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\nlabel.toggle-item2[_ngcontent-%COMP%] {\n  width: 3.5em;\n  background: #2e394d;\n  height: 1.5em;\n  display: inline-block;\n  border-radius: 25px;\n  \n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n}\n\nlabel.toggle-item2[_ngcontent-%COMP%]:before {\n  display: block;\n  transition: all 0.2s ease;\n  width: 1.15em;\n  height: 1.15em;\n  top: 0.125em;\n  left: 0.125em;\n  border-radius: 1em;\n  border: 1px solid #88cf8f;\n  transition: 0.3s ease;\n}\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: none;\n}\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .dog2[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  width: 1.25em;\n  height: 1.25em;\n  top: 0.125em;\n  left: 0.1em;\n  transition: 0.6s ease;\n}\n\n\n\n\n\n\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .face2[_ngcontent-%COMP%] {\n  \n  border-radius: 50%;\n  width: 1.25em;\n  height: 1.25em;\n  position: absolute;\n  background: #fff;\n  z-index: 4;\n}\n\n\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  border-color: white;\n  background: white;\n}\n\n#doggo2[_ngcontent-%COMP%]:checked    ~ .cup[_ngcontent-%COMP%] {\n  animation: 0.2s linear cup 1s forwards;\n}\n\n#doggo2[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .dog2[_ngcontent-%COMP%] {\n  left: 30px;\n  transform: rotate(360deg);\n}\n\n\n\n#doggo2[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .ear2.right2[_ngcontent-%COMP%] {\n  transform: scaleX(-1) rotate(-35deg);\n  transition-delay: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXItYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVzs7QUFFZjs7QUFDQSx3RkFBd0Y7O0FBQ3hGO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osT0FBTztFQUNQLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7S0FFSzs7QUFFTDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBQ0E7Ozs7Ozs7O0dBUUc7O0FBQ0g7Ozs7Ozs7Ozs7O0dBV0c7O0FBQ0g7Ozs7OztHQU1HOztBQUNIO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHOztBQUNIO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBQ0E7OztHQUdHOztBQUNIO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJjb250cm9sbGVyLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhZy1oZWFkZXIgaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRjkxNEQ7XG59XG5cbm1hdC1zbGlkZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zZW5zb3Itbm90aWZ5IHtcbiAgY29sb3I6IHJnYig1MCwgNTAsIDIzMyk7XG59XG5cbi5vbk9mZntcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm9uT2ZmVGV4dCB7XG4gIHBhZGRpbmctbGVmdDowdnc7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzglO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKiBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICovXG59XG4ub25PZmZCdXR0b24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRhaW5lciBoMntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHg7XG5cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmFkaW8gYnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlucHV0Q2hlY2tib3gge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMjBweDtcbn1cblxuLnRvZ2dsZS13cmFwcGVyMiB7XG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLyAzKTtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50b2dnbGUtd3JhcHBlcjIge1xuICAgIGZsZXg6IDEgMSBjYWxjKDEwMCUgLyAyKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC50b2dnbGUtd3JhcHBlcjIge1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICB9XG59XG5cbi8qIC50b2dnbGUtd3JhcHBlcjpudGgtY2hpbGQoNikge1xuICAgIGJhY2tncm91bmQ6ICNjNDg3ZGU7XG4gIH0gKi9cblxuLnRvZ2dsZTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxubGFiZWwudG9nZ2xlLWl0ZW0yIHtcbiAgd2lkdGg6IDMuNWVtO1xuICBiYWNrZ3JvdW5kOiAjMmUzOTRkO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC8qIG1hcmdpbjogMHB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDIwJSBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmxhYmVsLnRvZ2dsZS1pdGVtMjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgd2lkdGg6IDEuMTVlbTtcbiAgaGVpZ2h0OiAxLjE1ZW07XG4gIHRvcDogMC4xMjVlbTtcbiAgbGVmdDogMC4xMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODhjZjhmO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5kb2ctcm9sbG92ZXIyIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG4uZG9nLXJvbGxvdmVyMiBsYWJlbCAuZG9nMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS4yNWVtO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgdG9wOiAwLjEyNWVtO1xuICBsZWZ0OiAwLjFlbTtcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xufVxuLyogLmRvZy1yb2xsb3ZlcjIgbGFiZWwgLmV5ZXMyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDE0cHgpO1xuICBib3gtc2hhZG93OiAxNnB4IDAgMCAjMjIyLCAyMnB4IC00cHggMCAxMnB4ICNlNGFjMDQ7XG59ICovXG4vKiAuZG9nLXJvbGxvdmVyMiBsYWJlbCAuZWFyMiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTRweDtcbiAgYm90dG9tOiA4MCU7XG4gIGJhY2tncm91bmQ6ICNmOWJiMDA7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwIC8gMTAwJSAxMDAlIDAgMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDAgMCAwcHggI2ZmZmZmZiwgaW5zZXQgLTRweCAwIDAgMHB4ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG59ICovXG4vKiAuZG9nLXJvbGxvdmVyMiBsYWJlbCAuZWFyMi5yaWdodDIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgc2NhbGVYKC0xKTtcbiAgbGVmdDogYXV0bztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbiAgcmlnaHQ6IDBweDtcbn0gKi9cbi5kb2ctcm9sbG92ZXIyIGxhYmVsIC5mYWNlMiB7XG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogNDtcbn1cbi8qIC5kb2ctcm9sbG92ZXIyIGxhYmVsIC5tb3V0aDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDdweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgYm90dG9tOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDIwcHggMjBweDtcbiAgYm90dG9tOiA4cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn1cbi5kb2ctcm9sbG92ZXIyIGxhYmVsIC5tb3V0aDI6YmVmb3JlIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICNlYzc4OGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDVweCk7XG59ICovXG4uZG9nLXJvbGxvdmVyMiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuI2RvZ2dvMjpjaGVja2VkIH4gLmN1cCB7XG4gIGFuaW1hdGlvbjogMC4ycyBsaW5lYXIgY3VwIDFzIGZvcndhcmRzO1xufVxuI2RvZ2dvMjpjaGVja2VkICsgbGFiZWwgLmRvZzIge1xuICBsZWZ0OiAzMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuLyogI2RvZ2dvMjpjaGVja2VkICsgbGFiZWwgLm1vdXRoMiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuN3M7XG59ICovXG4jZG9nZ28yOmNoZWNrZWQgKyBsYWJlbCAuZWFyMi5yaWdodDIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKC0zNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG4iXX0= */"] });


/***/ }),

/***/ "UPSQ":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "cr+I");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cognito.service */ "pUv1");
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-service.service */ "aCBZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









class AuthServiceService {
    constructor(afAuth, afdb, cognitoService, common, http) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.cognitoService = cognitoService;
        this.common = common;
        this.http = http;
        this.logined = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.logined.asObservable();
    }
    signUp(user) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cognitoService.signUp(user)
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.sendVerificationMail();
                resolve(res);
            }))
                .catch(error => {
                resolve(error);
                reject(error);
            });
        }));
    }
    signIn(user) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cognitoService.signIn(user)
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                resolve(res);
            }))
                .catch(error => {
                resolve(error);
                reject(error);
            });
        }));
    }
    signOut() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cognitoService.signOut()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                resolve(res);
            }))
                .catch((error) => {
                reject(error);
            });
        }));
    }
    isLogin() {
        // this.cognitoService.currentSession()
        // .then(res=>{
        //   // console.log(res);
        //   this.logined.next(true);
        //   return true;
        // })
        // .catch(error => {
        // })
        // this.logined.next(false);
        // return false;
        if (this.cognitoService.isAuthenticated()) {
            this.logined.next(true);
            return true;
        }
        this.logined.next(false);
        return false;
    }
    sendVerificationMail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.afAuth.currentUser
                .then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return yield user.sendEmailVerification();
            }))
                .catch((error) => { });
        });
    }
    editProfile(profile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let editURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/editprofile';
            const data = query_string__WEBPACK_IMPORTED_MODULE_2__["stringify"]({
                oldPassword: profile.oldPassword,
                newPassword: profile.newPassword,
                phone: profile.phone,
                firstname: profile.firstname,
                lastname: profile.lastname
            });
            yield this.http.post(editURL, data).subscribe(res => { });
        });
    }
    updateProfileUser(profile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let information = {
                displayName: profile.lastname + " " + profile.firstname,
                phoneNumber: profile.phone
            };
            this.afAuth.currentUser
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res);
                return yield res.updateProfile(information);
            }))
                .catch((error) => { console.log("error: ", error); });
        });
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cognito_service__WEBPACK_IMPORTED_MODULE_6__["CognitoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_service_service__WEBPACK_IMPORTED_MODULE_7__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "V6Ab":
/*!************************************************************!*\
  !*** ./src/app/devices/edit-board/edit-board.component.ts ***!
  \************************************************************/
/*! exports provided: MyErrorStateMatcher, EditBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBoardComponent", function() { return EditBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");










function EditBoardComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nh\u1EADp m\u00E3 PIN m\u1EDBi cho kh\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditBoardComponent_input_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 21);
} }
function EditBoardComponent_mat_radio_group_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Thi\u1EBFt b\u1ECB \u0111\u01B0\u1EE3c k\u1EBFt n\u1ED1i v\u1EDBi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0110\u00E8n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-radio-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Qu\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-radio-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditBoardComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 27);
} }
function EditBoardComponent_ng_template_27_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ch\u1EC9nh s\u1EEDa th\u00E0nh c\u00F4ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditBoardComponent_ng_template_27_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Kh\u00F4ng th\u1EC3 ch\u1EC9nh s\u1EEDa, vui l\u00F2ng th\u1EED l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.result.reason, "");
} }
function EditBoardComponent_ng_template_27_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditBoardComponent_ng_template_27_ng_template_1_h4_0_Template, 4, 1, "h4", 30);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.result.status == false);
} }
function EditBoardComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditBoardComponent_ng_template_27_h4_0_Template, 2, 0, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditBoardComponent_ng_template_27_ng_template_1_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.result.status == true)("ngIfElse", _r7);
} }
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class EditBoardComponent {
    constructor(dialogRef, data, common) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.common = common;
        this.editDeviceFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            switchTypeFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            PINFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ot_nicknameFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            en_nicknameFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.matcher = new MyErrorStateMatcher();
        this.result = {
            status: "edit"
        };
    }
    ngOnInit() { }
    onNoClick() {
        this.dialogRef.close();
    }
    onAcceptClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.result.status = "processing";
            if (!this.editDeviceFormGroup.value.switchTypeFormControl) {
                this.editDeviceFormGroup.value.switchTypeFormControl = 'none'; //=> phải sửa thành ''
            }
            if (!this.editDeviceFormGroup.value.en_nicknameFormControl) {
                this.editDeviceFormGroup.value.en_nicknameFormControl = this.data.virtualDevice.en_nickname;
            }
            if (!this.editDeviceFormGroup.value.ot_nicknameFormControl) {
                this.editDeviceFormGroup.value.ot_nicknameFormControl = this.data.virtualDevice.ot_nickname;
            }
            if (this.editDeviceFormGroup.value.switchTypeFormControl !== 'none' ||
                this.editDeviceFormGroup.value.en_nicknameFormControl !== this.data.virtualDevice.en_nicknameFormControl ||
                this.editDeviceFormGroup.value.ot_nicknameFormControl != this.data.virtualDevice.ot_nicknameFormControl ||
                this.editDeviceFormGroup.value.PINFormControl) {
                this.result = yield this.common.editDevice(this.data.virtualDevice.deviceId, this.editDeviceFormGroup.value.en_nicknameFormControl, this.editDeviceFormGroup.value.ot_nicknameFormControl, this.editDeviceFormGroup.value.switchTypeFormControl, this.editDeviceFormGroup.value.PINFormControl);
                // console.log(this.data.virtualDevice.deviceId,
                //   this.editDeviceFormGroup.value.en_nicknameFormControl,
                //   this.editDeviceFormGroup.value.ot_nicknameFormControl,
                //   this.editDeviceFormGroup.value.switchTypeFormControl,
                //   typeof this.editDeviceFormGroup.value.PINFormControl)
            }
            else {
                this.result = {
                    status: false
                };
            }
        });
    }
}
EditBoardComponent.ɵfac = function EditBoardComponent_Factory(t) { return new (t || EditBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceService"])); };
EditBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditBoardComponent, selectors: [["app-edit-board"]], decls: 35, vars: 10, consts: [[2, "text-align", "right"], ["mat-button", "", 3, "click"], ["mat-dialog-content", "", 2, "margin-left", "15px", "margin-right", "15px"], [1, "device-name"], [1, "tag-header"], [1, "control-device"], [1, "form-group"], ["action", "", 3, "formGroup"], ["id", "PINHelp", "class", "form-text text-muted", 4, "ngIf"], ["type", "password", "class", "form-control", "formControlName", "PINFormControl", "for", "", "aria-describedby", "PINHelp", 4, "ngIf"], ["id", "ot_nicknameHelp", 1, "form-text", "text-muted"], ["type", "text", "formControlName", "ot_nicknameFormControl", "for", "", "aria-describedby", "ot_nicknameHelp", 1, "form-control"], ["id", "en_nicknameHelp", 1, "form-text", "text-muted"], ["type", "text", "formControlName", "en_nicknameFormControl", "for", "", "aria-describedby", "en_nicknameHelp", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "switchTypeFormControl", 4, "ngIf"], [1, "notification-edit", "d-flex", "justify-content-center"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf", "ngIfElse"], ["resultTrue", ""], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-button", "", "cdkFocusInitial", "", 3, "disabled", "click"], ["id", "PINHelp", 1, "form-text", "text-muted"], ["type", "password", "formControlName", "PINFormControl", "for", "", "aria-describedby", "PINHelp", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "switchTypeFormControl"], [2, "margin-top", "20px"], ["color", "primary", "value", "light"], ["color", "primary", "value", "fan"], ["color", "primary", "value", "other"], ["role", "status", 1, "spinner-border", "text-primary"], [4, "ngIf", "ngIfElse"], ["resultFalse", ""], [4, "ngIf"]], template: function EditBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditBoardComponent_Template_button_click_1_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EditBoardComponent_small_16_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditBoardComponent_input_17_Template, 1, 0, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Nh\u1EADp t\u00EAn thi\u1EBFt b\u1ECB ti\u1EBFng Vi\u1EC7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Nh\u1EADp t\u00EAn thi\u1EBFt b\u1ECB ti\u1EBFng Anh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EditBoardComponent_mat_radio_group_24_Template, 9, 0, "mat-radio-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, EditBoardComponent_div_26_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, EditBoardComponent_ng_template_27_Template, 3, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditBoardComponent_Template_button_click_31_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditBoardComponent_Template_button_click_33_listener() { return ctx.onAcceptClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u0110\u1ED3ng \u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.virtualDevice.ot_nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("T\u00EAn ti\u1EBFng anh: ", ctx.data.virtualDevice.en_nickname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("M\u00E3 thi\u1EBFt b\u1ECB: ", ctx.data.virtualDevice.deviceId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.editDeviceFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type == "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type == "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.virtualDevice.type == "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.result.status == "processing")("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.editDeviceFormGroup.valid);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"]], styles: [".tag-header[_ngcontent-%COMP%] {\n    text-align: center;\n}\n  \n.tag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #FF914D;\n    margin: 0px;\n}\n  \n.notification-edit[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n  \n.notification-edit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #FF914D;\n    font-size: 16px;\n    \n}\n  \n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImVkaXQtYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWctaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gIFxuLnRhZy1oZWFkZXIgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRkY5MTREO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWVkaXQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ub3RpZmljYXRpb24tZWRpdCBoNCB7XG4gICAgY29sb3I6ICNGRjkxNEQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cbn1cblxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XBXv":
/*!****************************************************************************!*\
  !*** ./src/app/devices/information-device/information-device.component.ts ***!
  \****************************************************************************/
/*! exports provided: InformationDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationDeviceComponent", function() { return InformationDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _controller_board_controller_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller-board/controller-board.component */ "UFh1");
/* harmony import */ var _share_board_share_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-board/share-board.component */ "xx7u");
/* harmony import */ var _edit_board_edit_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-board/edit-board.component */ "V6Ab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function InformationDeviceComponent_div_4_div_2_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_2_h2_8_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_2_ng_template_9_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0110\u1ED9 s\u00E1ng: ", device_r1.brightness, "");
} }
function InformationDeviceComponent_div_4_div_3_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: \u0110\u00E8n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_12_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: Qu\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "S\u1EED d\u1EE5ng: Thi\u1EBFt b\u1ECB kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_3_ng_template_12_h2_0_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_3_ng_template_12_ng_template_1_Template, 2, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.switch_type === "fan")("ngIfElse", _r29);
} }
function InformationDeviceComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_3_h2_8_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_3_ng_template_9_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InformationDeviceComponent_div_4_div_3_h2_11_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, InformationDeviceComponent_div_4_div_3_ng_template_12_Template, 3, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.switch_type === "light")("ngIfElse", _r26);
} }
function InformationDeviceComponent_div_4_div_4_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: K\u00EDch ho\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_4_h2_8_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_4_ng_template_9_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.stream.active)("ngIfElse", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Nhi\u1EC7t \u0111\u1ED9: ", device_r1.temp, "\u00BAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0110\u1ED9 \u1EA9m: ", device_r1.humi, "%");
} }
function InformationDeviceComponent_div_4_div_5_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_h2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Gi\u1EA5c ng\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: L\u1EEDa ch\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: B\u1EEDa ti\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: C\u1EA7u v\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Theo m\u00E0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_h2_0_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.rainbow)("ngIfElse", _r50);
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_h2_0_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.party)("ngIfElse", _r47);
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_5_ng_template_18_h2_0_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_Template, 3, 2, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.burning)("ngIfElse", _r44);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function InformationDeviceComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_5_h2_8_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_5_ng_template_9_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "M\u00E0u \u0111\u00E8n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, InformationDeviceComponent_div_4_div_5_h2_17_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, InformationDeviceComponent_div_4_div_5_ng_template_18_Template, 3, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0110\u1ED9 s\u00E1ng: ", device_r1.brightness, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, device_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.sleep)("ngIfElse", _r41);
} }
function InformationDeviceComponent_div_4_div_6_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_6_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_6_h2_8_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_6_ng_template_9_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("M\u1EE9c \u0111\u1ED9: ", device_r1.fanspeed, "");
} }
function InformationDeviceComponent_div_4_div_7_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang kh\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_7_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang m\u1EDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_7_h2_8_Template, 2, 0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_7_ng_template_9_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r61);
} }
function InformationDeviceComponent_div_4_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformationDeviceComponent_div_4_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r66); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r64.openDialogShareEdit(device_r1, "share"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformationDeviceComponent_div_4_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r67.openDialogShareEdit(device_r1, "edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformationDeviceComponent_div_4_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r70.handleDevice(device_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InformationDeviceComponent_div_4_div_2_Template, 13, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InformationDeviceComponent_div_4_div_3_Template, 14, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InformationDeviceComponent_div_4_div_4_Template, 15, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InformationDeviceComponent_div_4_div_5_Template, 20, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InformationDeviceComponent_div_4_div_6_Template, 13, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InformationDeviceComponent_div_4_div_7_Template, 11, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, InformationDeviceComponent_div_4_button_10_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InformationDeviceComponent_div_4_ng_template_11_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, InformationDeviceComponent_div_4_button_13_Template, 3, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, InformationDeviceComponent_div_4_ng_template_14_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, InformationDeviceComponent_div_4_button_16_Template, 3, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, InformationDeviceComponent_div_4_ng_template_17_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "B\u1EA1n c\u00F3 mu\u1ED1n x\u00F3a thi\u1EBFt b\u1ECB n\u00E0y kh\u00F4ng ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Lo\u1EA1i thi\u1EBFt b\u1ECB: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "M\u00E3 thi\u1EBFt b\u1ECB: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformationDeviceComponent_div_4_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r73.requestDeleteDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "C\u00F3, h\u00E3y x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "H\u1EE7y");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformationDeviceComponent_div_4_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74); const device_r1 = ctx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r75.openDialogControl(device_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u0110i\u1EC1u khi\u1EC3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.type === "normal-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.type === "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.type === "sensor-th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.type === "color-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.type === "fan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", device_r1.type === "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.ownerships[i_r2] !== "guest")("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.ownerships[i_r2] !== "guest")("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.ownerships[i_r2] !== "guest")("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.deviceAction.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.deviceAction.deviceId);
} }
class InformationDeviceComponent {
    constructor(common, dialog) {
        this.common = common;
        this.dialog = dialog;
        this.listUIDShareRequest = [];
    }
    ngOnInit() {
        this.common.getDatabaseFirebase();
        this.common.currentMessage.subscribe(res => {
            this.devices = res;
        });
        this.common.ownership.subscribe(res => {
            this.ownerships = res;
        });
        this.deviceAction = this.devices;
        this.common.getShareHistories();
    }
    openDialogControl(device) {
        const virtualDevice = Object.assign({}, device);
        const dialogRef = this.dialog.open(_controller_board_controller_board_component__WEBPACK_IMPORTED_MODULE_1__["ControllerBoardComponent"], {
            width: '430px',
            data: { virtualDevice }
        });
        dialogRef.afterClosed().subscribe(result => { });
        // //
        // console.log(virtualDevice)
        // console.log(device)
        // //
    }
    handleDevice(device) {
        this.deviceAction = device;
    }
    requestDeleteDevice() {
        this.common.deleteDevice(this.deviceAction);
        // console.log(this.deviceAction)
    }
    openDialogShareEdit(device, cmd) {
        const virtualDevice = Object.assign({}, device);
        switch (cmd) {
            case 'share':
                const dialogRefShare = this.dialog.open(_share_board_share_board_component__WEBPACK_IMPORTED_MODULE_2__["ShareBoardComponent"], {
                    width: '430px',
                    data: { virtualDevice }
                });
                dialogRefShare.afterClosed().subscribe(result => { });
                break;
            case 'edit':
                const dialogRefEdit = this.dialog.open(_edit_board_edit_board_component__WEBPACK_IMPORTED_MODULE_3__["EditBoardComponent"], {
                    width: '430px',
                    data: { virtualDevice }
                });
                dialogRefEdit.afterClosed().subscribe(result => { });
                break;
            default:
        }
    }
    replyDemand(deviceId, command, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (command === "accept") {
                yield this.common.acceptShareDeviceDemand(deviceId);
            }
            else if (command === "refuse") {
                yield this.common.refuseShareDeviceDemand(deviceId, this.listUIDShareRequest[index]);
            }
        });
    }
}
InformationDeviceComponent.ɵfac = function InformationDeviceComponent_Factory(t) { return new (t || InformationDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
InformationDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InformationDeviceComponent, selectors: [["app-information-device"]], decls: 5, vars: 1, consts: [[1, "background-device-page"], [1, "container"], [1, "row"], ["class", "col d-flex ", 4, "ngFor", "ngForOf"], [1, "col", "d-flex"], [1, "box"], [4, "ngIf"], [1, "dieukhienBotton"], ["class", "btn btn-outline-dark", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBtnShare", ""], ["class", "btn btn-outline-dark", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBtnEdit", ""], ["class", "btn btn-outline-dark", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalDeleteDevice", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBtnDelete", ""], ["id", "exampleModalDeleteDevice", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-bs-backdrop", "static", "data-bs-keyboard", "false", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [2, "color", "brown"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "dieukhienBotton", "mat-flat-button", "", 3, "click"], [1, "tag-header"], [1, "tag-content"], ["class", "row d-flex", 4, "ngIf", "ngIfElse"], ["elseStateDevice", ""], [1, "row", "d-flex"], ["elseSwitchType_1", ""], ["elseSwitchType_2", ""], [1, "color-state"], [1, "color-state-box", 3, "ngStyle"], ["elseSleep", ""], ["elseBurning", ""], ["elseParty", ""], ["elseColor", ""], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["disabled", "", 1, "btn", "btn-outline-dark"], [1, "btn", "btn-outline-dark", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModalDeleteDevice", 1, "btn", "btn-outline-dark", 3, "click"]], template: function InformationDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InformationDeviceComponent_div_4_Template, 42, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.devices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["body[_ngcontent-%COMP%]{\n    height: 90vh;\n}\n\n.background-device-page[_ngcontent-%COMP%] {\n    height: 90vh;\n    background-image: url('background.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: right top;\n    background-attachment: fixed;\n}\n\n.col[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n\n.box[_ngcontent-%COMP%] {\n    position: relative;\n    \n    min-width: 230px;\n    width: 100%;\n    max-height: 330px;\n    border-radius: 10px;\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 100px;\n    background-color: rgb(255, 255, 255);\n}\n\n.box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-size: 16px;\n    margin: 0px;\n}\n\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #FF914D;\n    margin: 0px;\n}\n\n.color-state[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n\n.color-state-box[_ngcontent-%COMP%]{\n    display: inline-block;\n    bottom: 0px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 10px;\n}\n\n.tag-content[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.dieukhienBotton[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 100%;\n    bottom: 10px;\n    position: absolute;\n    \n}\n\n#dieukhienBotton[_ngcontent-%COMP%]{\n    \n    width: 100%;\n\n}\n\n#dieukhienBotton[_ngcontent-%COMP%]:hover, .btn-outline-dark[_ngcontent-%COMP%]:hover{\n    \n    color:white;\n    background-color: #FF914D;\n    transition: 0.5s;\n}\n\n.btn-outline-dark[_ngcontent-%COMP%]{\n    transform: scale(0.8);\n    outline: none;\n    border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLWRldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1Q0FBbUU7SUFDbkUsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXOztBQUVmOztBQUNBO0lBQ0k7OzswREFHc0Q7SUFDdEQsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoiaW5mb3JtYXRpb24tZGV2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGhlaWdodDogOTB2aDtcbn1cblxuLmJhY2tncm91bmQtZGV2aWNlLXBhZ2Uge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZGV2aWNlLXBhZ2UvYmFja2dyb3VuZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uY29sIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cbiAgICBtaW4td2lkdGg6IDIzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59IFxuLmJveCBoMntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uYm94IGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0ZGOTE0RDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5jb2xvci1zdGF0ZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29sb3Itc3RhdGUtYm94e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRhZy1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRpZXVraGllbkJvdHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbn1cbiNkaWV1a2hpZW5Cb3R0b257XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0ZGEyOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4jZGlldWtoaWVuQm90dG9uOmhvdmVyLCAuYnRuLW91dGxpbmUtZGFyazpob3ZlcntcbiAgICAvKiBib3gtc2hhZG93OiAtNXB4IC01cHggNHB4ICByZ2JhKDEsIDI1NSwgNjQsIDAuNSksXG4gICAgICAgICAgICAgICAgMTBweCAxMHB4IDZweCAgcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgICAgICAgICAgICBpbnNldCAtNXB4IC01cHggNXB4ICByZ2JhKDEsIDI1NSwgNjQsIDAuNSksXG4gICAgICAgICAgICAgICAgaW5zZXQgMXB4IDFweCAxcHggIHJnYmEoMCwgMCwgMCwgMC4xNSk7ICAqL1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjkxNEQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ0bi1vdXRsaW5lLWRhcmt7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _services_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/http-interceptor.interceptor */ "m1MY");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./page/home/home.component */ "2EcK");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./user/registration/registration.component */ "PPYe");
/* harmony import */ var _page_about_about_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./page/about/about.component */ "cN1Q");
/* harmony import */ var _devices_information_device_information_device_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./devices/information-device/information-device.component */ "XBXv");
/* harmony import */ var _devices_controller_board_controller_board_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./devices/controller-board/controller-board.component */ "UFh1");
/* harmony import */ var _devices_show_list_device_show_list_device_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./devices/show-list-device/show-list-device.component */ "uTvV");
/* harmony import */ var _page_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./page/confirm-email/confirm-email.component */ "OACj");
/* harmony import */ var _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./page/personal/personal.component */ "S3tI");
/* harmony import */ var _devices_share_board_share_board_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./devices/share-board/share-board.component */ "xx7u");
/* harmony import */ var _devices_edit_board_edit_board_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./devices/edit-board/edit-board.component */ "V6Ab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/core */ "fXoL");










//Angular Material Components































//Interceptor

// Component














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineInjector"]({ providers: [
        // AuthServiceService,
        // CommonServiceService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_41__["HttpInterceptorInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__["MatBadgeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _page_home_home_component__WEBPACK_IMPORTED_MODULE_42__["HomeComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_43__["LoginComponent"],
        _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_44__["RegistrationComponent"],
        _page_about_about_component__WEBPACK_IMPORTED_MODULE_45__["AboutComponent"],
        _devices_information_device_information_device_component__WEBPACK_IMPORTED_MODULE_46__["InformationDeviceComponent"],
        _devices_controller_board_controller_board_component__WEBPACK_IMPORTED_MODULE_47__["ControllerBoardComponent"],
        _devices_show_list_device_show_list_device_component__WEBPACK_IMPORTED_MODULE_48__["ShowListDeviceComponent"],
        _page_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_49__["ConfirmEmailComponent"],
        _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_50__["PersonalComponent"],
        _devices_share_board_share_board_component__WEBPACK_IMPORTED_MODULE_51__["ShareBoardComponent"],
        _devices_edit_board_edit_board_component__WEBPACK_IMPORTED_MODULE_52__["EditBoardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__["MatBadgeModule"]] }); })();


/***/ }),

/***/ "aCBZ":
/*!****************************************************!*\
  !*** ./src/app/services/common-service.service.ts ***!
  \****************************************************/
/*! exports provided: CommonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function() { return CommonServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/firestore */ "xo5E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









class CommonServiceService {
    // //////////////////////////////////////////////////////////////////////////////////////////////
    constructor(router, db, shareHistories, shareRequest, http) {
        this.router = router;
        this.db = db;
        this.shareHistories = shareHistories;
        this.shareRequest = shareRequest;
        this.http = http;
        this.userInfor = "";
        this.deviceList = [];
        // lay du lieu cua tung thiet bi khong co quyen so huu (khong co guest hay host)
        this.mess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentMessage = this.mess.asObservable();
        // lay quyen so huu thiet bị (bao gom ten thiet bi va quyen so huu)
        this.permissionDevice = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.ownership = this.permissionDevice.asObservable();
        // lay danh sach ai share va share den ai
        this.sharePerson = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.listShareHistories = this.sharePerson.asObservable();
        // lay danh sach nguoi da duoc share
        this.reciveSharePerson = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.listShareRequest = this.reciveSharePerson.asObservable();
        // lay so thiet bi duoc share den ai do /////////////////////////////////////////////////////////
        this.numberDeviceShare$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.numberDeviceShare = 0;
        // this.numberDeviceShare$.next(10);
    }
    loginPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/login']);
        });
    }
    decodeAccessToken(token) {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.userInfor = helper.decodeToken(token);
        this.isExpireDateToken = helper.isTokenExpired(token);
        const expireDateToken = helper.getTokenExpirationDate(token);
        // console.log(this.userInfor);
    }
    getDatabaseFirebase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.object('ownerships/' + this.userInfor['user_id']).snapshotChanges().subscribe(action => {
                if (!!action.payload.val()) {
                    let devices = Object.keys(action.payload.val()); // cho nay chi lay key
                    let permission = [];
                    devices.forEach(emlement => {
                        this.deviceList = [];
                        this.db.object('devices/' + emlement).snapshotChanges()
                            .subscribe((device) => {
                            let check = true;
                            for (let i = 0; i < this.deviceList.length; i++) {
                                if (device.payload.val().deviceId === this.deviceList[i].deviceId) {
                                    this.deviceList[i] = device.payload.val();
                                    check = false;
                                }
                            }
                            if (check) {
                                this.deviceList.push(device.payload.val());
                                // console.log(device.payload.val().deviceId)
                                for (let i = 0; i < (Object.keys(action.payload.val())).length; i++) {
                                    if ((Object.keys(action.payload.val()))[i] === device.payload.val().deviceId) {
                                        permission.push((Object.values(action.payload.val()))[i]);
                                    }
                                }
                                ;
                            }
                        });
                    });
                    // console.log("Permission-Common: ", permission);
                    // console.log("DeviceList-Common: ", this.deviceList);
                    this.mess.next(this.deviceList);
                    this.permissionDevice.next(permission);
                }
            });
        });
    }
    searchByEmailUser(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const usersRef = yield _firebase_app__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore().collection('users');
            const usersSnapshot = yield usersRef.orderBy('email').startAt(email).endAt(email + '\uf8ff').get();
            const searchResult = [];
            if (!usersSnapshot.empty) {
                usersSnapshot.forEach(userRecord => {
                    searchResult.push({
                        uid: userRecord.data().uid,
                        email: userRecord.data().email,
                        displayName: userRecord.data().displayName,
                        phoneNumber: userRecord.data().phoneNumber,
                        photoURL: userRecord.data().photoURL,
                    });
                });
                // console.log("searchResult: ", searchResult)
                if (searchResult[0].uid !== null) {
                    return searchResult;
                }
            }
            return null;
        });
    }
    searchByUID(UID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const usersRef = yield _firebase_app__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore().collection('users');
            const usersSnapshot = yield usersRef.orderBy('uid').startAt(UID).endAt(UID + '\uf8ff').get();
            const searchResult = [];
            if (!usersSnapshot.empty) {
                usersSnapshot.forEach(userRecord => {
                    searchResult.push({
                        uid: userRecord.data().uid,
                        email: userRecord.data().email,
                        displayName: userRecord.data().displayName,
                        phoneNumber: userRecord.data().phoneNumber,
                        photoURL: userRecord.data().photoURL,
                    });
                });
                if (searchResult[0].email !== null) {
                    return searchResult[0];
                }
            }
            return null;
        });
    }
    controlDevice(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (device.type !== 'sensor-th') {
                let controlURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/control';
                let deviceArray = []; // push into array - use JSON.stringify
                deviceArray.push(device);
                const data = {
                    commands: JSON.stringify(deviceArray)
                };
                //
                console.log(typeof data);
                console.log(data.commands);
                //
                return yield this.http.post(controlURL, data).subscribe(res => { });
            }
            else if (device.type == 'sensor-th') {
                let controlURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/activesensor';
                return yield this.http.post(controlURL, "").subscribe(res => { });
            }
        });
    }
    deleteDevice(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let deleteURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/deletedevice';
            const data = {
                deviceId: device.deviceId
            };
            return yield this.http.post(deleteURL, data).subscribe(res => { });
        });
    }
    editDevice(deviceId, en_nickname, ot_nickname, switch_type, PIN) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let editURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/editdevice';
            const data = {
                deviceId,
                en_nickname,
                ot_nickname,
                switch_type,
                PIN
            };
            return new Promise((resolve, reject) => {
                this.http.post(editURL, data).subscribe(res => {
                    resolve(res);
                });
            });
        });
    }
    shareDevice(uidShare, deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let shareURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/sharedevice';
            const data = {
                deviceId,
                uidShare,
            };
            return new Promise((resolve, reject) => {
                this.http.post(shareURL, data).subscribe(res => {
                    resolve(res);
                });
            });
        });
    }
    revokeDevice(uidShare, deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let revokeURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/revokesharerequest';
            const data = {
                deviceId,
                uidShare
            };
            return new Promise((resolve, reject) => {
                this.http.post(revokeURL, data).subscribe(res => {
                    resolve(res);
                });
            });
        });
    }
    acceptShareDeviceDemand(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let acceptURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/acceptsharerequest';
            const data = {
                deviceId
            };
            return yield this.http.post(acceptURL, data).subscribe(res => { });
        });
    }
    refuseShareDeviceDemand(deviceId, uidHost) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let rejectURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/rejectsharerequest';
            const data = {
                uidHost,
                deviceId
            };
            return yield this.http.post(rejectURL, data).subscribe(res => { });
        });
    }
    getShareHistories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.shareHistories.object('sharehistories/' + this.userInfor['user_id']).snapshotChanges().subscribe(personShareHistories => {
                let personShare = [];
                if (!!personShareHistories.payload.val()) {
                    personShare.push(Object(personShareHistories.payload.val()));
                }
                this.sharePerson.next(personShare);
            });
        });
    }
    getShareRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.shareRequest.object('sharerequests/' + this.userInfor['user_id']).snapshotChanges().subscribe(personShareRequest => {
                let reciveSharePerson = [];
                if (!!personShareRequest.payload.val()) {
                    reciveSharePerson.push(Object(personShareRequest.payload.val()));
                    this.numberDeviceShare = 0;
                    Object(personShareRequest.payload.val()).forEach(element => {
                        // console.log(element.status)
                        if (element.status == "waiting") {
                            this.numberDeviceShare = this.numberDeviceShare + 1;
                            console.log(this.numberDeviceShare);
                        }
                    });
                }
                this.reciveSharePerson.next(reciveSharePerson);
                this.numberDeviceShare$.next(this.numberDeviceShare);
            });
            // this.numberDeviceShare = this.listdeviceIdShareRequest.length
            // this.numberDeviceShare$.next(this.numberDeviceShare)
        });
    }
}
CommonServiceService.ɵfac = function CommonServiceService_Factory(t) { return new (t || CommonServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
CommonServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CommonServiceService, factory: CommonServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cN1Q":
/*!***********************************************!*\
  !*** ./src/app/page/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 28, vars: 0, consts: [[1, "background-device-page"], [1, "intro"], ["id", "logo-lite", "src", "../../../assets/logo/warmhouse-lite.png", 2, "height", "60px"], [1, "contact-us"], [2, "color", "white", "font-size", "35px", "font-weight", "bold"], [1, "info"], [1, "Toi-info"], [2, "font-size", "35px"], [2, "font-size", "18px"], [1, "Quoc-info"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " l\u00E0 c\u00F4ng ty cung c\u1EA5p gi\u1EA3i ph\u00E1p smart home thu\u1EA7n Vi\u1EC7t do ng\u01B0\u1EDDi Vi\u1EC7t s\u00E1ng t\u1EA1o, v\u1EADn h\u00E0nh, nghi\u00EAn c\u1EE9u v\u00E0 \u0111\u01B0a ra th\u1ECB tr\u01B0\u1EDDng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vui l\u00F2ng li\u00EAn h\u1EC7 ch\u00FAng t\u00F4i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nguy\u1EC5n T\u1EA5n T\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "X\u00E2y d\u1EF1ng website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "0357382204");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "18521513@gm.uit.edu.vn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nguy\u1EC5n Kim Qu\u1ED1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "X\u00E2y d\u1EF1ng ph\u1EA7n c\u1EE9ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "0357382204");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "18521310@gm.uit.edu.vn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\n    height: 90vh;\n}\n.background-device-page[_ngcontent-%COMP%] {\n    height: 90vh;\n    background-image: url('bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: right top;\n    background-attachment: scroll;\n    \n}\n.intro[_ngcontent-%COMP%]{\n    font-size: 35px;\n    margin-left: 100px;\n    padding-top: 60px;\n    margin-right: 40%;\n    \n    \n    font-weight: bold;\n}\n.contact-us[_ngcontent-%COMP%]{\n    margin-left: 100px;\n    padding-top: 120px;\n    margin-right: 40%;\n}\n.info[_ngcontent-%COMP%]{\n    width: 100%;\n    \n    background-color: white;\n    border-radius: 0 20px 20px 20px;\n    padding: 20px;\n}\n.Toi-info[_ngcontent-%COMP%]{\n    float: left;\n    width: 45%;\n    margin-right:3%;\n    text-align: justify;\n    \n    background-image: url('toi.jpg');\n    background-size: 100px;\n    background-repeat: no-repeat;\n    background-position: right center;\n  }\n.Quoc-info[_ngcontent-%COMP%]{\n    overflow: hidden;\n    width: 52%;\n    padding-left: 20px;\n    text-align: justify;\n    background-image: url('toi.jpg');\n    background-size: 100px;\n    background-repeat: no-repeat;\n    background-position: right center;\n    border-left: solid #39a1ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDZCQUE2Qjs7QUFFakM7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdDQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlDQUFpQztFQUNuQztBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdDQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQywwQkFBMEI7QUFDOUIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuLmJhY2tncm91bmQtZGV2aWNlLXBhZ2Uge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYWJvdXQvYmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgXG59XG4uaW50cm97XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcbiAgICAvKiB0ZXh0LWFsaWduOiBqdXN0aWZ5OyAqL1xuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhY3QtdXN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn1cbi5pbmZve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLlRvaS1pbmZve1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLXJpZ2h0OjMlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLyogY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hYm91dC90b2kuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gIH1cbi5RdW9jLWluZm97XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNTIlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hYm91dC90b2kuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICMzOWExZmY7XG59Il19 */"] });


/***/ }),

/***/ "m1MY":
/*!**********************************************************!*\
  !*** ./src/app/services/http-interceptor.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpInterceptorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorInterceptor", function() { return HttpInterceptorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-service.service */ "UPSQ");



class HttpInterceptorInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        if (this.auth.isLogin()) {
            const token = localStorage.getItem('access_token');
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
                .set('Authorization', 'Bearer ' + token)
                // .set('Content-Type', 'application/x-www-form-urlencoded');
                .set('Content-Type', 'application/json');
            const authRequest = request.clone({ headers: headers });
            return next.handle(authRequest);
        }
        return next.handle(request);
    }
}
HttpInterceptorInterceptor.ɵfac = function HttpInterceptorInterceptor_Factory(t) { return new (t || HttpInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"])); };
HttpInterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorInterceptor, factory: HttpInterceptorInterceptor.ɵfac });


/***/ }),

/***/ "pUv1":
/*!*********************************************!*\
  !*** ./src/app/services/cognito.service.ts ***!
  \*********************************************/
/*! exports provided: CognitoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoService", function() { return CognitoService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CognitoService {
    constructor() {
        aws_amplify__WEBPACK_IMPORTED_MODULE_1__["default"].configure({
            Auth: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].cognito,
        });
        this.authenticationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    signUp(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signUp({
            username: user.email,
            password: user.password,
        });
    }
    confirmSignUp(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].confirmSignUp(user.email, user.code);
    }
    signIn(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signIn(user.email, user.password)
            .then(() => {
            this.authenticationSubject.next(true);
        });
    }
    signOut() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signOut()
            .then(() => {
            this.authenticationSubject.next(false);
        });
    }
    isAuthenticated() {
        if (this.authenticationSubject.value) {
            return true;
        }
        return false;
    }
    getUser() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentUserInfo();
    }
    currentSession() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentSession();
    }
    updateUser(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentUserPoolUser()
            .then((cognitoUser) => {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].updateUserAttributes(cognitoUser, user);
        });
    }
}
CognitoService.ɵfac = function CognitoService_Factory(t) { return new (t || CognitoService)(); };
CognitoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CognitoService, factory: CognitoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uTvV":
/*!************************************************************************!*\
  !*** ./src/app/devices/show-list-device/show-list-device.component.ts ***!
  \************************************************************************/
/*! exports provided: ShowListDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowListDeviceComponent", function() { return ShowListDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _share_board_share_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share-board/share-board.component */ "xx7u");
/* harmony import */ var _edit_board_edit_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-board/edit-board.component */ "V6Ab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function ShowListDeviceComponent_tr_22_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_8_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "K\u00EDch ho\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_ng_template_1_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_ng_template_1_td_0_Template, 2, 0, "td", 27);
} if (rf & 2) {
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", device_r1.type == "sensor-th");
} }
function ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_td_0_Template, 2, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", device_r1.stream.active && device_r1.type == "sensor-th")("ngIfElse", _r19);
} }
function ShowListDeviceComponent_tr_22_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShowListDeviceComponent_tr_22_ng_template_8_td_0_Template, 2, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShowListDeviceComponent_tr_22_ng_template_8_ng_template_1_Template, 3, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", device_r1.type !== "sensor-th")("ngIfElse", _r16);
} }
function ShowListDeviceComponent_tr_22_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowListDeviceComponent_tr_22_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.openDialog(device_r1, "share"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowListDeviceComponent_tr_22_ng_template_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.openDialog(device_r1, "share"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowListDeviceComponent_tr_22_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.openDialog(device_r1, "edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowListDeviceComponent_tr_22_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.handleDevice(device_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowListDeviceComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ShowListDeviceComponent_tr_22_td_7_Template, 2, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ShowListDeviceComponent_tr_22_ng_template_8_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ShowListDeviceComponent_tr_22_button_11_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ShowListDeviceComponent_tr_22_ng_template_12_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ShowListDeviceComponent_tr_22_button_15_Template, 3, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ShowListDeviceComponent_tr_22_ng_template_16_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ShowListDeviceComponent_tr_22_button_19_Template, 3, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ShowListDeviceComponent_tr_22_ng_template_20_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "B\u1EA1n c\u00F3 mu\u1ED1n x\u00F3a thi\u1EBFt b\u1ECB n\u00E0y kh\u00F4ng ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Lo\u1EA1i thi\u1EBFt b\u1ECB: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "M\u00E3 thi\u1EBFt b\u1ECB: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowListDeviceComponent_tr_22_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r37.requestDeleteDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "C\u00F3, h\u00E3y x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "H\u1EE7y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", device_r1.state && device_r1.type !== "sensor-th")("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.ownerships[i_r2] !== "guest")("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.ownerships[i_r2] !== "guest")("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.ownerships[i_r2] !== "guest")("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.deviceAction.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.deviceAction.deviceId);
} }
class ShowListDeviceComponent {
    constructor(common, dialog) {
        this.common = common;
        this.dialog = dialog;
        this.listdeviceIdShareRequest = [];
        this.listEmailShareRequest = [];
        this.listUIDShareRequest = [];
        this.numberDeviceShare = 0;
    }
    ngOnInit() {
        this.common.getDatabaseFirebase();
        this.common.currentMessage.subscribe(res => {
            this.devices = res;
            // console.log(this.devices)
        });
        this.common.ownership.subscribe(res => {
            this.ownerships = res;
        });
        this.deviceAction = this.devices;
        this.common.getShareHistories();
    }
    handleDevice(device) {
        this.deviceAction = device;
    }
    requestDeleteDevice() {
        this.common.deleteDevice(this.deviceAction);
        // console.log(this.deviceAction)
    }
    openDialog(device, cmd) {
        const virtualDevice = Object.assign({}, device);
        switch (cmd) {
            case 'share':
                const dialogRefShare = this.dialog.open(_share_board_share_board_component__WEBPACK_IMPORTED_MODULE_1__["ShareBoardComponent"], {
                    width: '430px',
                    data: { virtualDevice }
                });
                dialogRefShare.afterClosed().subscribe(result => { });
                break;
            case 'edit':
                const dialogRefEdit = this.dialog.open(_edit_board_edit_board_component__WEBPACK_IMPORTED_MODULE_2__["EditBoardComponent"], {
                    width: '430px',
                    data: { virtualDevice }
                });
                dialogRefEdit.afterClosed().subscribe(result => { });
                break;
            default:
        }
    }
    replyDemand(deviceId, command, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (command === "accept") {
                yield this.common.acceptShareDeviceDemand(deviceId);
            }
            else if (command === "refuse") {
                yield this.common.refuseShareDeviceDemand(deviceId, this.listUIDShareRequest[index]);
            }
        });
    }
}
ShowListDeviceComponent.ɵfac = function ShowListDeviceComponent_Factory(t) { return new (t || ShowListDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ShowListDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShowListDeviceComponent, selectors: [["app-show-list-device"]], decls: 23, vars: 1, consts: [[1, "container"], [1, "table"], ["colspan", "7", 1, "title-table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [4, "ngIf", "ngIfElse"], ["stateOff", ""], ["class", "btn btn-outline-dark", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBtnShare", ""], ["class", "btn btn-outline-dark", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBtnEdit", ""], ["class", "btn btn-outline-dark", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalDeleteDevice", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBtnDelete", ""], ["id", "exampleModalDeleteDevice", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-bs-backdrop", "static", "data-bs-keyboard", "false", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [2, "color", "brown"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["sensorTypeOn", ""], ["sensorTypeOff", ""], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-outline-dark", 3, "click"], [1, "btn", "btn-outline-dark", 3, "click"], ["disabled", "", 1, "btn", "btn-outline-dark"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModalDeleteDevice", 1, "btn", "btn-outline-dark", 3, "click"]], template: function ShowListDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Th\u00F4ng tin qu\u1EA3n l\u00FD thi\u1EBFt b\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "STT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "T\u00EAn thi\u1EBFt b\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "M\u00E3 thi\u1EBFt b\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Tr\u1EA1ng th\u00E1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Chia s\u1EBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Ch\u1EC9nh s\u1EEDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "X\u00F3a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ShowListDeviceComponent_tr_22_Template, 43, 13, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.devices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: rgb(90, 90, 202);\n    font-size: 20px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n\n.accordion-body[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: center; \n    justify-content: center;\n    font-weight: 500;\n}\n\n.accordion-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\n.accordion-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: red;\n}\n\n.table[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n    font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n    font-weight: bold;\n    color: rgba(230, 70, 230, 0.8);\n    background-color: bisque;\n}\n\nbutton[_ngcontent-%COMP%] {\n    outline: none;\n    border: none;\n}\n\n.example-form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n.example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctbGlzdC1kZXZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0RBQXdEO0lBQ3hELGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzaG93LWxpc3QtZGV2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBoMyB7XG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDIwMik7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmFjY29yZGlvbi1ib2R5IC5jb2wtNiBidXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFjY29yZGlvbi1ib2R5IGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWNjb3JkaW9uLWJvZHkgaDMgc3BhbiB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQ6IDQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYmEoMjMwLCA3MCwgMjMwLCAwLjgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbn1cblxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _devices_information_device_information_device_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices/information-device/information-device.component */ "XBXv");
/* harmony import */ var _devices_show_list_device_show_list_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices/show-list-device/show-list-device.component */ "uTvV");
/* harmony import */ var _page_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/about/about.component */ "cN1Q");
/* harmony import */ var _page_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/confirm-email/confirm-email.component */ "OACj");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/home/home.component */ "2EcK");
/* harmony import */ var _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/personal/personal.component */ "S3tI");
/* harmony import */ var _user_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/auth.guard */ "0aRt");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/registration/registration.component */ "PPYe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'home', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'about', component: _page_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"] },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'confirm-email', component: _page_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmEmailComponent"] },
    { path: 'personal-page', component: _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_6__["PersonalComponent"], canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'information-device', component: _devices_information_device_information_device_component__WEBPACK_IMPORTED_MODULE_1__["InformationDeviceComponent"], canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'show-list-device', component: _devices_show_list_device_show_list_device_component__WEBPACK_IMPORTED_MODULE_2__["ShowListDeviceComponent"], canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xx7u":
/*!**************************************************************!*\
  !*** ./src/app/devices/share-board/share-board.component.ts ***!
  \**************************************************************/
/*! exports provided: MyErrorStateMatcher, ShareBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBoardComponent", function() { return ShareBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ShareBoardComponent_div_24_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang chia s\u1EBB, vui l\u00F2ng ch\u1EDD \u0111\u1EE3i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang thu h\u1ED3i, vui l\u00F2ng ch\u1EDD \u0111\u1EE3i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chia s\u1EBB th\u00E0nh c\u00F4ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chia s\u1EBB th\u1EA5t b\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Thu h\u1ED3i th\u00E0nh c\u00F4ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Thu h\u1ED3i th\u1EA5t b\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ng\u01B0\u1EDDi n\u00E0y \u0111\u00E3 \u0111\u01B0\u1EE3c chia s\u1EBB!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ng\u01B0\u1EDDi n\u00E0y ch\u01B0a \u0111\u01B0\u1EE3c chia s\u1EBB!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ng\u01B0\u1EDDi nh\u1EADn kh\u00F4ng h\u1EE3p l\u1EC7 ho\u1EB7c ch\u01B0a \u0111\u0103ng k\u00FD!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Th\u00F4ng tin nh\u1EADp ch\u01B0a ch\u00EDnh x\u00E1c!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 28);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.notification === "Input-Email");
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.notification === "Invalid-Email")("ngIfElse", _r27);
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.notification === "Not-Shared")("ngIfElse", _r24);
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.notification === "Shared-Personal")("ngIfElse", _r21);
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.notification === "Revoked-Failed")("ngIfElse", _r18);
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.notification === "Revoked-Successful")("ngIfElse", _r15);
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.notification === "Shared-Failed")("ngIfElse", _r12);
} }
function ShareBoardComponent_div_24_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_ng_template_1_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.notification === "Shared-Successful")("ngIfElse", _r9);
} }
function ShareBoardComponent_div_24_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_24_ng_template_2_h4_0_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.notification === "Revoking")("ngIfElse", _r6);
} }
function ShareBoardComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_24_h4_1_Template, 2, 0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ShareBoardComponent_div_24_ng_template_2_Template, 3, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.notification === "Sharing")("ngIfElse", _r3);
} }
function ShareBoardComponent_div_26_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", index_r31, " ");
} }
function ShareBoardComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Danh s\u00E1ch ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c chia s\u1EBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ShareBoardComponent_div_26_li_4_Template, 2, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.userEmailShare);
} }
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class ShareBoardComponent {
    constructor(dialogRef, data, common) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.common = common;
        this.userIDShare = [];
        this.userEmailShare = [];
        this.shareInformation = {};
        this.notification = "";
        this.shareFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            taskFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.common.listShareHistories.subscribe(res => {
                this.listShareHistories = [];
                this.userEmailShare = [];
                let list = Object.keys(res);
                list.forEach(element => {
                    Object.keys(res[element]).forEach((sharers) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if ((res[element])[sharers].deviceId === this.data.virtualDevice.deviceId) {
                            this.listShareHistories.push((res[element])[sharers].to);
                            this.userEmailShare.push((yield this.common.searchByUID((res[element])[sharers].to)).email);
                        }
                    }));
                    this.userIDShare.push(this.listShareHistories);
                });
            });
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onAcceptClick(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!!this.shareFormGroup.value.emailFormControl && !!this.shareFormGroup.value.taskFormControl) {
                if (this.shareFormGroup.value.taskFormControl == "Share-Device") {
                    this.notification = "Sharing";
                }
                else if (this.shareFormGroup.value.taskFormControl == "Revoke-Device") {
                    this.notification = "Revoking";
                }
                let emailAlready = false; // kiem tra email nguoi dung nhap vao da co trong danh sach share hay chua
                this.userEmailShare.forEach(email => {
                    if (email === this.shareFormGroup.value.emailFormControl) {
                        emailAlready = true;
                    }
                });
                if (!emailAlready && this.shareFormGroup.value.taskFormControl == "Share-Device") { // neu chua co - thi co the share
                    let UID = yield this.common.searchByEmailUser(this.shareFormGroup.value.emailFormControl);
                    if (UID !== null) {
                        let resultShare = yield this.common.shareDevice(UID[0].uid, deviceId);
                        this.notification = resultShare.status ? "Shared-Successful" : "Shared-Failed";
                    }
                    else {
                        this.notification = "Invalid-Email";
                    }
                }
                else if (emailAlready && this.shareFormGroup.value.taskFormControl == "Revoke-Device") { // neu co - thi co the return
                    let UID = yield this.common.searchByEmailUser(this.shareFormGroup.value.emailFormControl);
                    if (UID !== null) {
                        let resultShare = yield this.common.revokeDevice(UID[0].uid, deviceId);
                        this.notification = resultShare.status ? "Revoked-Successful" : "Revoked-Failed";
                    }
                    else {
                        this.notification = "Invalid-Email";
                    }
                }
                else if (emailAlready && this.shareFormGroup.value.taskFormControl == "Share-Device") { // đã nằm trong danh sách share rồi
                    this.notification = "Shared-Personal";
                }
                else if (!emailAlready && this.shareFormGroup.value.taskFormControl == "Revoke-Device") { // chưa share nhưng thu hồi
                    this.notification = "Not-Shared";
                }
            }
            else {
                this.notification = "Input-Email";
            }
        });
    }
}
ShareBoardComponent.ɵfac = function ShareBoardComponent_Factory(t) { return new (t || ShareBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceService"])); };
ShareBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShareBoardComponent, selectors: [["app-share-board"]], decls: 32, vars: 7, consts: [[2, "text-align", "right"], ["mat-button", "", 3, "click"], ["mat-dialog-content", "", 2, "margin-left", "15px", "margin-right", "15px"], [1, "device-name"], [1, "tag-header"], [1, "control-device"], [1, "form-group"], ["action", "", 3, "formGroup"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "email", "formControlName", "emailFormControl", "for", "", "aria-describedby", "emailHelp", "placeholder", "Email", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "taskFormControl"], ["color", "primary", "value", "Share-Device"], ["color", "primary", "value", "Revoke-Device"], ["class", "notification-share d-flex justify-content-center", 4, "ngIf"], ["class", "list-share", 4, "ngIf"], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-button", "", "cdkFocusInitial", "", 3, "disabled", "click"], [1, "notification-share", "d-flex", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["notifyRevoking", ""], ["notifySharedSuccessful", ""], ["notifySharedFailed", ""], ["notifyRevokedSuccessful", ""], ["notifyRevokedFailed", ""], ["notifySharedPersonal", ""], ["notifyNotShared", ""], ["notifyInvalidEmail", ""], ["notifyInputEmail", ""], [4, "ngIf"], [1, "list-share"], [1, ""], [4, "ngFor", "ngForOf"]], template: function ShareBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShareBoardComponent_Template_button_click_1_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Nh\u1EADp email ng\u01B0\u1EDDi b\u1EA1n mu\u1ED1n chia s\u1EBB ho\u1EB7c thu h\u1ED3i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-radio-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Chia s\u1EBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Thu h\u1ED3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ShareBoardComponent_div_24_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ShareBoardComponent_div_26_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShareBoardComponent_Template_button_click_28_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShareBoardComponent_Template_button_click_30_listener() { return ctx.onAcceptClick(ctx.data.virtualDevice.deviceId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u0110\u1ED3ng \u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.virtualDevice.ot_nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("T\u00EAn ti\u1EBFng anh: ", ctx.data.virtualDevice.en_nickname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("M\u00E3 thi\u1EBFt b\u1ECB: ", ctx.data.virtualDevice.deviceId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.shareFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userEmailShare.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.shareFormGroup.valid);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".tag-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #FF914D;\n  margin: 0px;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-top : 20px; \n  margin-bottom: 20px;\n}\n\n.notification-share[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FF914D;\n  font-size: 16px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic2hhcmUtYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWctaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFnLWhlYWRlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGOTE0RDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcCA6IDIwcHg7IFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLXNoYXJlIGg0IHtcbiAgY29sb3I6ICNGRjkxNEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map