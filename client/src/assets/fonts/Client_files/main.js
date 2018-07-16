(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./obd/obd.module": [
		"./src/app/obd/obd.module.ts",
		"obd-obd-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_components_pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/components/pages/base-page/base-page.component */ "./src/app/base/components/pages/base-page/base-page.component.ts");
/* harmony import */ var _base_components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/components/pages/home-page/home-page.component */ "./src/app/base/components/pages/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _base_components_pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"],
        children: [
            {
                path: '',
                component: _base_components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
            },
            {
                path: 'obd',
                loadChildren: './obd/obd.module#ObdModule'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _obd_actions_obd_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obd/actions/obd.actions */ "./src/app/obd/actions/obd.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _obd_actions_obd_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateObdState"]());
        this.store.select(function (state) { return state.obd; })
            .subscribe(function (state) { return console.log(state); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_6__["BaseModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot([])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/base-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/base/base-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/base/base.module.ts":
/*!*************************************!*\
  !*** ./src/app/base/base.module.ts ***!
  \*************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/base/base-routing.module.ts");
/* harmony import */ var _components_pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/base-page/base-page.component */ "./src/app/base/components/pages/base-page/base-page.component.ts");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/home-page/home-page.component */ "./src/app/base/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_elements_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/elements/side-nav/side-nav.component */ "./src/app/base/components/elements/side-nav/side-nav.component.ts");
/* harmony import */ var _components_elements_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/elements/nav-bar/nav-bar.component */ "./src/app/base/components/elements/nav-bar/nav-bar.component.ts");
/* harmony import */ var _pipes_camel_to_title_case_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/camel-to-title-case.pipe */ "./src/app/base/pipes/camel-to-title-case.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _base_routing_module__WEBPACK_IMPORTED_MODULE_7__["BaseRoutingModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]
            ],
            declarations: [
                _components_pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_8__["BasePageComponent"],
                _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _components_elements_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_10__["SideNavComponent"],
                _components_elements_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                _pipes_camel_to_title_case_pipe__WEBPACK_IMPORTED_MODULE_12__["CamelToTitleCasePipe"]
            ],
            exports: [
                _components_pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_8__["BasePageComponent"],
                _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _pipes_camel_to_title_case_pipe__WEBPACK_IMPORTED_MODULE_12__["CamelToTitleCasePipe"]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/base/components/elements/nav-bar/nav-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/base/components/elements/nav-bar/nav-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <button mat-fab color=\"primary\" (click)=\"toggleSidenav()\">Menu</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/base/components/elements/nav-bar/nav-bar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/base/components/elements/nav-bar/nav-bar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/components/elements/nav-bar/nav-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/base/components/elements/nav-bar/nav-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_side_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/side-nav.service */ "./src/app/base/services/side-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(sidenavService) {
        this.sidenavService = sidenavService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.toggleSidenav = function () {
        console.log('hello');
        this.sidenavService.sidenavOpen = this.sidenavService.sidenavStatus === 'open' ? false : true;
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/base/components/elements/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/base/components/elements/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_side_nav_service__WEBPACK_IMPORTED_MODULE_1__["SideNavService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/base/components/elements/side-nav/side-nav.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/base/components/elements/side-nav/side-nav.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"side-nav-container\">\n  <mat-sidenav #sidenav mode=\"side\" [opened]=\"(opened | async)\" class=\"side-nav-drawer\">\n      <button mat-stroked-button color=\"primary\" (click)=\"goToLink(['/'])\" class=\"side-nav-button\">Home</button>\n    <button mat-stroked-button color=\"primary\" (click)=\"goToLink(['/obd'])\" class=\"side-nav-button\">OBD</button>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/base/components/elements/side-nav/side-nav.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/base/components/elements/side-nav/side-nav.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav-drawer {\n  background-color: #908f8f;\n  min-width: 30vw; }\n\n.side-nav-container {\n  height: 100vh; }\n\n.side-nav-button {\n  width: 100%;\n  height: 20%;\n  margin-bottom: 10px; }\n\n.side-nav-button:last-child {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/base/components/elements/side-nav/side-nav.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/base/components/elements/side-nav/side-nav.component.ts ***!
  \*************************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_side_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/side-nav.service */ "./src/app/base/services/side-nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(sidenavService, router) {
        this.sidenavService = sidenavService;
        this.router = router;
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.goToLink = function (link) {
        this.router.navigate(link);
        this.sidenavService.sidenavOpen = false;
    };
    Object.defineProperty(SideNavComponent.prototype, "opened", {
        get: function () {
            return this.sidenavService.sidenavOpen$;
        },
        enumerable: true,
        configurable: true
    });
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/base/components/elements/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/base/components/elements/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_side_nav_service__WEBPACK_IMPORTED_MODULE_1__["SideNavService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/base/components/pages/base-page/base-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/base/components/pages/base-page/base-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-nav>\n    <app-nav-bar></app-nav-bar>\n    <div (click)=\"closeSideNav()\">\n        <router-outlet></router-outlet>\n    </div>\n</app-side-nav>\n"

/***/ }),

/***/ "./src/app/base/components/pages/base-page/base-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/base/components/pages/base-page/base-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/components/pages/base-page/base-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/base/components/pages/base-page/base-page.component.ts ***!
  \************************************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_side_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/side-nav.service */ "./src/app/base/services/side-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(sidenavService) {
        this.sidenavService = sidenavService;
    }
    BasePageComponent.prototype.ngOnInit = function () {
    };
    BasePageComponent.prototype.closeSideNav = function () {
        if (this.sidenavService.sidenavStatus === 'open') {
            this.sidenavService.sidenavOpen = false;
        }
    };
    BasePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/base/components/pages/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.scss */ "./src/app/base/components/pages/base-page/base-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_side_nav_service__WEBPACK_IMPORTED_MODULE_1__["SideNavService"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/base/components/pages/home-page/home-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/base/components/pages/home-page/home-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/base/components/pages/home-page/home-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/base/components/pages/home-page/home-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/components/pages/home-page/home-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/base/components/pages/home-page/home-page.component.ts ***!
  \************************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/base/components/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/base/components/pages/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/base/pipes/camel-to-title-case.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/base/pipes/camel-to-title-case.pipe.ts ***!
  \********************************************************/
/*! exports provided: CamelToTitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToTitleCasePipe", function() { return CamelToTitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelToTitleCasePipe = /** @class */ (function () {
    function CamelToTitleCasePipe() {
    }
    CamelToTitleCasePipe.prototype.transform = function (value) {
        return value
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) { return str.toUpperCase(); });
    };
    CamelToTitleCasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'camelToTitleCase'
        })
    ], CamelToTitleCasePipe);
    return CamelToTitleCasePipe;
}());



