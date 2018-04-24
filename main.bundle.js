webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-clients (selectedClientCard)=\"setSelectedClient($event)\"></app-clients>\r\n<app-detail #details></app-detail>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_detail_component__ = __webpack_require__("./src/app/detail/detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.setSelectedClient = function (client) {
        this.details.clientToShow = client;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__detail_detail_component__["a" /* DetailComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__detail_detail_component__["a" /* DetailComponent */])
    ], AppComponent.prototype, "details", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clients_service__ = __webpack_require__("./src/app/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detail_detail_component__ = __webpack_require__("./src/app/detail/detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__detail_detail_component__["a" /* DetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__clients_service__["a" /* ClientsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsService = /** @class */ (function () {
    function ClientsService(http) {
        this.http = http;
    }
    ClientsService.prototype.getData = function () {
        return this.http.get('/assets/clients.json');
    };
    ClientsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientsService);
    return ClientsService;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  width: 35%;\r\n  height: auto;\r\n  background: #ecebeb;\r\n}\r\n\r\nmat-form-field {\r\n  width: calc(100% - 50px);\r\n  margin: 25px;\r\n}\r\n\r\n.clients {\r\n  overflow: auto;\r\n  height: calc(100vh - 115px);\r\n}\r\n\r\n.client {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  background: #fff;\r\n  padding: 10px;\r\n  margin: 0 25px 10px 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.client:hover {\r\n  background: #DDD;\r\n}\r\n\r\n.client img {\r\n  min-width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  margin-right: 10px;\r\n}\r\n\r\n.name {\r\n  color: #3f51b5;\r\n  font-size: 20px;\r\n}\r\n\r\n.profession {\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"currentFilterCriteria\"/>\n  <button mat-button *ngIf=\"currentFilterCriteria\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"currentFilterCriteria=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n\n<div class=\"clients\">\n  <div class=\"client\" *ngFor=\"let client of getFilteredClients()\" (click)=\"showDetails(client)\" >\n    <img class=\"avatar\" alt=\"photo\" src=\"{{client.general?.avatar}}\">\n\n    <div class=\"text\">\n      <p class=\"name\">{{client.general?.firstName}}</p>\n      <p class=\"profession\">{{client.job?.title}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_service__ = __webpack_require__("./src/app/clients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientsService) {
        this.clientsService = clientsService;
        this.selectedClientCard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.clients = [];
        this.currentFilterCriteria = '';
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientsService.getData().subscribe(function (data) {
            _this.clients = data;
        });
    };
    ClientsComponent.prototype.getFilteredClients = function () {
        var _this = this;
        if (this.currentFilterCriteria.length === 0) {
            return this.clients;
        }
        else {
            return this.clients.filter(function (c) { return c.general.firstName.toLowerCase().includes(_this.currentFilterCriteria.toLowerCase()); });
        }
    };
    ClientsComponent.prototype.showDetails = function (client) {
        this.selectedClientCard.emit(client);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ClientsComponent.prototype, "selectedClientCard", void 0);
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__clients_service__["a" /* ClientsService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  width: 65%;\r\n  height: auto;\r\n  background: #3f51b5;\r\n  padding: 25px;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-top: 35px;\r\n}\r\n\r\n.client {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  background: #fff;\r\n  padding: 15px;\r\n  max-width: 700px;\r\n  margin: 45px auto;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  color: #3f51b5;\r\n}\r\n\r\n.info {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.avatar {\r\n  width: 128px;\r\n  height: 128px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.general {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\nh2 {\r\n  color: #3f51b5;\r\n}\r\n\r\n.job {\r\n  color: #666;\r\n}\r\n\r\n.contact {\r\n  color: #999;\r\n}\r\n\r\n.address {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  color: #666;\r\n}\r\n"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"!clientToShow\">Please select the client from the list on the left</h1>\n\n<div class=\"client\" *ngIf=\"clientToShow\">\n  <button class=\"close\"\n          mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n          (click)=\"this.clientToShow = !this.clientToShow\">\n    <mat-icon>close</mat-icon>\n  </button>\n  <div class=\"info\">\n    <img class=\"avatar\" alt=\"photo\" src=\"{{clientToShow.general?.avatar}}\">\n    <div class=\"general\">\n      <h2>\n        <span>{{clientToShow?.general?.firstName}}</span>\n        <span>{{clientToShow?.general?.lastName}}</span>\n      </h2>\n\n      <div class=\"job\">\n        <p class=\"company\">{{clientToShow?.job?.company}}</p>\n        <p class=\"title\">{{clientToShow?.job?.title}}</p>\n      </div>\n\n      <div class=\"contact\">\n        <p class=\"email\">{{clientToShow?.contact?.email}}</p>\n        <p class=\"phone\">{{clientToShow?.contact?.phone}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"address\">\n    <h3>Address:</h3>\n    <p class=\"street\">{{clientToShow?.address?.street}}</p>\n    <p class=\"city\">{{clientToShow?.address?.city}}</p>\n    <p class=\"zipCode\">{{clientToShow?.address?.zipCode}}</p>\n    <p class=\"country\">{{clientToShow?.address?.country}}</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("./src/app/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map