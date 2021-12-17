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
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service.service */ "UPSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











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
    constructor(auth, router, common) {
        this.auth = auth;
        this.router = router;
        this.common = common;
        this.information = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    ngOnInit() {
        this.statusLogin = {
            message: ""
        };
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.statusLogin = yield this.auth.signIn(this.information);
            if (!this.statusLogin.message) {
                let access_token = yield this.statusLogin.user.getIdToken();
                yield localStorage.setItem('access_token', access_token);
                yield this.common.decodeAccessToken(access_token);
                if (this.common.userInfor["email_verified"]) {
                    this.router.navigate(['/home']);
                    this.statusLogin = "SIGNIN_OK";
                    this.common.getShareRequest();
                    this.auth.isLogin();
                }
                else {
                    localStorage.removeItem("access_token");
                    this.router.navigate(['/confirm-email']);
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceService"])); };
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 300px;\n  width: 100%;\n  \n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-standee[_ngcontent-%COMP%] {\n  \n  font-size: 35px;\n  width: 100%;\n  \n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.forgetPass-login[_ngcontent-%COMP%] {\n  \n  font-size: 15px;\n}\n\n.forgetPass-login[_ngcontent-%COMP%]:hover {\n  color: red;\n  cursor: pointer;\n  transition: 0.4s; \n}\n\n.notify-status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: red;\n  \n}\n\n#content[_ngcontent-%COMP%]{\n  width: 50vw;\n  height: 50vh;\n  margin: 15vh auto;\n  \n}\n\n#left[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  text-align: right;\n}\n\n#right[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50%;\n  padding-top: 40px;\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUUseUJBQXlCO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLXN0YW5kZWUge1xuICAvKiBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cbiAgZm9udC1zaXplOiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuXG4uZm9yZ2V0UGFzcy1sb2dpbiB7XG4gIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZm9yZ2V0UGFzcy1sb2dpbjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40czsgLyogdOG6oW8gxJHhu5kgdHLhu4UgY2hvIGhvdmVyICovXG59XG5cbi5ub3RpZnktc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgLyogZm9udC1mYW1pbHk6IExvcmE7ICovXG59XG4jY29udGVudHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxNXZoIGF1dG87XG4gIFxufVxuI2xlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4jcmlnaHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HocKi7\CE206-M11-DoAn2\Webcontrol-Smarthome\src\main.ts */"zUnb");


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
    } }, styles: ["#bg[_ngcontent-%COMP%]{\n    width:520px; \n    height: auto;\n}\nbody[_ngcontent-%COMP%]{\n    \n    height: 90vh;\n    width: 100vw;\n    padding: 0px 100px 0px 0px;\n    position: absolute;\n}\n#content[_ngcontent-%COMP%]{\n    width: 80vw;\n    height: 60vh;\n    margin-top: 10vh;\n    margin-left: 10vw;\n}\n#left[_ngcontent-%COMP%] {\n    padding-left:0vw;\n    float: left;\n    width: 50%;\n    text-align: justify;\n    \n  }\n#right[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 50%;\n    text-align: right;\n}\n#logo-lite[_ngcontent-%COMP%]{\n    height: 60px;\n    width: auto;\n}\n#description[_ngcontent-%COMP%]{\n    font-size: 30px;\n}\n#footer[_ngcontent-%COMP%]{\n    text-align: center;\n    background-color: rgb(73, 73, 73);\n    color: white;\n    width: 100vw;\n    height: 4vh;\n    bottom: 0px;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvS0c7QUFDSDtJQUNJLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDO0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5iYWNrZ3JvdW5kLWhvbWUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lLXBhZ2UvYmFja2dyb3VuZC05LmpwZ1wiKTsgXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRleigwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGV6KDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgei1pbmRleDogMDtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpOyBcbn1cblxuLmJvZHktY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIxMywgMjEzLCAwLjIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uanNzMDEtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgICBtaW4taGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uanNzMDEtY29udGVudCAuanNzMDEtY29udGVudC0wMDEge1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBhbmltYXRpb24tbmFtZToganNzMDEtY29udGVudC0wMDE7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbn1cbkBrZXlmcmFtZXMganNzMDEtY29udGVudC0wMDEge1xuICAgIGZyb20ge3BhZGRpbmctdG9wOiAxMDBweH1cbiAgICB0byB7fVxufVxuXG5cbi5qc3MwMS1jb250ZW50IC5qc3MwMS1jb250ZW50LTAwMSBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBmb250LWZhbWlseTogTG9yYSwgSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZiwgVGFob21hO1xufVxuLmpzczAxLWNvbnRlbnQgLmpzczAxLWNvbnRlbnQtMDAxIGgxIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZhMDAwO1xufVxuXG4uanNzMDEtY29udGVudCAuanNzMDEtY29udGVudC0wMDEgaDIge1xuICAgIGNvbG9yOiByZ2IoMjM0LCAxMSwgMjQxKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmpzczAyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzV2aDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uanNzMDItY29udGVudC0wMDEge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGExMzM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM2Yzg2NjgsICMwNzk2MWEpO1xufVxuXG4uanNzMDItY29udGVudCAucm93IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50OyAgIFxufVxuLmpzczAyLWNvbnRlbnQgLmZhcm0taW5mb3JtYXRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIwNiwgMjAzLCAwLjIpO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDIzNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDFweDtcbn1cbi5qc3MwMi1jb250ZW50IC5mYXJtLWluZm9ybWF0aW9uOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5qc3MwMi1jb250ZW50IC5mYXJtLWluZm9ybWF0aW9uIC5mYXJtLWluZm9ybWF0aW9uLTAwMSB7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5cbi5qc3MwMi1jb250ZW50IC5mYXJtLWluZm9ybWF0aW9uIC50ZWNobm9sb2d5LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoNTQsIDQ5LCA1NCwgMC44KTtcbn1cblxuLmZvb3Rlci1ib3gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4IDtcbn1cblxuI2JveC0wMDEge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuI2JveC0wMDEgaDEsICNib3gtMDAyIGgxLCAjYm94LTAwMyBoMSB7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWYsIFRhaG9tYTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufVxuI2JveC0wMDEgaDEgc3BhbntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IExvcmEsIEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWYsIFRhaG9tYTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjZmZhMDAwO1xufVxuI2JveC0wMDEgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMyk7XG59XG5cbiNib3gtMDAyIHVsIGxpLCBhe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogcmdiKDIyMiwgMjIyLCAyMjMpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbiNib3gtMDAyIHVsIGxpOmhvdmVyLCBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2FmYTYyNztcbn1cblxuI2JveC0wMDMgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMyk7XG59XG5cbiNjb3BweXJpZ2h0LXdhcm1ob3VzZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgVGFob21hO1xuICAgIGNvbG9yOiAjNTMzYzEzO1xufSAqL1xuI2Jne1xuICAgIHdpZHRoOjUyMHB4OyAvKiB5b3UgY2FuIHVzZSAlICovXG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuYm9keXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZmQ1OyAqL1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2NvbnRlbnR7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59XG4jbGVmdCB7XG4gICAgcGFkZGluZy1sZWZ0OjB2dztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLyogY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAqL1xuICB9XG4jcmlnaHQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNsb2dvLWxpdGV7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuI2Rlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbiNmb290ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDczKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNHZoO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"] });


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

class ConfirmEmailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmEmailComponent.ɵfac = function ConfirmEmailComponent_Factory(t) { return new (t || ConfirmEmailComponent)(); };
ConfirmEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmEmailComponent, selectors: [["app-confirm-email"]], decls: 8, vars: 0, consts: [[1, "box-email-css"], [1, "d-flex", "justify-content-center"], ["src", "../../../assets/email-page/email-check.png", "width", "20%", "alt", ""], [1, "box-email-content"]], template: function ConfirmEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ch\u00FAng t\u00F4i \u0111\u00E3 g\u1EEDi \u0111\u1EBFn b\u1EA1n m\u1ED9t th\u01B0 x\u00E1c nh\u1EADn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vui l\u00F2ng x\u00E1c nh\u1EADn qua h\u1ED9p th\u01B0 c\u1EE7a b\u1EA1n !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".box-email-css[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    padding-top: 5% ;\n}\n\n.box-email-content[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    color: rgb(214, 63, 63);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpREFBaUQ7SUFDakQsdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImNvbmZpcm0tZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtZW1haWwtY3NzIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1JSA7XG59XG5cbi5ib3gtZW1haWwtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDIxNCwgNjMsIDYzKTtcbn0iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n\n.hero-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    vertical-align: middle;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 3px solid white;\n}\n\n\n.content[_ngcontent-%COMP%]{\n    width: 80vw;\n    height: 60vh;\n    margin-top: 10vh;\n    margin-left: 10vw;\n}\n\n\n.left[_ngcontent-%COMP%] {\n  padding-left:0vw;\n  float: left;\n  width: 50%;\n  text-align: justify;\n  \n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('uit2.jpg');\n  height: 50%;\n  min-height: 350px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-radius: 10px;\n}\n\n\n.right[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50%;\n  text-align: left;\n\n  \n}\n\n\n.info-box[_ngcontent-%COMP%] {\n  background-color: rgb(243, 243, 243);\n  width: 90%;\n  border-radius: 10px;\n  padding: 15px 15px;\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n\n\n.decision-btn[_ngcontent-%COMP%]{\n  margin-right:10px;\n  background-color: rgb(243, 243, 243);\n  \n}\n\n\n.decision-btn[_ngcontent-%COMP%]:hover{\n  color:white;\n  background-color: #FF914D;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBGQUFpSDtFQUNqSCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7O0VBRWhCOzs7cUJBR21CO0FBQ3JCOzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsK0JBQStCO0FBQ2pDOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InBlcnNvbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmhlcm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXZhdGFyIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG59XG5cbi5jb250ZW50e1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xufVxuLmxlZnQge1xuICBwYWRkaW5nLWxlZnQ6MHZ3O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLyogY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvL2Fib3V0L3VpdDIuanBnXCIpO1xuICBoZWlnaHQ6IDUwJTtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnJpZ2h0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAvKiB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiA2MHZoO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBtYXJnaW4tbGVmdDogMTB2dzsqL1xufVxuXG4uaW5mby1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZGVjaXNpb24tYnRue1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTREOyAqL1xufVxuLmRlY2lzaW9uLWJ0bjpob3ZlcntcbiAgY29sb3I6d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjkxNEQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59Il19 */"] });


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
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
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
function AppComponent_div_20_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.userInfor.name);
} }
function AppComponent_div_20_button_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "marquee", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r5.userInfor.name, " c\u00F3 ", ctx_r5.numberDeviceShare, " th\u00F4ng b\u00E1o");
} }
const _c1 = function () { return ["/personal-page"]; };
function AppComponent_div_20_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_20_button_1_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_20_button_1_ng_template_2_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numberDeviceShare == 0)("ngIfElse", _r4);
} }
function AppComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_20_button_1_Template, 4, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.logout(); });
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
const _c3 = function () { return ["/show-list-device"]; };
const _c4 = function () { return ["/home"]; };
const _c5 = function () { return ["/about"]; };
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
            yield localStorage.removeItem("access_token");
            this.logined = this.auth.isLogin();
            this.userInfor = "";
            location.reload();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "max-height", "10vh", "background-color", "#ffffff !important", "color", "aliceblue !important"], [1, "container-fluid"], ["href", "/home", 1, "navbar-brand-name"], ["src", "../assets/logo/warmhouse.png", 1, "navbar-brand-name"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "button-name"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "me-auto"], [1, "example-button-row"], ["mat-button", "", "routerLinkActive", "router-link-active", 1, "button-hover", 3, "routerLink"], ["class", "notLogined", 4, "ngIf"], ["class", "Logined", 4, "ngIf"], [1, "notLogined"], ["mat-flat-button", "", "routerLinkActive", "router-link-active", 1, "loginButton", 3, "routerLink"], [1, "Logined"], ["class", "userName", "mat-flat-button", "", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], ["mat-flat-button", "", 1, "logoutButton", 3, "click"], ["mat-flat-button", "", "routerLinkActive", "router-link-active", 1, "userName", 3, "routerLink"], [4, "ngIf", "ngIfElse"], ["noti", ""], [2, "width", "9vw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ch\u1EC9nh s\u1EEDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Mua h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Gi\u1EDBi thi\u1EC7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_div_19_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_div_20_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c5));
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









function ControllerBoardComponent_div_10_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_10_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_10_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_10_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
function ControllerBoardComponent_div_11_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_11_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: \u0110\u00E8n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_11_ng_template_7_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: Qu\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_11_ng_template_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: Thi\u1EBFt b\u1ECB kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_11_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_11_ng_template_7_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_11_ng_template_7_ng_template_1_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.data.virtualDevice.switch_type === "fan")("ngIfElse", _r20);
} }
function ControllerBoardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_11_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_11_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ControllerBoardComponent_div_11_h2_6_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ControllerBoardComponent_div_11_ng_template_7_Template, 3, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
function ControllerBoardComponent_div_12_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: K\u00EDch ho\u1EA1t");
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
function ControllerBoardComponent_div_13_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Gi\u1EA5c ng\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_11_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: L\u1EEDa ch\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_11_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: B\u1EEDa ti\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_11_ng_template_1_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: C\u1EA7u v\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_11_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Theo m\u00E0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_13_ng_template_11_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_13_ng_template_11_ng_template_1_ng_template_1_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_13_ng_template_11_ng_template_1_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r36.modeColorLight === "rainbow")("ngIfElse", _r38);
} }
function ControllerBoardComponent_div_13_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_13_ng_template_11_ng_template_1_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_13_ng_template_11_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r33.modeColorLight === "party")("ngIfElse", _r35);
} }
function ControllerBoardComponent_div_13_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ControllerBoardComponent_div_13_ng_template_11_h2_0_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControllerBoardComponent_div_13_ng_template_11_ng_template_1_Template, 3, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r30.modeColorLight === "burning")("ngIfElse", _r32);
} }
function ControllerBoardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_13_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_13_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ControllerBoardComponent_div_13_h2_10_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ControllerBoardComponent_div_13_ng_template_11_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
function ControllerBoardComponent_div_14_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
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
function ControllerBoardComponent_div_15_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang kh\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang m\u1EDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControllerBoardComponent_div_15_h2_3_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ControllerBoardComponent_div_15_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.data.virtualDevice.state)("ngIfElse", _r44);
} }
function ControllerBoardComponent_div_16_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_16_input_8_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r51.data.virtualDevice.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.data.virtualDevice.state);
} }
function ControllerBoardComponent_div_16_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_16_ng_template_9_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.data.virtualDevice.active = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r48.data.virtualDevice.active);
} }
function ControllerBoardComponent_div_16_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ED9 s\u00E1ng:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_16_div_15_Template_mat_slider_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.data.virtualDevice.brightness = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r49.data.virtualDevice.brightness);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx_r49.formatLabel)("ngModel", ctx_r49.data.virtualDevice.brightness);
} }
function ControllerBoardComponent_div_16_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thi\u1EBFt l\u1EADp m\u00E0u \u0111\u00E8n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControllerBoardComponent_div_16_div_16_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r57.data.virtualDevice.color = $event; });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_16_div_16_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r59.setModeColorLight("rainbow"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "C\u1EA7u v\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_16_div_16_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r60.setModeColorLight("burning"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "L\u1EEDa ch\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_16_div_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r61.setModeColorLight("party"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "B\u1EEFa ti\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_16_div_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r62.setModeColorLight("sleep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Gi\u1EA5c ng\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_div_16_div_16_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r63.setModeColorLight("none"); });
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
function ControllerBoardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "B\u1EADt/T\u1EAFt thi\u1EBFt b\u1ECB:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ControllerBoardComponent_div_16_input_8_Template, 1, 1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ControllerBoardComponent_div_16_ng_template_9_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ControllerBoardComponent_div_16_div_15_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ControllerBoardComponent_div_16_div_16_Template, 20, 2, "div", 5);
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
function ControllerBoardComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0110\u1ED3ng \u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControllerBoardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
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
ControllerBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ControllerBoardComponent, selectors: [["app-controller-board"]], decls: 24, vars: 12, consts: [[2, "text-align", "right"], ["mat-button", "", 3, "click"], [1, "tag-header"], ["mat-dialog-content", "", 2, "margin-left", "15px", "margin-right", "15px"], [1, "device-name"], [4, "ngIf"], ["class", "control-device", 4, "ngIf"], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"], [4, "ngIf", "ngIfElse"], ["sensorType", ""], [1, "tag-content"], ["class", "row d-flex", 4, "ngIf", "ngIfElse"], ["elseStateDevice", ""], [1, "row", "d-flex"], ["elseSwitchType_1", ""], ["elseSwitchType_2", ""], [1, "sensor-notify"], ["elseSleep", ""], ["elseBurning", ""], ["elseParty", ""], ["elseModeColor", ""], [1, "control-device"], [1, "onOff"], [1, "onOffDiv"], [1, "onOffButton"], [1, "col"], [1, "toggle-wrapper2"], [1, "toggle2", "dog-rollover2"], ["id", "doggo2", "type", "checkbox", "class", "inputCheckbox", "checked", "data.virtualDevice.state", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["for", "doggo2", 1, "toggle-item2"], [1, "dog2"], [1, "face2"], ["id", "doggo2", "type", "checkbox", "checked", "data.virtualDevice.state", 1, "inputCheckbox", 3, "ngModel", "ngModelChange"], ["id", "doggo2", "type", "checkbox", "checked", "data.virtualDevice.active", 1, "inputCheckbox", 3, "ngModel", "ngModelChange"], [1, "row"], ["thumbLabel", "", "tickInterval", "1", "step", "1", "min", "0", "max", "100", "aria-label", "units", 3, "displayWith", "value", "ngModel", "ngModelChange"], [2, "text-align", "center"], ["type", "color", "id", "head", "name", "head", "value", "data.virtualDevice.color", 2, "width", "80%", "height", "40px", 3, "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Basic outlined example", 1, "btn-group", 2, "margin-bottom", "20px"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function ControllerBoardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ControllerBoardComponent_div_10_Template, 9, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ControllerBoardComponent_div_11_Template, 10, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ControllerBoardComponent_div_12_Template, 13, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ControllerBoardComponent_div_13_Template, 14, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ControllerBoardComponent_div_14_Template, 9, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ControllerBoardComponent_div_15_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ControllerBoardComponent_div_16_Template, 17, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControllerBoardComponent_Template_button_click_20_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ControllerBoardComponent_span_21_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ControllerBoardComponent_ng_template_22_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.virtualDevice.ot_nickname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.virtualDevice.deviceId);
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]], styles: [".tag-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #FF914D;\n  margin: 0px;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.sensor-notify[_ngcontent-%COMP%] {\n  color: rgb(50, 50, 233);\n}\n\n.onOff[_ngcontent-%COMP%]{\n  width: 100%;\n  display: block;\n}\n\n.onOffDiv[_ngcontent-%COMP%] {\n  padding-left:0vw;\n  float: left;\n  width: 55%;\n  text-align: left;\n  \n}\n\n.onOffButton[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 45%;\n  text-align: left;\n\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n\n.inputCheckbox[_ngcontent-%COMP%] {\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n}\n\n.toggle-wrapper2[_ngcontent-%COMP%] {\n  flex: 1 1 calc(100% / 3);\n  min-height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n\n@media (max-width: 960px) {\n  .toggle-wrapper2[_ngcontent-%COMP%] {\n    flex: 1 1 calc(100% / 2);\n  }\n}\n\n@media (max-width: 700px) {\n  .toggle-wrapper2[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n}\n\n\n\n.toggle2[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\nlabel.toggle-item2[_ngcontent-%COMP%] {\n  width: 7em;\n  background: #2e394d;\n  height: 3em;\n  display: inline-block;\n  border-radius: 50px;\n  \n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n}\n\nlabel.toggle-item2[_ngcontent-%COMP%]:before {\n  display: block;\n  transition: all 0.2s ease;\n  width: 2.3em;\n  height: 2.3em;\n  top: 0.25em;\n  left: 0.25em;\n  border-radius: 2em;\n  border: 2px solid #88cf8f;\n  transition: 0.3s ease;\n}\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: none;\n}\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .dog2[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  width: 2.5em;\n  height: 2.5em;\n  top: 0.25em;\n  left: 0.2em;\n  transition: 0.6s ease;\n}\n\n\n\n\n\n\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .face2[_ngcontent-%COMP%] {\n  \n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  position: absolute;\n  background: #fff;\n  z-index: 8;\n}\n\n\n\n.dog-rollover2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  border-color: white;\n  background: white;\n}\n\n#doggo2[_ngcontent-%COMP%]:checked    ~ .cup[_ngcontent-%COMP%] {\n  animation: 0.2s linear cup 1s forwards;\n}\n\n#doggo2[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .dog2[_ngcontent-%COMP%] {\n  left: 60px;\n  transform: rotate(360deg);\n}\n\n\n\n#doggo2[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .ear2.right2[_ngcontent-%COMP%] {\n  transform: scaleX(-1) rotate(-35deg);\n  transition-delay: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXItYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7O0FBRWxCOztBQUNBLHdGQUF3Rjs7QUFDeEY7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1AsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBOztLQUVLOztBQUVMO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFDQTs7Ozs7Ozs7R0FRRzs7QUFDSDs7Ozs7Ozs7Ozs7R0FXRzs7QUFDSDs7Ozs7O0dBTUc7O0FBQ0g7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7O0FBQ0g7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFDQTs7O0dBR0c7O0FBQ0g7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImNvbnRyb2xsZXItYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWctaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFnLWhlYWRlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGOTE0RDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbm1hdC1zbGlkZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zZW5zb3Itbm90aWZ5IHtcbiAgY29sb3I6IHJnYig1MCwgNTAsIDIzMyk7XG59XG5cbi5vbk9mZntcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm9uT2ZmRGl2IHtcbiAgcGFkZGluZy1sZWZ0OjB2dztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1NSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC8qIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgKi9cbn1cbi5vbk9mZkJ1dHRvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0NSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmFkaW8gYnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlucHV0Q2hlY2tib3gge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDBweDtcbn1cblxuLnRvZ2dsZS13cmFwcGVyMiB7XG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLyAzKTtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAudG9nZ2xlLXdyYXBwZXIyIHtcbiAgICBmbGV4OiAxIDEgY2FsYygxMDAlIC8gMik7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAudG9nZ2xlLXdyYXBwZXIyIHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgfVxufVxuXG4vKiAudG9nZ2xlLXdyYXBwZXI6bnRoLWNoaWxkKDYpIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzQ4N2RlO1xuICB9ICovXG5cbi50b2dnbGUyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmxhYmVsLnRvZ2dsZS1pdGVtMiB7XG4gIHdpZHRoOiA3ZW07XG4gIGJhY2tncm91bmQ6ICMyZTM5NGQ7XG4gIGhlaWdodDogM2VtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC8qIG1hcmdpbjogMHB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDIwJSBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmxhYmVsLnRvZ2dsZS1pdGVtMjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgd2lkdGg6IDIuM2VtO1xuICBoZWlnaHQ6IDIuM2VtO1xuICB0b3A6IDAuMjVlbTtcbiAgbGVmdDogMC4yNWVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OGNmOGY7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLmRvZy1yb2xsb3ZlcjIgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5kb2ctcm9sbG92ZXIyIGxhYmVsIC5kb2cyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgdG9wOiAwLjI1ZW07XG4gIGxlZnQ6IDAuMmVtO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG59XG4vKiAuZG9nLXJvbGxvdmVyMiBsYWJlbCAuZXllczIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgMTRweCk7XG4gIGJveC1zaGFkb3c6IDE2cHggMCAwICMyMjIsIDIycHggLTRweCAwIDEycHggI2U0YWMwNDtcbn0gKi9cbi8qIC5kb2ctcm9sbG92ZXIyIGxhYmVsIC5lYXIyIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNHB4O1xuICBib3R0b206IDgwJTtcbiAgYmFja2dyb3VuZDogI2Y5YmIwMDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDAgLyAxMDAlIDEwMCUgMCAwO1xuICBib3gtc2hhZG93OiBpbnNldCA0cHggMCAwIDBweCAjZmZmZmZmLCBpbnNldCAtNHB4IDAgMCAwcHggI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn0gKi9cbi8qIC5kb2ctcm9sbG92ZXIyIGxhYmVsIC5lYXIyLnJpZ2h0MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKSBzY2FsZVgoLTEpO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xuICByaWdodDogMHB4O1xufSAqL1xuLmRvZy1yb2xsb3ZlcjIgbGFiZWwgLmZhY2UyIHtcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogODtcbn1cbi8qIC5kb2ctcm9sbG92ZXIyIGxhYmVsIC5tb3V0aDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDdweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgYm90dG9tOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDIwcHggMjBweDtcbiAgYm90dG9tOiA4cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn1cbi5kb2ctcm9sbG92ZXIyIGxhYmVsIC5tb3V0aDI6YmVmb3JlIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICNlYzc4OGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDVweCk7XG59ICovXG4uZG9nLXJvbGxvdmVyMiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuI2RvZ2dvMjpjaGVja2VkIH4gLmN1cCB7XG4gIGFuaW1hdGlvbjogMC4ycyBsaW5lYXIgY3VwIDFzIGZvcndhcmRzO1xufVxuI2RvZ2dvMjpjaGVja2VkICsgbGFiZWwgLmRvZzIge1xuICBsZWZ0OiA2MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuLyogI2RvZ2dvMjpjaGVja2VkICsgbGFiZWwgLm1vdXRoMiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuN3M7XG59ICovXG4jZG9nZ28yOmNoZWNrZWQgKyBsYWJlbCAuZWFyMi5yaWdodDIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKC0zNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG4iXX0= */"] });


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
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-service.service */ "aCBZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class AuthServiceService {
    constructor(afAuth, afdb, common, http) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.common = common;
        this.http = http;
        this.logined = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.logined.asObservable();
    }
    signUp(information) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.createUserWithEmailAndPassword(information.value.email, information.value.password)
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
    signIn(information) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signInWithEmailAndPassword(information.value.email, information.value.password)
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
            this.afAuth.signOut()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                resolve(res);
            }))
                .catch((error) => {
                reject(error);
            });
        }));
    }
    isLogin() {
        if (!!localStorage.getItem('access_token')) {
            this.common.decodeAccessToken(localStorage.getItem('access_token'));
            if (!this.common.isExpireDateToken && this.common.userInfor["email_verified"]) {
                this.logined.next(true);
                return true;
            }
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
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");










function EditBoardComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nh\u1EADp m\u00E3 PIN m\u1EDBi cho kh\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditBoardComponent_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 20);
} }
function EditBoardComponent_mat_radio_group_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-group", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Thi\u1EBFt b\u1ECB \u0111\u01B0\u1EE3c k\u1EBFt n\u1ED1i v\u1EDBi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0110\u00E8n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Qu\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-radio-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditBoardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 26);
} }
function EditBoardComponent_ng_template_22_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ch\u1EC9nh s\u1EEDa th\u00E0nh c\u00F4ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditBoardComponent_ng_template_22_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
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
function EditBoardComponent_ng_template_22_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditBoardComponent_ng_template_22_ng_template_1_h4_0_Template, 4, 1, "h4", 29);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.result.status == false);
} }
function EditBoardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditBoardComponent_ng_template_22_h4_0_Template, 2, 0, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditBoardComponent_ng_template_22_ng_template_1_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
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
EditBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditBoardComponent, selectors: [["app-edit-board"]], decls: 30, vars: 9, consts: [["mat-dialog-content", "", 2, "margin-left", "15px", "margin-right", "15px"], [1, "device-name"], [1, "tag-header"], [1, "control-device"], [1, "form-group"], ["action", "", 3, "formGroup"], ["id", "PINHelp", "class", "form-text text-muted", 4, "ngIf"], ["type", "password", "class", "form-control", "formControlName", "PINFormControl", "for", "", "aria-describedby", "PINHelp", 4, "ngIf"], ["id", "ot_nicknameHelp", 1, "form-text", "text-muted"], ["type", "text", "formControlName", "ot_nicknameFormControl", "for", "", "aria-describedby", "ot_nicknameHelp", 1, "form-control"], ["id", "en_nicknameHelp", 1, "form-text", "text-muted"], ["type", "text", "formControlName", "en_nicknameFormControl", "for", "", "aria-describedby", "en_nicknameHelp", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "switchTypeFormControl", 4, "ngIf"], [1, "notification-edit", "d-flex", "justify-content-center"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf", "ngIfElse"], ["resultTrue", ""], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "disabled", "click"], ["id", "PINHelp", 1, "form-text", "text-muted"], ["type", "password", "formControlName", "PINFormControl", "for", "", "aria-describedby", "PINHelp", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "switchTypeFormControl"], [2, "margin-top", "20px"], ["value", "light"], ["value", "fan"], ["value", "other"], ["role", "status", 1, "spinner-border", "text-primary"], [4, "ngIf", "ngIfElse"], ["resultFalse", ""], [4, "ngIf"]], template: function EditBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EditBoardComponent_small_11_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditBoardComponent_input_12_Template, 1, 0, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Nh\u1EADp t\u00EAn thi\u1EBFt b\u1ECB ti\u1EBFng Vi\u1EC7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Nh\u1EADp t\u00EAn thi\u1EBFt b\u1ECB ti\u1EBFng Anh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EditBoardComponent_mat_radio_group_19_Template, 9, 0, "mat-radio-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditBoardComponent_div_21_Template, 1, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, EditBoardComponent_ng_template_22_Template, 3, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditBoardComponent_Template_button_click_26_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditBoardComponent_Template_button_click_28_listener() { return ctx.onAcceptClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u0110\u1ED3ng \u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.virtualDevice.ot_nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.virtualDevice.deviceId);
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"]], styles: [".tag-header[_ngcontent-%COMP%] {\n    text-align: center;\n}\n  \n.tag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: rgba(230, 70, 230, 0.8);\n    margin: 0px;\n}\n  \n.notification-edit[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n  \n.notification-edit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: red;\n    font-style: italic;\n    margin-top: 5px;\n}\n  \n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJlZGl0LWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbi50YWctaGVhZGVyIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiYSgyMzAsIDcwLCAyMzAsIDAuOCk7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5ub3RpZmljYXRpb24tZWRpdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5vdGlmaWNhdGlvbi1lZGl0IGg0IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"] });


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
/* harmony import */ var _controller_board_controller_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller-board/controller-board.component */ "UFh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function InformationDeviceComponent_div_4_div_2_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_2_h2_8_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_2_ng_template_9_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0110\u1ED9 s\u00E1ng: ", device_r1.brightness, "");
} }
function InformationDeviceComponent_div_4_div_3_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: \u0110\u00E8n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_12_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S\u1EED d\u1EE5ng cho: Qu\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S\u1EED d\u1EE5ng: Thi\u1EBFt b\u1ECB kh\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_3_ng_template_12_h2_0_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_3_ng_template_12_ng_template_1_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.switch_type === "fan")("ngIfElse", _r19);
} }
function InformationDeviceComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_3_h2_8_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_3_ng_template_9_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InformationDeviceComponent_div_4_div_3_h2_11_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InformationDeviceComponent_div_4_div_3_ng_template_12_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.switch_type === "light")("ngIfElse", _r16);
} }
function InformationDeviceComponent_div_4_div_4_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: K\u00EDch ho\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_4_h2_8_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_4_ng_template_9_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.stream.active)("ngIfElse", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nhi\u1EC7t \u0111\u1ED9: ", device_r1.temp, "\u00BAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0110\u1ED9 \u1EA9m: ", device_r1.humi, "%");
} }
function InformationDeviceComponent_div_4_div_5_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_h2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Gi\u1EA5c ng\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: L\u1EEDa ch\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: B\u1EEDa ti\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: C\u1EA7u v\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u1EBF \u0111\u1ED9: Theo m\u00E0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_h2_0_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.rainbow)("ngIfElse", _r40);
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_h2_0_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.party)("ngIfElse", _r37);
} }
function InformationDeviceComponent_div_4_div_5_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InformationDeviceComponent_div_4_div_5_ng_template_18_h2_0_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InformationDeviceComponent_div_4_div_5_ng_template_18_ng_template_1_Template, 3, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.burning)("ngIfElse", _r34);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function InformationDeviceComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_5_h2_8_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_5_ng_template_9_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "M\u00E0u \u0111\u00E8n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, InformationDeviceComponent_div_4_div_5_h2_17_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, InformationDeviceComponent_div_4_div_5_ng_template_18_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0110\u1ED9 s\u00E1ng: ", device_r1.brightness, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, device_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.sleep)("ngIfElse", _r31);
} }
function InformationDeviceComponent_div_4_div_6_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_6_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_6_h2_8_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_6_ng_template_9_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("M\u1EE9c \u0111\u1ED9: ", device_r1.fanspeed, "");
} }
function InformationDeviceComponent_div_4_div_7_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang kh\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_7_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tr\u1EA1ng th\u00E1i: \u0110ang m\u1EDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationDeviceComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationDeviceComponent_div_4_div_7_h2_8_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationDeviceComponent_div_4_div_7_ng_template_9_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.ot_nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.state)("ngIfElse", _r51);
} }
function InformationDeviceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InformationDeviceComponent_div_4_div_2_Template, 13, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InformationDeviceComponent_div_4_div_3_Template, 14, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InformationDeviceComponent_div_4_div_4_Template, 15, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InformationDeviceComponent_div_4_div_5_Template, 20, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InformationDeviceComponent_div_4_div_6_Template, 13, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InformationDeviceComponent_div_4_div_7_Template, 11, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationDeviceComponent_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const device_r1 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.openDialog(device_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0110i\u1EC1u khi\u1EC3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.type === "normal-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.type === "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.type === "sensor-th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.type === "color-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.type === "fan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.type === "lock");
} }
class InformationDeviceComponent {
    constructor(common, dialog) {
        this.common = common;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.common.getDatabaseFirebase();
        this.common.currentMessage.subscribe(res => {
            this.devices = res;
        });
    }
    openDialog(device) {
        const virtualDevice = Object.assign({}, device);
        const dialogRef = this.dialog.open(_controller_board_controller_board_component__WEBPACK_IMPORTED_MODULE_0__["ControllerBoardComponent"], {
            width: '430px',
            data: { virtualDevice }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
}
InformationDeviceComponent.ɵfac = function InformationDeviceComponent_Factory(t) { return new (t || InformationDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
InformationDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InformationDeviceComponent, selectors: [["app-information-device"]], decls: 5, vars: 1, consts: [[1, "background-device-page"], [1, "container"], [1, "row"], ["class", "col d-flex ", 4, "ngFor", "ngForOf"], [1, "col", "d-flex"], [1, "box"], [4, "ngIf"], [1, "dieukhienBotton"], ["id", "dieukhienBotton", "mat-flat-button", "", 3, "click"], [1, "tag-header"], [1, "tag-content"], ["class", "row d-flex", 4, "ngIf", "ngIfElse"], ["elseStateDevice", ""], [1, "row", "d-flex"], ["elseSwitchType_1", ""], ["elseSwitchType_2", ""], [1, "color-state"], [1, "color-state-box", 3, "ngStyle"], ["elseSleep", ""], ["elseBurning", ""], ["elseParty", ""], ["elseColor", ""]], template: function InformationDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InformationDeviceComponent_div_4_Template, 11, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.devices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["body[_ngcontent-%COMP%]{\n    height: 90vh;\n}\n.background-device-page[_ngcontent-%COMP%] {\n    height: 90vh;\n    background-image: url('background.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: right top;\n    background-attachment: fixed;\n}\n.col[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n.box[_ngcontent-%COMP%] {\n    position: relative;\n    \n    min-width: 230px;\n    width: 100%;\n    \n    max-height: 350px;\n    border-radius: 10px;\n    text-align: center;\n    padding-top: 20px;\n    padding-bottom: 40px;\n    background-color: rgb(255, 255, 255);\n}\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #FF914D;\n    margin: 0px;\n}\n.color-state[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n.color-state-box[_ngcontent-%COMP%]{\n    display: inline-block;\n    bottom: 0px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 10px;\n}\n.tag-content[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.dieukhienBotton[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 100%;\n    bottom: 10px;\n    position: absolute;\n    \n}\n#dieukhienBotton[_ngcontent-%COMP%]{\n    \n    width: 100%;\n\n}\n#dieukhienBotton[_ngcontent-%COMP%]:hover{\n    \n    color:white;\n    background-color: #FF914D;\n    transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLWRldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVDQUFtRTtJQUNuRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXOztBQUVmO0FBQ0E7SUFDSTs7OzBEQUdzRDtJQUN0RCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJpbmZvcm1hdGlvbi1kZXZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuLmJhY2tncm91bmQtZGV2aWNlLXBhZ2Uge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZGV2aWNlLXBhZ2UvYmFja2dyb3VuZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uY29sIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cbiAgICBtaW4td2lkdGg6IDIzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIG1pbi1oZWlnaHQ6IDI1MHB4OyAqL1xuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn0gXG5cbi5ib3ggaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRkY5MTREO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmNvbG9yLXN0YXRle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb2xvci1zdGF0ZS1ib3h7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udGFnLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGlldWtoaWVuQm90dG9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIFxufVxuI2RpZXVraGllbkJvdHRvbntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTRkYTI7ICovXG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbiNkaWV1a2hpZW5Cb3R0b246aG92ZXJ7XG4gICAgLyogYm94LXNoYWRvdzogLTVweCAtNXB4IDRweCAgcmdiYSgxLCAyNTUsIDY0LCAwLjUpLFxuICAgICAgICAgICAgICAgIDEwcHggMTBweCA2cHggIHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAgICAgICAgICAgaW5zZXQgLTVweCAtNXB4IDVweCAgcmdiYSgxLCAyNTUsIDY0LCAwLjUpLFxuICAgICAgICAgICAgICAgIGluc2V0IDFweCAxcHggMXB4ICByZ2JhKDAsIDAsIDAsIDAuMTUpOyAgKi9cbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MTREO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cblxuIl19 */"] });


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
                // console.log(typeof data)
                // console.log(data)
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


class AboutComponent {
    constructor() { }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 235, vars: 0, consts: [[1, "container"], [1, "p-4", "p-md-5", "mb-4", "text-white", "rounded", "bg-light"], [1, "col-md-6", "px-0", "text-success"], [1, "display-4", "fst-italic", "title-standee"], [1, "lead", "my-3", "content-standee"], [1, "row", "mb-2"], [1, "col-md-6"], [1, "row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative", "farm-intro"], [1, "col", "p-4", "d-flex", "flex-column", "position-static"], [1, "d-inline-block", "mb-2", "text-primary"], [1, "mb-0"], [1, "mb-1", "text-muted"], [1, "card-text", "mb-auto"], ["href", "#", 1, "stretched-link"], [1, "col-auto", "d-none", "d-lg-block"], ["src", "../../../assets/about/toi.jpg", "alt", "", "height", "250"], [1, "row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative"], [1, "d-inline-block", "mb-2", "text-success"], ["src", "../../../assets/about/quoc.jpg", "alt", "", "height", "250"], [1, "row", "g-5"], [1, "col-md-8"], [1, "pb-4", "mb-4", "fst-italic", "border-bottom"], [1, "blog-post"], [1, "blog-post-title"], [1, "blog-post-meta", "fst-italic", "text-muted"], ["href", "https://reactnative.dev/"], ["href", "https://angular.io/"], ["href", "https://firebase.google.com/"], [1, "col-md-4"], [1, "position-sticky", 2, "top", "2rem"], [1, "p-4", "mb-3", "bg-light", "rounded"], [1, "fst-italic"], [1, "p-4"], [1, "list-unstyled", "mb-0"], ["href", "#"], [1, "list-unstyled"], [1, "jss02-content-001"], [1, "row"], [1, "col-6"], ["id", "box-001", 1, "footer-box"], [1, "script-contract"], [1, "col"], ["id", "box-002", 1, "footer-box"], ["id", "box-003", 1, "footer-box"], [1, "col-1"], [2, "color", "rgb(87, 235, 74)"], [1, "col-11"], [2, "color", "blanchedalmond"], [2, "color", "rgb(233, 248, 25)"], [1, "col", "d-flex", "justify-content-center"], ["id", "coppyright-warmhouse"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "IoTs - K\u1EBFt n\u1ED1i v\u1EA1n v\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7 tr\u00EAn l\u0129nh v\u1EF1c thi\u1EBFt b\u1ECB d\u00E2n d\u1EE5ng, gi\u1EA3i ph\u00E1p c\u00F4ng ngh\u1EC7 ti\u00EAn ti\u1EBFn \u0111i\u1EC1u khi\u1EC3n thi\u1EBFt b\u1ECB, gi\u00E1m s\u00E1t c\u1EA3m bi\u1EBFn m\u00F4i tr\u01B0\u1EDDng trong gia \u0111\u00ECnh b\u1EA1n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ph\u00E1t tri\u1EC3n \u1EE9ng d\u1EE5ng web ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Nguy\u1EC5n T\u1EA5n T\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chuy\u00EAn ng\u00E0nh K\u1EF9 thu\u1EADt M\u00E1y t\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MSSV: 18521513");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tr\u01B0\u1EDDng \u0111\u1EA1i h\u1ECDc C\u00F4ng ngh\u1EC7 Th\u00F4ng tin, \u0110HQG-HCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tham kh\u1EA3o th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ph\u00E1t tri\u1EC3n \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Nguy\u1EC5n Kim Qu\u1ED1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Chuy\u00EAn ng\u00E0nh K\u1EF9 thu\u1EADt M\u00E1y t\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "MSSV: 18521310");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tr\u01B0\u1EDDng \u0111\u1EA1i h\u1ECDc C\u00F4ng ngh\u1EC7 Th\u00F4ng tin, \u0110HQG-HCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tham kh\u1EA3o th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Warm House ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "article", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Thi\u1EBFt k\u1EBF v\u00E0 l\u1EADp tr\u00ECnh m\u1EA1ch \u0111i\u1EC3n t\u1EED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Th\u00E1ng 01 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cung c\u1EA5p m\u1EABu thi\u1EBFt k\u1EBF v\u00E0 layout c\u00E1c m\u1EA1ch \u0111i\u1EC7n. Thi c\u00F4ng v\u00E0 l\u1EAFp \u0111\u1EB7t c\u00E1c m\u1EA1ch \u0111i\u1EC7n t\u1EED tr\u00EAn n\u1EC1n t\u1EA3ng giao ti\u1EBFp IoT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "M\u1EA1ch \u0111i\u1EC1u khi\u1EC3n \u0111\u00E8n s\u00E1ng tr\u1EAFng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "M\u1EA1ch \u0111i\u1EC1u khi\u1EC3n \u0111\u00E8n m\u00E0u.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "M\u1EA1ch \u0111i\u1EC1u khi\u1EC3n c\u00F4ng t\u1EAFc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "M\u1EA1ch \u0111i\u1EC1u khi\u1EC3n qu\u1EA1t.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "M\u1EA1ch \u0111i\u1EC1u khi\u1EC3n kh\u00F3a c\u1EEDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "M\u1EA1ch \u0111i\u1EC1u khi\u1EC3n m\u00E1y b\u01A1m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "M\u1EA1ch c\u1EA3m bi\u1EBFn gi\u00E1 tr\u1ECB nhi\u1EC7t \u0111\u1ED9, \u0111\u1ED9 \u1EA9m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "L\u1EADp tr\u00ECnh Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Th\u00E1ng 01 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "L\u1EADp tr\u00ECnh Server cung c\u1EA5p c\u00E1c API gi\u00FAp vi\u1EC7c giao ti\u1EBFp gi\u1EEFa c\u00E1c ph\u1EA7n c\u1EE9ng v\u00E0 ph\u1EA7n m\u1EC1m nh\u01B0 \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng, trang web tr\u1EDF n\u00EAn d\u1EC5 d\u00E0ng. \u0110\u1ED3ng th\u1EDDi s\u1EBD l\u01B0u tr\u1EEF c\u00E1c tr\u1EA1ng th\u00E1i c\u1EE7a thi\u1EBFt v\u00E0o c\u01A1 s\u1EDF d\u1EEF li\u1EC7u c\u1EE7a h\u1EC7 th\u1ED1ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "L\u1EADp tr\u00ECnh \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Th\u00E1ng 02 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Ph\u00E1t tri\u1EC3n \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng tr\u00EAn n\u1EC1n t\u1EA3ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "React Native");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "L\u1EADp tr\u00ECnh website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Th\u00E1ng 03 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Ph\u00E1t tri\u1EC3n \u1EE9ng d\u1EE5ng website tr\u00EAn n\u1EC1n t\u1EA3ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "T\u00EDch h\u1EE3p Google Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Th\u00E1ng 04 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "T\u00EDch h\u1EE3p Google Assistant nh\u1EADn d\u1EA1ng gi\u1ECDng n\u00F3i v\u00E0 x\u1EED l\u00FD y\u00EAu c\u1EA7u c\u1EE7a ng\u01B0\u1EDDi d\u00F9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Th\u00F4ng qua Google Assistant ng\u01B0\u1EDDi d\u00F9ng c\u00F3 th\u1EC3 \u0111i\u1EC1u khi\u1EC3n thi\u1EBFt b\u1ECB c\u1EE7a m\u00ECnh th\u00F4ng qua gi\u1ECDng n\u00F3i tr\u00EAn \u0111i\u1EC7n tho\u1EA1i di \u0111\u1ED9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Th\u00E1ng 05 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " - N\u01A1i l\u01B0u tr\u1EEF c\u01A1 s\u1EDF li\u1EC7u v\u00E0 \u0111\u1ED3ng th\u1EDDi l\u00E0 n\u01A1i l\u01B0u tr\u1EEF th\u00F4ng tin ng\u01B0\u1EDDi d\u00F9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Th\u00F4ng tin chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "C\u00F4ng ty Warm House chuy\u00EAn cung c\u1EA5p c\u00E1c s\u1EA3n ph\u1EA9m li\u00EAn quan \u0111\u1EBFn c\u00E1c gi\u1EA3i ph\u00E1p c\u00F4ng ngh\u1EC7 cho cho gia \u0111\u00ECnh b\u1EA1n nh\u01B0 nh\u00E0 th\u00F4ng minh, khu v\u01B0\u1EDDn t\u1EF1 \u0111\u1ED9ng v\u00E0 c\u00E1c d\u1ECBch v\u1EE5 li\u00EAn quan kh\u00E1c. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Th\u00F4ng tin d\u1ECBch v\u1EE5 n\u0103m 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ol", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Th\u00E1ng 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Th\u00E1ng 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Th\u00E1ng 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Th\u00E1ng 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Th\u00E1ng 05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Th\u00E1ng 06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Th\u00E1ng 07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Th\u00E1ng 08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Th\u00E1ng 09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Th\u00E1ng 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Th\u00E1ng 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Th\u00E1ng 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Th\u00F4ng tin li\u00EAn h\u1EC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "ol", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Warm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "H\u00E3y c\u00F9ng \u0111\u1ED9i ng\u0169 Warm House g\u00F3p ph\u1EA7n x\u00E2y d\u1EF1ng n\u00EAn nh\u1EEFng c\u0103n nh\u00E0 m\u01A1 \u01B0\u1EDBc. H\u00E3y \u0111\u1EC3 nh\u1EEFng \u00FD t\u01B0\u1EDFng c\u1EE7a b\u1EA1n bay c\u00F9ng ch\u00FAng t\u00F4i. Warm House - Your House Your Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Ch\u00EDnh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "s\u00E1ch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Khuy\u1EBFn m\u00E3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "L\u1EAFp \u0111\u1EB7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "B\u1EA3o h\u00E0nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\u0110\u1ED5i tr\u1EA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Li\u00EAn h\u1EC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "(+84)39-183-882");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "warmhouse@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Tr\u01B0\u1EDDng \u0110H C\u00F4ng ngh\u1EC7 Th\u00F4ng tin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "B\u1EA3n quy\u1EC1n \u00A92020 T\u1EA5t c\u1EA3 \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 | Trang web n\u00E0y thu\u1ED9c v\u1EC1 WarmHouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".title-standee[_ngcontent-%COMP%] {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content-standee[_ngcontent-%COMP%] {\n    line-height: 2rem;\n}\n\n.jss02-content[_ngcontent-%COMP%] {\n    text-align: center;\n    background-color: rgb(255,255,255);\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n    min-height: 35vh;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n.jss02-content-001[_ngcontent-%COMP%] {\n    min-height: 100px;\n    padding-top: 50px;\n    background-color: #04a133;\n    background-image: linear-gradient(#6c8668, #07961a);\n}\n\n.jss02-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    --bs-gutter-x: 0 !important;   \n}\n\n.jss02-content[_ngcontent-%COMP%]   .farm-information[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: center;\n    background-color: rgba(209, 206, 203, 0.2);\n    min-height: 150px;\n    height: 350px;\n    width: 235px;\n    margin-top: 50px;\n    margin-bottom: 20px;\n    border-radius: 20px;\n    box-shadow: 10px 10px 10px 1px;\n}\n\n.jss02-content[_ngcontent-%COMP%]   .farm-information[_ngcontent-%COMP%]:hover {\n    margin-top: 30px;\n    margin-bottom: 20px;\n    transition: 1s;\n}\n\n.jss02-content[_ngcontent-%COMP%]   .farm-information[_ngcontent-%COMP%]   .farm-information-001[_ngcontent-%COMP%] {\n    height: 70%;\n}\n\n.jss02-content[_ngcontent-%COMP%]   .farm-information[_ngcontent-%COMP%]   .technology-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(54, 49, 54, 0.8);\n}\n\n.footer-box[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 30px ;\n}\n\n#box-001[_ngcontent-%COMP%] {\n    min-width: 100%;\n}\n\n#box-001[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #box-002[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #box-003[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-weight: 400;\n    font-size: 25px;\n    color: aliceblue;\n}\n\n#box-001[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-size: 25px;\n    font-family: Lora, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-weight: 400;\n    color: #ffa000;\n}\n\n#box-001[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: rgb(222, 222, 223);\n}\n\n#box-002[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #box-002[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: rgb(222, 222, 223);\n    text-decoration: none;\n    padding: 2px;\n}\n\n#box-002[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, #box-002[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #afa627;\n}\n\n#box-003[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    font-size: 18px;\n    color: rgb(222, 222, 223);\n}\n\n#coppyright-warmhouse[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-bottom: 20px; \n    font-size: 18px; \n    font-family: Arial, Helvetica, sans-serif;\n    color: #533c13;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0VBQXNFO0lBQ3RFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLDRFQUE0RTtJQUM1RSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGNBQWM7QUFDbEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1zdGFuZGVlIHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50LXN0YW5kZWUge1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uanNzMDItY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICBtaW4taGVpZ2h0OiAzNXZoO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5qc3MwMi1jb250ZW50LTAwMSB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0YTEzMztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzZjODY2OCwgIzA3OTYxYSk7XG59XG5cbi5qc3MwMi1jb250ZW50IC5yb3cge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAtLWJzLWd1dHRlci14OiAwICFpbXBvcnRhbnQ7ICAgXG59XG4uanNzMDItY29udGVudCAuZmFybS1pbmZvcm1hdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA2LCAyMDMsIDAuMik7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMjM1cHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4O1xufVxuLmpzczAyLWNvbnRlbnQgLmZhcm0taW5mb3JtYXRpb246aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLmpzczAyLWNvbnRlbnQgLmZhcm0taW5mb3JtYXRpb24gLmZhcm0taW5mb3JtYXRpb24tMDAxIHtcbiAgICBoZWlnaHQ6IDcwJTtcbn1cblxuLmpzczAyLWNvbnRlbnQgLmZhcm0taW5mb3JtYXRpb24gLnRlY2hub2xvZ3ktdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSg1NCwgNDksIDU0LCAwLjgpO1xufVxuXG4uZm9vdGVyLWJveCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggO1xufVxuXG4jYm94LTAwMSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4jYm94LTAwMSBoMSwgI2JveC0wMDIgaDEsICNib3gtMDAzIGgxIHtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG4jYm94LTAwMSBoMSBzcGFue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogTG9yYSwgSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNmZmEwMDA7XG59XG4jYm94LTAwMSBzcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHJnYigyMjIsIDIyMiwgMjIzKTtcbn1cblxuI2JveC0wMDIgdWwgbGksICAjYm94LTAwMiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogcmdiKDIyMiwgMjIyLCAyMjMpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbiNib3gtMDAyIHVsIGxpOmhvdmVyLCAjYm94LTAwMiB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2FmYTYyNztcbn1cblxuI2JveC0wMDMgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMyk7XG59XG5cbiNjb3BweXJpZ2h0LXdhcm1ob3VzZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzUzM2MxMztcbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function ShareBoardComponent_div_19_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang chia s\u1EBB, vui l\u00F2ng ch\u1EDD \u0111\u1EE3i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110ang thu h\u1ED3i, vui l\u00F2ng ch\u1EDD \u0111\u1EE3i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chia s\u1EBB th\u00E0nh c\u00F4ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chia s\u1EBB th\u1EA5t b\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Thu h\u1ED3i th\u00E0nh c\u00F4ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Thu h\u1ED3i th\u1EA5t b\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ng\u01B0\u1EDDi n\u00E0y \u0111\u00E3 \u0111\u01B0\u1EE3c chia s\u1EBB!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ng\u01B0\u1EDDi n\u00E0y ch\u01B0a \u0111\u01B0\u1EE3c chia s\u1EBB!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ng\u01B0\u1EDDi nh\u1EADn kh\u00F4ng h\u1EE3p l\u1EC7 ho\u1EB7c ch\u01B0a \u0111\u0103ng k\u00FD!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Th\u00F4ng tin nh\u1EADp ch\u01B0a ch\u00EDnh x\u00E1c!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 27);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.notification === "Input-Email");
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.notification === "Invalid-Email")("ngIfElse", _r27);
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.notification === "Not-Shared")("ngIfElse", _r24);
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.notification === "Shared-Personal")("ngIfElse", _r21);
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.notification === "Revoked-Failed")("ngIfElse", _r18);
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.notification === "Revoked-Successful")("ngIfElse", _r15);
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.notification === "Shared-Failed")("ngIfElse", _r12);
} }
function ShareBoardComponent_div_19_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_ng_template_1_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_ng_template_1_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.notification === "Shared-Successful")("ngIfElse", _r9);
} }
function ShareBoardComponent_div_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShareBoardComponent_div_19_ng_template_2_h4_0_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.notification === "Revoking")("ngIfElse", _r6);
} }
function ShareBoardComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShareBoardComponent_div_19_h4_1_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ShareBoardComponent_div_19_ng_template_2_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.notification === "Sharing")("ngIfElse", _r3);
} }
function ShareBoardComponent_div_21_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", index_r31, " ");
} }
function ShareBoardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Danh s\u00E1ch ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c chia s\u1EBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ShareBoardComponent_div_21_li_4_Template, 2, 1, "li", 30);
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
ShareBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShareBoardComponent, selectors: [["app-share-board"]], decls: 27, vars: 6, consts: [["mat-dialog-content", "", 2, "margin-left", "15px", "margin-right", "15px"], [1, "device-name"], [1, "tag-header"], [1, "control-device"], [1, "form-group"], ["action", "", 3, "formGroup"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "email", "formControlName", "emailFormControl", "for", "", "aria-describedby", "emailHelp", "placeholder", "Email", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "taskFormControl"], ["value", "Share-Device"], ["value", "Revoke-Device"], ["class", "notification-share d-flex justify-content-center", 4, "ngIf"], ["class", "list-share", 4, "ngIf"], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "disabled", "click"], [1, "notification-share", "d-flex", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["notifyRevoking", ""], ["notifySharedSuccessful", ""], ["notifySharedFailed", ""], ["notifyRevokedSuccessful", ""], ["notifyRevokedFailed", ""], ["notifySharedPersonal", ""], ["notifyNotShared", ""], ["notifyInvalidEmail", ""], ["notifyInputEmail", ""], [4, "ngIf"], [1, "list-share"], [1, ""], [4, "ngFor", "ngForOf"]], template: function ShareBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Nh\u1EADp email ng\u01B0\u1EDDi b\u1EA1n mu\u1ED1n chia s\u1EBB ho\u1EB7c thu h\u1ED3i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Chia s\u1EBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-radio-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Thu h\u1ED3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ShareBoardComponent_div_19_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ShareBoardComponent_div_21_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShareBoardComponent_Template_button_click_23_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShareBoardComponent_Template_button_click_25_listener() { return ctx.onAcceptClick(ctx.data.virtualDevice.deviceId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0110\u1ED3ng \u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.virtualDevice.ot_nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.virtualDevice.deviceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.shareFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userEmailShare.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.shareFormGroup.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".tag-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgba(230, 70, 230, 0.8);\n  margin: 0px;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-top : 20px; \n  margin-bottom: 20px;\n}\n\n.notification-share[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzaGFyZS1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhZy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWctaGVhZGVyIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2JhKDIzMCwgNzAsIDIzMCwgMC44KTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcCA6IDIwcHg7IFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLXNoYXJlIGg0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


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