/***/ }),

/***/ "./src/app/base/services/side-nav.service.ts":
/*!***************************************************!*\
  !*** ./src/app/base/services/side-nav.service.ts ***!
  \***************************************************/
/*! exports provided: SideNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavService", function() { return SideNavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavService = /** @class */ (function () {
    function SideNavService() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('closed');
    }
    Object.defineProperty(SideNavService.prototype, "sidenavOpen$", {
        get: function () {
            return this.status.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return value === 'open'; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavService.prototype, "sidenavStatus", {
        get: function () {
            return this.status.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavService.prototype, "sidenavOpen", {
        set: function (open) {
            this.status.next(open ? 'open' : 'closed');
        },
        enumerable: true,
        configurable: true
    });
    SideNavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SideNavService);
    return SideNavService;
}());



/***/ }),

/***/ "./src/app/obd/actions/obd.actions.ts":
/*!********************************************!*\
  !*** ./src/app/obd/actions/obd.actions.ts ***!
  \********************************************/
/*! exports provided: UpdateObdState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateObdState", function() { return UpdateObdState; });
var UpdateObdState = /** @class */ (function () {
    function UpdateObdState() {
    }
    UpdateObdState.type = '[OBD] Update OBD State';
    return UpdateObdState;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tabledwler/Development/CarDash/client/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/tabledwler/Development/CarDash/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map