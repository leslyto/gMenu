"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
// Header
var header_component_1 = require("./shared/header/header.component");
// Footer
var footer_component_1 = require("./shared/footer/footer.component");
// Home
var home_module_1 = require("./modules/home/home.module");
// Login
var login_module_1 = require("./components/login/login.module");
// Register
var register_component_1 = require("./components/register/register.component");
// Routes
var app_routes_1 = require("./app.routes");
// Auth Guard
var authGuard_component_1 = require("./utils/authGuard.component");
// Additional libs
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, home_module_1.HomeModule, login_module_1.LoginModule, forms_1.FormsModule, app_routes_1.Routing, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, register_component_1.RegisterComponent],
        providers: [authGuard_component_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map