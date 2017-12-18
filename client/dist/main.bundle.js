webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__new_new_component__["a" /* NewComponent */], pathMatch: 'full' },
    { path: 'logout', redirectTo: '', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_new_component__["a" /* NewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
var Appointment = (function () {
    function Appointment(apptDate, apptTime, complain, patientName) {
        if (apptDate === void 0) { apptDate = null; }
        if (apptTime === void 0) { apptTime = ""; }
        if (complain === void 0) { complain = ""; }
        if (patientName === void 0) { patientName = ""; }
        this.apptDate = apptDate;
        this.apptTime = apptTime;
        this.complain = complain;
        this.patientName = patientName;
    }
    return Appointment;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav>\n      <div class=\"navbar-right\"> \n         <a [routerLink]=\"['/logout']\">Logout</a>\n      </div> \n    </nav>\n    <div class=\"main\">\n      <h3>Doctor's appointments</h3>\n      <div class=\"search\">\n        <input type=\"text\" placeholder=\"search\">\n      </div>\n      <div>\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Time</th>\n                <th>Patient Name</th>\n                <th>Complain</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor = \"let appt of appointments\">\n                <td>{{appt['apptDate'] | date:\"short\"}}</td>\n                <td>{{appt['apptTime']}}</td>\n                <td>{{appt['patientName']}}</td>\n                <td>{{appt['complain']}}</td>\n                <td><button (click)=\"onDelete(appt)\" [hidden]=\"loggedUser != appt['patientName']\" >Delete</button></td>\n              </tr>\n            </tbody>\n          </table>\n          <form (submit)=\"onSubmit()\" method=\"post\">\n              <input type=\"submit\" value=\"Make a New Appointment\">\n          </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.appointments = [];
        this.loggedUser = "";
        this.loggedUser = this._dataService.getLogin();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Logged in user: ", this.loggedUser);
        this._dataService.apptsObservable.subscribe(function (appts) { return _this.appointments = appts; });
        this._dataService.getAllAppointments();
    };
    DashboardComponent.prototype.onSubmit = function () {
        this._router.navigate(['/new']);
    };
    DashboardComponent.prototype.onDelete = function (appt) {
        this._dataService.delete(appt);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.apptsObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this.login = { username: "" };
    }
    DataService.prototype.setLogin = function (name) {
        this.login.username = name;
    };
    DataService.prototype.getLogin = function () {
        return this.login.username;
    };
    DataService.prototype.getAllAppointments = function () {
        var _this = this;
        this._http.get('/appts').subscribe(function (appts) {
            console.log("Got appts from server: ", appts);
            _this.apptsObservable.next(appts);
        }),
            function (error) { return console.log(error); };
    };
    DataService.prototype.create = function (appt) {
        var _this = this;
        console.log("Service adding appointment to the serer: ", appt);
        this._http.post('/appts', appt).subscribe(function (response) { return _this.getAllAppointments(); }, function (errorResponse) { return console.log(errorResponse); });
    };
    DataService.prototype.delete = function (appt) {
        var _this = this;
        console.log("Service deleting appointment ", appt);
        this._http.delete('/appts/' + appt._id).subscribe(function (response) {
            console.log(response);
            _this.getAllAppointments();
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #form=\"ngForm\" (submit)=\"onLogin()\" method=\"post\">\n      <div class=\"form-group\">\n        <label for=\"name\">Your Name</label>\n        <input \n          type=\"text\" \n          name=\"username1\"\n          [(ngModel)]=\"login.username\"\n          #username1=\"ngModel\"\n          required\n          class=\"form-control\"\n        />\n        <small class=\"form-text text-muted error\" *ngIf='!username1.valid'>Name is required.</small>\n      </div>\n      <input type=\"submit\" [disabled] = !form.form.valid value=\"Log In\">\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_router, _dataService) {
        this._router = _router;
        this._dataService = _dataService;
        this.login = { username: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        console.log("login clicked name:", this.login.username);
        this._dataService.setLogin(this.login.username);
        this._router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>New Appointment</h1>\n    <form #form=\"ngForm\" (submit)=\"onSubmit()\" method=\"post\">\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input \n          type=\"date\" \n          #aDate\n          [value]=\"appointment.apptDate | date:'yyyy-MM-dd'\" \n          (input)=\"appointment.apptDate=parseDate($event.target.value)\" \n          required\n          class=\"form-control\"\n        />\n        <small class=\"form-text text-muted error\">{{requiredDate.error}}</small>\n        <small class=\"form-text text-muted error\">{{invalidDate.error}}</small>\n        <small class=\"form-text text-muted error\">{{selectNewDate.error}}</small>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"time\">Time</label>\n          <input \n            type=\"time\" \n            name=\"apptTime\"\n            min=\"08:00:00\" \n            max=\"17:00:00\"\n            [(ngModel)]=\"appointment.apptTime\"\n            #aTime=\"ngModel\"\n            required        \n            class=\"form-control\"\n          />\n          <small class=\"form-text text-muted error\" *ngIf='!aTime.valid'>Time is required.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"complain\">Complain</label>\n          <textarea \n            name=\"complain\" \n            id=\"\" \n            cols=\"30\" \n            rows=\"10\"\n            [(ngModel)]=\"appointment.complain\"\n            #com=\"ngModel\"\n            required\n            class=\"form-control\"\n            ></textarea>\n          <small class=\"form-text text-muted error\" *ngIf='!com.valid'>Complain is required.</small>\n        </div>\n        <input type=\"submit\" [disabled] = !form.form.valid value=\"Add Appointment\">\n       \n    </form>\n   \n    <button (click)=\"onCancel()\">Cancel</button>\n    <div>\n      {{formValid.error}}\n    </div>\n   {{appointment | json }}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment__ = __webpack_require__("../../../../../src/app/appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = (function () {
    function NewComponent(_router, _dataService) {
        this._router = _router;
        this._dataService = _dataService;
        this.appointment = new __WEBPACK_IMPORTED_MODULE_1__appointment__["a" /* Appointment */]();
        this.appointments = [];
        this.invalidDate = { error: "" };
        this.selectNewDate = { error: "" };
        this.requiredDate = { error: "" };
        this.formValid = { error: "" };
        this.timeError = { error: "" };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.onSubmit = function () {
        console.log("Submit clicked");
        //this.validateTime(this.appointment.apptTime);
        if (this.validateDate(this.appointment.apptDate)) {
            this.formValid.error = "There are some errors on the form. Please fix them and try again";
        }
        else {
            this.appointment.patientName = this._dataService.getLogin();
            console.log("Adding new appointment ", this.appointment);
            this._dataService.create(this.appointment);
            this._router.navigate(['/dashboard']);
        }
    };
    NewComponent.prototype.onCancel = function () {
        console.log("Cancel clicked");
        this._router.navigate(['/dashboard']);
    };
    NewComponent.prototype.validateTime = function (apptTime) {
        console.log(apptTime);
        console.log(typeof apptTime);
    };
    NewComponent.prototype.validateDate = function (apptDate) {
        var currentDate = new Date();
        console.log("Current date: ", currentDate);
        console.log("Appt date: ", apptDate);
        console.log(typeof currentDate);
        var err = false;
        if (apptDate == null) {
            console.log("Date is required");
            this.requiredDate.error = "Date is required";
            err = true;
        }
        else {
            this.requiredDate.error = "";
        }
        if (apptDate < currentDate) {
            //console.log("error");
            this.invalidDate.error = "Invalid date. Select current or future date";
            console.log(this.invalidDate.error);
            err = true;
        }
        else {
            this.invalidDate.error = "";
        }
        if (!this.checkNumAppointments(apptDate)) {
            this.selectNewDate.error = "This day is already full. Please select new Date";
            err = true;
        }
        else {
            this.selectNewDate.error = "";
        }
        console.log("Returning ", err);
        return err;
    };
    NewComponent.prototype.checkNumAppointments = function (newDate) {
        var _this = this;
        this._dataService.apptsObservable.subscribe(function (appts) { return _this.appointments = appts; });
        //this._dataService.getAllAppointments();
        var count = 0;
        for (var i = 0; i < this.appointments.length; i++) {
            console.log(this.appointments[i]['apptDate']);
            if (this.appointments[i]['apptDate'] == newDate) {
                console.log("Incrementing count");
                count++;
            }
        }
        console.log("Count: ", count);
        if (count >= 3) {
            return false;
        }
        else {
            return true;
        }
    };
    NewComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        else {
            return null;
        }
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map