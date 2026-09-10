function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "  <div class=\"container-fluid\">\r\n    <app-nav-bar *ngIf=\"isLoggedIn\"></app-nav-bar>\r\n  \r\n    <div class=\"mt-6\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/forgot/forgot.component.html": (
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/forgot/forgot.component.html ***!
    \****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_auth_forgot_forgotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section>\r\n\r\n    <form\r\n    *ngIf=\"!isSuccessful\"\r\n    name=\"form\"\r\n    (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n    #f=\"ngForm\"\r\n    novalidate\r\n  >\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n              <h1>Envoi demande</h1>\r\n              <p class=\"text-h3\">Mot de passe oublié</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col mt-4\">\r\n              <label for=\"email\">Email</label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                name=\"email\"\r\n                [(ngModel)]=\"form.email\"\r\n                required\r\n                minlength=\"3\"\r\n                maxlength=\"120\"\r\n                #name=\"ngModel\"\r\n              />\r\n              <div class=\"alert-danger\" *ngIf=\"f.submitted\">\r\n                <div *ngIf=\"email.errors.required\">Veuillez saisir l'email</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"row justify-content-start mt-4\">\r\n            <div class=\"col\">\r\n\r\n              <button class=\"btn btn-primary mt-4\">Envoyer</button>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n      Erreur de l'envoie!<br />{{ errorMessage }}\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n    Succès de l'envoie\r\n  </div>\r\n  </section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/historic/historic.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/historic/historic.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_auth_historic_historicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"col-md-12 user-container\">\r\n    <h2 style=\"margin: auto\">Historique de connexion</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n\r\n\r\n            <form class=\"form-inline\">\r\n                <div class=\"form-group mb-2\">\r\n                    <input type=\"date\" id=\"start\" (click)=\"refresh()\" class=\"form-control\"  #start>\r\n                </div>\r\n                <div class=\"form-group mx-sm-3 mb-2\">\r\n                    <input type=\"date\" class=\"form-control\" (click)=\"refresh()\" id=\"end\"  #end>\r\n                </div>\r\n                <button (click)=\"filterDate(start.value, end.value)\" class=\"btn btn-primary\">Filtrer</button>\r\n              </form>\r\n\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">     Nombre de pages:\r\n            <select (change)=\"handlePageSizeChange($event)\">\r\n              <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n                {{ size }}\r\n              </option>\r\n            </select>\r\n\r\n        </div>\r\n    </div>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Nom</th>\r\n        <th>email</th>\r\n        <th>ip</th>\r\n        <th>Pays</th>\r\n        <th>Date</th>\r\n        <th>Heure</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let user of users| paginate : {\r\n        itemsPerPage: pageSize,\r\n        currentPage: page,\r\n        totalItems: count\r\n      }; let i = index\"  [class.active]=\"i == currentIndex\">\r\n        <td>{{i}}</td>\r\n        <td>{{user.name}}</td>\r\n        <td>{{user.email}}</td>\r\n        <td>{{user.ip}}</td>\r\n        <td>{{user.country}}</td>\r\n        <td>{{user.date}}</td>\r\n        <td>{{user.time}}</td>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"col-md-12\">\r\n        <pagination-controls\r\n          previousLabel=\"Prev\"\r\n          nextLabel=\"Next\"\r\n          responsive=\"true\"\r\n          (pageChange)=\"handlePageChange($event)\"\r\n        ></pagination-controls>\r\n      </div>\r\n\r\n\r\n  </div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_auth_login_loginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"load\" class=\"fixed inset-0 flex items-center justify-center bg-white bg-opacity-95 z-50\">\r\n  <div class=\"w-40 h-40 border-4 border-purple-500 border-t-transparent rounded-full animate-spin\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"!load\" class=\"min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-5\">\r\n  <div class=\"w-full max-w-md\">\r\n    <div class=\"bg-white rounded-2xl shadow-2xl p-8\">\r\n      <div class=\"text-center mb-8\">\r\n        <div class=\"mb-5 flex justify-center\">\r\n          <svg width=\"60\" height=\"60\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path d=\"M12 2L2 7L12 12L22 7L12 2Z\" stroke=\"url(#gradient1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <path d=\"M2 17L12 22L22 17\" stroke=\"url(#gradient1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <path d=\"M2 12L12 17L22 12\" stroke=\"url(#gradient1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <defs>\r\n              <linearGradient id=\"gradient1\" x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" gradientUnits=\"userSpaceOnUse\">\r\n                <stop stop-color=\"#667eea\"/>\r\n                <stop offset=\"1\" stop-color=\"#764ba2\"/>\r\n              </linearGradient>\r\n            </defs>\r\n          </svg>\r\n        </div>\r\n        <h1 class=\"text-3xl font-bold text-gray-800 mb-2\">Bienvenue</h1>\r\n        <p class=\"text-gray-600\">Connectez-vous à votre espace</p>\r\n      </div>\r\n\r\n      <form\r\n        *ngIf=\"!isLoggedIn\"\r\n        name=\"form\"\r\n        (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n        #f=\"ngForm\"\r\n        novalidate\r\n        class=\"space-y-6\"\r\n      >\r\n        <div>\r\n          <label for=\"email\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Email</label>\r\n          <div class=\"relative\">\r\n            <svg class=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"/>\r\n              <polyline points=\"22,6 12,13 2,6\"/>\r\n            </svg>\r\n            <input\r\n              type=\"email\"\r\n              class=\"w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all\"\r\n              name=\"email\"\r\n              [(ngModel)]=\"form.email\"\r\n              required\r\n              #email=\"ngModel\"\r\n              placeholder=\"Entrez votre email\"\r\n            />\r\n          </div>\r\n          <div class=\"text-red-500 text-sm mt-1 flex items-center gap-1\" *ngIf=\"f.submitted && email.invalid\">\r\n            <span *ngIf=\"email.errors.required\">Email requis</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label for=\"password\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Mot de passe</label>\r\n          <div class=\"relative\">\r\n            <svg class=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/>\r\n              <path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>\r\n            </svg>\r\n            <input\r\n              type=\"password\"\r\n              class=\"w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all\"\r\n              name=\"password\"\r\n              [(ngModel)]=\"form.password\"\r\n              required\r\n              minlength=\"5\"\r\n              #password=\"ngModel\"\r\n              placeholder=\"Entrez votre mot de passe\"\r\n            />\r\n          </div>\r\n          <div class=\"text-red-500 text-sm mt-1 flex items-center gap-1\" *ngIf=\"f.submitted && password.invalid\">\r\n            <span *ngIf=\"password.errors.required\">Mot de passe requis</span>\r\n            <span *ngIf=\"password.errors.minlength\">Minimum 6 caractères</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"space-y-4 pt-2\">\r\n          <button type=\"submit\" class=\"w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2\">\r\n            <span>Se connecter</span>\r\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M5 12h14M12 5l7 7-7 7\"/>\r\n            </svg>\r\n          </button>\r\n          <a routerLink=\"/forgot\" class=\"block text-center text-indigo-500 hover:text-purple-600 font-medium transition-colors\">\r\n            Mot de passe oublié?\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2\" *ngIf=\"f.submitted && isLoginFailed\">\r\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n            <circle cx=\"12\" cy=\"12\" r=\"10\"/>\r\n            <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/>\r\n            <line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/>\r\n          </svg>\r\n          <span>Erreur de connexion: {{ errorMessage }}</span>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2\" *ngIf=\"isLoggedIn\">\r\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n          <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/>\r\n          <polyline points=\"22 4 12 14.01 9 11.01\"/>\r\n        </svg>\r\n        <span>Connecté en tant que {{ roles }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_auth_register_registerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section *ngIf=\"!load\" class=\"min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-5\">\r\n  <div class=\"w-full max-w-lg\">\r\n    <div class=\"bg-white rounded-2xl shadow-2xl p-8\">\r\n      <div class=\"text-center mb-8\">\r\n        <div class=\"mb-5 flex justify-center\">\r\n          <svg width=\"60\" height=\"60\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\" stroke=\"url(#gradient2)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <circle cx=\"8.5\" cy=\"7\" r=\"4\" stroke=\"url(#gradient2)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\" stroke=\"url(#gradient2)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\" stroke=\"url(#gradient2)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n            <defs>\r\n              <linearGradient id=\"gradient2\" x1=\"0\" y1=\"0\" x2=\"24\" y2=\"21\" gradientUnits=\"userSpaceOnUse\">\r\n                <stop stop-color=\"#667eea\"/>\r\n                <stop offset=\"1\" stop-color=\"#764ba2\"/>\r\n              </linearGradient>\r\n            </defs>\r\n          </svg>\r\n        </div>\r\n        <h1 class=\"text-3xl font-bold text-gray-800 mb-2\">Créer un compte</h1>\r\n        <p class=\"text-gray-600\">Rejoignez-nous en quelques secondes</p>\r\n      </div>\r\n\r\n      <form\r\n        *ngIf=\"!isSuccessful\"\r\n        name=\"form\"\r\n        (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n        #f=\"ngForm\"\r\n        novalidate\r\n        class=\"space-y-6\"\r\n      >\r\n        <div>\r\n          <label for=\"name\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Nom</label>\r\n          <div class=\"relative\">\r\n            <svg class=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"12\" cy=\"7\" r=\"4\"/>\r\n            </svg>\r\n            <input\r\n              type=\"text\"\r\n              class=\"w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50\"\r\n              name=\"name\"\r\n              [(ngModel)]=\"form.name\"\r\n              required\r\n              minlength=\"3\"\r\n              maxlength=\"20\"\r\n              #name=\"ngModel\"\r\n              placeholder=\"Entrez votre nom\"\r\n            />\r\n          </div>\r\n          <div class=\"text-red-500 text-sm mt-1 flex items-center gap-1\" *ngIf=\"f.submitted && name.invalid\">\r\n            <span *ngIf=\"name.errors.required\">Nom requis</span>\r\n            <span *ngIf=\"name.errors.minlength\">Minimum 3 caractères</span>\r\n            <span *ngIf=\"name.errors.maxlength\">Maximum 20 caractères</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label for=\"email\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Email</label>\r\n          <div class=\"relative\">\r\n            <svg class=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"/>\r\n              <polyline points=\"22,6 12,13 2,6\"/>\r\n            </svg>\r\n            <input\r\n              type=\"email\"\r\n              class=\"w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50\"\r\n              name=\"email\"\r\n              [(ngModel)]=\"form.email\"\r\n              required\r\n              email\r\n              #email=\"ngModel\"\r\n              placeholder=\"Entrez votre email\"\r\n            />\r\n          </div>\r\n          <div class=\"text-red-500 text-sm mt-1 flex items-center gap-1\" *ngIf=\"f.submitted && email.invalid\">\r\n            <span *ngIf=\"email.errors.required\">Email requis</span>\r\n            <span *ngIf=\"email.errors.email\">Format email invalide</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label for=\"cabinet_id\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Cabinet</label>\r\n          <div class=\"relative\">\r\n            <svg class=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M3 21h18\"/>\r\n              <path d=\"M5 21V7l8-4 8 4v14\"/>\r\n              <path d=\"M17 21v-8.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5V21\"/>\r\n            </svg>\r\n            <select\r\n              name=\"cabinet_id\"\r\n              [(ngModel)]=\"form.cabinet_id\"\r\n              required\r\n              #cabinet_id=\"ngModel\"\r\n              class=\"w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50 cursor-pointer appearance-none\"\r\n            >\r\n              <option value=\"\" disabled selected>Sélectionnez un cabinet</option>\r\n              <option *ngFor=\"let cab of cabinet\" value=\"{{ cab.id }}\">{{cab.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"text-red-500 text-sm mt-1 flex items-center gap-1\" *ngIf=\"f.submitted && cabinet_id.invalid\">\r\n            <span *ngIf=\"cabinet_id.errors.required\">Cabinet requis</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-4\">\r\n          <div class=\"flex items-center gap-3\">\r\n            <input type=\"checkbox\" class=\"hidden\" name=\"check\" [(ngModel)]=\"form.check\" #check=\"ngModel\" id=\"check\">\r\n            <label class=\"flex items-center gap-3 cursor-pointer text-gray-600\" for=\"check\">\r\n              <span class=\"w-6 h-6 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-all bg-gray-50\" [class.bg-gradient-to-r]=\"form.check\" [class.from-indigo-500]=\"form.check\" [class.to-purple-600]=\"form.check\" [class.border-indigo-500]=\"form.check\">\r\n                <svg *ngIf=\"form.check\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"3\">\r\n                  <polyline points=\"20 6 9 17 4 12\"/>\r\n                </svg>\r\n              </span>\r\n              <span>Compte administrateur</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"space-y-4 pt-2\">\r\n          <button type=\"submit\" class=\"w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2\">\r\n            <span>Créer mon compte</span>\r\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M5 12h14M12 5l7 7-7 7\"/>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n            <circle cx=\"12\" cy=\"12\" r=\"10\"/>\r\n            <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/>\r\n            <line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/>\r\n          </svg>\r\n          <span>Erreur: {{ errorMessage }}</span>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2\" *ngIf=\"isSuccessful\">\r\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n          <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/>\r\n          <polyline points=\"22 4 12 14.01 9 11.01\"/>\r\n        </svg>\r\n        <span>Compte créé avec succès!</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"fixed inset-0 flex items-center justify-center bg-white bg-opacity-95 z-50\" *ngIf=\"load\">\r\n  <div class=\"w-40 h-40 border-4 border-purple-500 border-t-transparent rounded-full animate-spin\"></div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/add-cabinet/add-cabinet.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/add-cabinet/add-cabinet.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_cabinet_addCabinet_addCabinetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"min-h-screen bg-gray-50 py-10\">\r\n    <form\r\n    *ngIf=\"!isSuccessful\"\r\n    name=\"form\"\r\n    (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n    #f=\"ngForm\"\r\n    novalidate\r\n    class=\"max-w-2xl mx-auto\"\r\n  >\r\n    <div class=\"bg-white rounded-2xl shadow-lg p-8\">\r\n      <div class=\"text-center mb-8\">\r\n        <h1 class=\"text-3xl font-bold text-gray-800 mb-2\">Nouveau cabinet</h1>\r\n        <p class=\"text-gray-600\">enregistrement</p>\r\n      </div>\r\n      \r\n      <div class=\"mb-6\">\r\n        <label for=\"name\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Nom</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50\"\r\n          name=\"name\"\r\n          [(ngModel)]=\"form.name\"\r\n          required\r\n          minlength=\"3\"\r\n          maxlength=\"20\"\r\n          #name=\"ngModel\"\r\n          placeholder=\"Entrez le nom du cabinet\"\r\n        />\r\n        <div class=\"text-red-500 text-sm mt-2\" *ngIf=\"f.submitted && name.invalid\">\r\n          <div *ngIf=\"name.errors.required\">Veuillez saisir le nom</div>\r\n          <div *ngIf=\"name.errors.minlength\">\r\n            Le nom doit contenir au moins 3 caractères\r\n          </div>\r\n          <div *ngIf=\"name.errors.maxlength\">\r\n            Ne doit pas dépasser 20 caractères\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex justify-start\">\r\n        <button class=\"px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all\">\r\n          Enregistrer\r\n        </button>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-xl mt-4\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n      ce nom est déjà utilisé<br />{{ errorMessage }}\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-xl max-w-2xl mx-auto\" *ngIf=\"isSuccessful\">\r\n    Succès de l'enregistrement\r\n  </div>\r\n</section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/cabinet.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/cabinet.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_cabinet_cabinetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"p-8 bg-gray-50 rounded-2xl my-5\" *ngIf=\"!load\">\r\n  <h2 class=\"text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-8\">Liste des cabinets</h2>\r\n  <div class=\"flex flex-wrap gap-4 mb-6\">\r\n    <div>\r\n      <button class=\"px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all w-[150px]\" (click)=\"addCabinet()\">Nouvelle cabinet</button>\r\n    </div>\r\n    <div class=\"flex items-center gap-2\">\r\n      <span>Nombre de pages:</span>\r\n      <select (change)=\"handlePageSizeChange($event)\" class=\"px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all cursor-pointer\">\r\n        <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n          {{ size }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"flex-1 min-w-[200px]\">\r\n      <div class=\"flex gap-2\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all\"\r\n          placeholder=\"Rechercher email...\"\r\n          #val\r\n          (click)=\"refresh()\"\r\n        />\r\n        <button\r\n          class=\"px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 transition-all\"\r\n          type=\"button\"\r\n          (click)=\"searchTitle(val.value)\"\r\n        >\r\n          Rechercher\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"bg-white rounded-xl overflow-hidden shadow-sm\">\r\n    <table class=\"w-full\">\r\n      <thead class=\"bg-gradient-to-r from-indigo-500 to-purple-600 text-white\">\r\n        <tr>\r\n          <th class=\"px-6 py-4 font-semibold text-left\"></th>\r\n          <th class=\"px-6 py-4 font-semibold text-left\">Nom</th>\r\n          <th class=\"px-6 py-4 font-semibold text-left\"></th>\r\n          <th class=\"px-6 py-4 font-semibold text-left\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users| paginate : {\r\n          itemsPerPage: pageSize,\r\n          currentPage: page,\r\n          totalItems: count\r\n        }; let i = index\" class=\"border-b border-gray-200 hover:bg-indigo-50 transition-colors\" [class.bg-indigo-100]=\"i == currentIndex\">\r\n          <td class=\"px-6 py-4\">{{i}}</td>\r\n          <td class=\"px-6 py-4\">{{user.name}}</td>\r\n          <td class=\"px-6 py-4\">\r\n            <button class=\"px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all\" (click)=\"deleteUser(user)\">Supprimer</button>\r\n          </td>\r\n          <td class=\"px-6 py-4\">\r\n            <button class=\"px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all ml-5\" (click)=\"editCabinet(user.id)\">Modifier</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"flex justify-center mt-8\">\r\n    <pagination-controls\r\n      previousLabel=\"Prev\"\r\n      nextLabel=\"Next\"\r\n      responsive=\"true\"\r\n      (pageChange)=\"handlePageChange($event)\"\r\n    ></pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"fixed inset-0 flex items-center justify-center bg-white bg-opacity-95 z-50\" *ngIf=\"load\">\r\n  <div class=\"w-40 h-40 border-4 border-purple-500 border-t-transparent rounded-full animate-spin\"></div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.html": (
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.html ***!
    \*******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_cabinet_editCabinet_editCabinetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n\r\n<section *ngIf=\"!load\">\r\n\r\n    <form *ngIf=\"currentData\" class=\"edit-form\"\r\n  >\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n              <h1>Modification utilisateur</h1>\r\n              <p class=\"text-h3\">Modification</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col mt-4\">\r\n              <label for=\"name\">Nom</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"name\"\r\n                [(ngModel)]=\"currentData.name\"\r\n                name=\"name\"\r\n              />\r\n            </div>\r\n          </div>  \r\n          <div class=\"row justify-content-start mt-4\">\r\n            <div class=\"col\">\r\n  \r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateUser()\">\r\n      Update\r\n    </button>\r\n    <p>{{ message }}</p>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  \r\n  </section>\r\n\r\n  <div id=\"preloader\" *ngIf=\"load\">\r\n    <div id=\"loader\"></div>\r\n  </div>\r\n  ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_changePassword_changePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>change-password works!</p>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-user/edit-user/edit-user.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-user/edit-user/edit-user.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_listUser_editUser_editUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<section *ngIf=\"!isSuccessful\" >\r\n\r\n  <form *ngIf=\"currentData\" class=\"edit-form\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n            <h1>Modification utilisateur</h1>\r\n            <p class=\"text-h3\">Modification</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col mt-4\">\r\n            <label for=\"name\">Nom</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"name\"\r\n              [(ngModel)]=\"currentData.name\"\r\n              name=\"name\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center mt-4\">\r\n          <div class=\"col\">\r\n            <label for=\"email\">email</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"email\"\r\n              [(ngModel)]=\"currentData.email\"\r\n              name=\"email\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col mt-4\">\r\n            <label for=\"password\">mot de passe</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n              <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"password\"\r\n              name=\"password\"\r\n              [(ngModel)]=\"currentData.password\"\r\n            />\r\n\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"uuid()\">générer</button>\r\n            </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row justify-content-start mt-4\">\r\n          <div class=\"col\">\r\n\r\n            \r\n  <button class=\"btn btn-warning mr-2\" (click)=\"deleteTutorial()\">\r\n    Delete\r\n  </button>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateUser()\">\r\n    Update\r\n  </button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n</section>\r\n<div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n  {{message}}\r\n</div>\r\n<div id=\"preloader\" *ngIf=\"load\">\r\n  <div id=\"loader\"></div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-user/list-user.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-user/list-user.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_listUser_listUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"list row\">\r\n    <div class=\"col-md-8 mt-3\">\r\n      <div class=\"input-group mb-3\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"Rechercher email...\"\r\n          #val\r\n          (click)=\"refresh()\"\r\n        />\r\n        <div class=\"input-group-append\">\r\n          <button\r\n            class=\"btn btn-outline-secondary\"\r\n            type=\"button\"\r\n            (click)=\"searchTitle(val.value)\"\r\n          >\r\n            Rechercher\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <h4>Liste des utilisateurs</h4>\r\n      <ul class=\"list-group\">\r\n        <li\r\n          class=\"list-group-item\"\r\n          *ngFor=\"let tutorial of tutorials| paginate : {\r\n            itemsPerPage: pageSize,\r\n            currentPage: page,\r\n            totalItems: count\r\n          }; let i = index\"\r\n          [class.active]=\"i == currentIndex\"\r\n          (click)=\"setActiveTutorial(tutorial, i)\"\r\n        >\r\n          {{ tutorial.email }}\r\n        </li>\r\n      </ul>\r\n  \r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div *ngIf=\"currentTutorial\">\r\n        <h4>Description</h4>\r\n        <div>\r\n          <label><strong>Nom:</strong></label> {{ currentTutorial.name }}\r\n        </div>\r\n        <div>\r\n          <label><strong>Email:</strong></label>\r\n          {{ currentTutorial.email }}\r\n        </div>\r\n        <div>\r\n          <label><strong>Status:</strong></label>\r\n          <span *ngIf=\"currentTutorial.roles === '3'\">Admin </span>\r\n          <span *ngIf=\"currentTutorial.roles === '2'\">Utilisateur </span>\r\n          <span *ngIf=\"currentTutorial.roles === '1'\">Super Admin </span>\r\n        </div>\r\n  \r\n        <a class=\"badge badge-warning\" >\r\n          <span  (click)=\"editUser(currentTutorial.id)\" >Modifier</span>\r\n        </a>\r\n      </div>\r\n\r\n    \r\n  \r\n      <div *ngIf=\"!currentTutorial\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 mt-3\">\r\n      <pagination-controls\r\n        previousLabel=\"Prev\"\r\n        nextLabel=\"Next\"\r\n        responsive=\"true\"\r\n        (pageChange)=\"handlePageChange($event)\"\r\n      ></pagination-controls>\r\n    </div>\r\n  </div>\r\n  ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/delete/delete.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/delete/delete.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_modals_delete_deleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"bg-white rounded-2xl shadow-2xl overflow-hidden\">\r\n    <div class=\"px-6 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white\">\r\n      <h4 class=\"m-0 text-xl font-semibold\">{{title || 'Confirm'}}</h4>\r\n    </div>\r\n    <div class=\"p-6 text-center\">\r\n      <p class=\"m-0 text-lg text-gray-700 leading-relaxed\">{{message || 'Are you sure?'}}</p>\r\n    </div>\r\n    <div class=\"px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-center gap-3\">\r\n      <button type=\"button\" class=\"px-5 py-2 border-2 border-red-300 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all min-w-[120px]\" (click)=\"cancel()\">Annuler</button>\r\n      <button type=\"button\" class=\"px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all min-w-[120px]\" (click)=\"confirm()\">Confirmer</button>\r\n    </div>\r\n  </div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-folder/new-folder.component.html": (
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-folder/new-folder.component.html ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_modals_newFolder_newFolderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"bg-white rounded-2xl shadow-2xl overflow-hidden\">\r\n  <div class=\"px-6 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white\">\r\n    <h4 class=\"m-0 text-xl font-semibold\">{{title || 'Nouveau dossier'}}</h4>\r\n  </div>\r\n  <div class=\"p-6\">\r\n    <div class=\"mb-5\">\r\n      <label for=\"folderName\" class=\"block text-sm font-semibold text-gray-700 mb-2\">{{question || 'Nom du dossier'}}</label>\r\n      <input \r\n        type=\"text\" \r\n        id=\"folderName\"\r\n        class=\"w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50\"\r\n        [(ngModel)]=\"message\" \r\n        name=\"name\" \r\n        placeholder=\"Entrez le nom du dossier...\"\r\n        (keyup.enter)=\"apply()\"\r\n        #folderNameInput>\r\n      <small class=\"block mt-2 text-sm text-gray-500\">\r\n        Le nom ne doit pas contenir de caractères spéciaux\r\n      </small>\r\n    </div>\r\n  </div>\r\n  <div class=\"px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3\">\r\n    <button \r\n      type=\"button\" \r\n      class=\"px-4 py-2 border-2 border-red-300 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all\"\r\n      (click)=\"cancel()\">\r\n      Annuler\r\n    </button>\r\n    <button \r\n      type=\"button\" \r\n      class=\"px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed\"\r\n      (click)=\"apply()\"\r\n      [disabled]=\"!isValid()\">\r\n      Créer\r\n    </button>\r\n  </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/rename-folder/rename-folder.component.html": (
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/rename-folder/rename-folder.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_modals_renameFolder_renameFolderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"bg-white rounded-2xl shadow-2xl overflow-hidden\">\r\n    <div class=\"px-6 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white\">\r\n      <h4 class=\"m-0 text-xl font-semibold\">{{title || 'Prompt'}}</h4>\r\n    </div>\r\n    <div class=\"p-6\">\r\n      <label class=\"block text-sm font-semibold text-gray-700 mb-2\">{{question}}</label>\r\n      <input type=\"text\" class=\"w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50\" [(ngModel)]=\"message\" name=\"name\" />\r\n    </div>\r\n    <div class=\"px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3\">\r\n      <button type=\"button\" class=\"px-4 py-2 border-2 border-red-300 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all\" (click)=\"fermer()\">Annuler</button>\r\n      <button type=\"button\" class=\"px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all\" (click)=\"apply()\">Confirmer</button>\r\n    </div>\r\n  </div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/upload-file/upload-file.component.html": (
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/upload-file/upload-file.component.html ***!
    \****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_modals_uploadFile_uploadFileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"bg-white rounded-2xl shadow-2xl overflow-hidden\">\r\n  <div class=\"px-6 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white\">\r\n    <h4 class=\"m-0 text-xl font-semibold\">{{title || 'Ajout d\\'un fichier'}}</h4>\r\n  </div>\r\n  <div class=\"p-6\">\r\n    <div class=\"mb-5\">\r\n      <label for=\"fileInput\" class=\"block text-sm font-semibold text-gray-700 mb-2\">{{question || 'Sélectionnez un fichier'}}</label>\r\n      <input \r\n        type=\"file\" \r\n        id=\"fileInput\"\r\n        class=\"w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50 cursor-pointer hover:border-indigo-400\"\r\n        (change)=\"onFileChange($event)\" \r\n        accept=\".pdf,.doc,.docx,.txt,.jpg,.png,.jpeg\"\r\n        #fileInput>\r\n      <small class=\"block mt-2 text-sm text-gray-500\">\r\n        Formats acceptés: PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB)\r\n      </small>\r\n    </div>\r\n    \r\n    <div class=\"mb-5\">\r\n      <label for=\"messageInput\" class=\"block text-sm font-semibold text-gray-700 mb-2\">Message (optionnel)</label>\r\n      <input \r\n        type=\"text\" \r\n        id=\"messageInput\"\r\n        class=\"w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50\"\r\n        [(ngModel)]=\"message\" \r\n        name=\"message\" \r\n        placeholder=\"Ajouter une description...\">\r\n    </div>\r\n    \r\n    <div class=\"mt-4\" *ngIf=\"files && files.length > 0\">\r\n      <div class=\"bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-xl\">\r\n        <i class=\"fa fa-file mr-2\"></i>\r\n        <strong>Fichier sélectionné:</strong> {{files[0].name}}\r\n        <br>\r\n        <small>Taille: {{formatFileSize(files[0].size)}}</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3\">\r\n    <button \r\n      type=\"button\" \r\n      class=\"px-4 py-2 border-2 border-red-300 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all\"\r\n      (click)=\"close()\">\r\n      Annuler\r\n    </button>\r\n    <button \r\n      type=\"button\" \r\n      class=\"px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed\"\r\n      (click)=\"apply()\"\r\n      [disabled]=\"!isValid()\">\r\n      Confirmer\r\n    </button>\r\n  </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_navBar_navBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<nav class=\"bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg sticky top-0 z-50\">\r\n  <div class=\"max-w-7xl mx-auto px-5 h-16 flex items-center justify-between\">\r\n    <div class=\"flex items-center gap-3\">\r\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M12 2L2 7L12 12L22 7L12 2Z\" stroke=\"url(#navGradient)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n        <path d=\"M2 17L12 22L22 17\" stroke=\"url(#navGradient)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n        <path d=\"M2 12L12 17L22 12\" stroke=\"url(#navGradient)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n        <defs>\r\n          <linearGradient id=\"navGradient\" x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop stop-color=\"#667eea\"/>\r\n            <stop offset=\"1\" stop-color=\"#764ba2\"/>\r\n          </linearGradient>\r\n        </defs>\r\n      </svg>\r\n      <span class=\"text-xl font-bold text-white\">TreeApp</span>\r\n    </div>\r\n\r\n    <button class=\"lg:hidden flex flex-col gap-1.5 bg-white/10 p-2 rounded-lg border-none cursor-pointer\" (click)=\"toggleMenu()\">\r\n      <span class=\"w-6 h-0.5 bg-white rounded transition-transform\" [class.rotate-45]=\"isMenuOpen\"></span>\r\n      <span class=\"w-6 h-0.5 bg-white rounded transition-opacity\" [class.opacity-0]=\"isMenuOpen\"></span>\r\n      <span class=\"w-6 h-0.5 bg-white rounded transition-transform\" [class.-rotate-45]=\"isMenuOpen\"></span>\r\n    </button>\r\n\r\n    <div class=\"hidden lg:flex items-center justify-between flex-1 ml-8\">\r\n      <ul class=\"flex items-center gap-2\">\r\n        <li *ngIf=\"superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-all\" routerLink=\"cabinet\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M3 21h18\"/>\r\n              <path d=\"M5 21V7l8-4 8 4v14\"/>\r\n              <path d=\"M17 21v-8.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5V21\"/>\r\n            </svg>\r\n            <span>Cabinet</span>\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-all\" routerLink=\"register\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"8.5\" cy=\"7\" r=\"4\"/>\r\n              <line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"/>\r\n              <line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"/>\r\n            </svg>\r\n            <span>Inscription</span>\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"isAdmin || superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-all\" routerLink=\"historic\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"10\"/>\r\n              <polyline points=\"12 6 12 12 16 14\"/>\r\n            </svg>\r\n            <span>Historique</span>\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-all\" routerLink=\"list-user\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"9\" cy=\"7\" r=\"4\"/>\r\n              <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/>\r\n              <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>\r\n            </svg>\r\n            <span>Utilisateurs</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"flex items-center gap-2 px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-all\" routerLink=\"explorer\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/>\r\n            </svg>\r\n            <span>Fichiers</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"flex items-center gap-4\">\r\n        <div class=\"flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all\">\r\n          <div class=\"w-9 h-9 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"12\" cy=\"7\" r=\"4\"/>\r\n            </svg>\r\n          </div>\r\n          <a class=\"text-white font-semibold hover:text-white/90 transition-colors\" routerLink=\"profile\">{{ username }}</a>\r\n        </div>\r\n        <button class=\"flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/25 transition-all\" (click)=\"logout()\">\r\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n            <path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>\r\n            <polyline points=\"16 17 21 12 16 7\"/>\r\n            <line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/>\r\n          </svg>\r\n          <span>Déconnexion</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Mobile menu -->\r\n  <div class=\"lg:hidden bg-gradient-to-r from-indigo-500 to-purple-600 border-t border-white/20\" [class.hidden]=\"!isMenuOpen\">\r\n    <div class=\"px-5 py-4 space-y-4\">\r\n      <ul class=\"space-y-2\">\r\n        <li *ngIf=\"superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all w-full\" routerLink=\"cabinet\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M3 21h18\"/>\r\n              <path d=\"M5 21V7l8-4 8 4v14\"/>\r\n              <path d=\"M17 21v-8.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5V21\"/>\r\n            </svg>\r\n            <span>Cabinet</span>\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all w-full\" routerLink=\"register\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"8.5\" cy=\"7\" r=\"4\"/>\r\n              <line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"/>\r\n              <line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"/>\r\n            </svg>\r\n            <span>Inscription</span>\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"isAdmin || superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all w-full\" routerLink=\"historic\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"10\"/>\r\n              <polyline points=\"12 6 12 12 16 14\"/>\r\n            </svg>\r\n            <span>Historique</span>\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"superAdmin\">\r\n          <a class=\"flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all w-full\" routerLink=\"list-user\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"9\" cy=\"7\" r=\"4\"/>\r\n              <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/>\r\n              <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>\r\n            </svg>\r\n            <span>Utilisateurs</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all w-full\" routerLink=\"explorer\" routerLinkActive=\"bg-white/20\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/>\r\n            </svg>\r\n            <span>Fichiers</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"pt-4 border-t border-white/20 space-y-3\">\r\n        <div class=\"flex items-center justify-center gap-3 px-4 py-2 bg-white/10 rounded-xl\">\r\n          <div class=\"w-9 h-9 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n              <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/>\r\n              <circle cx=\"12\" cy=\"7\" r=\"4\"/>\r\n            </svg>\r\n          </div>\r\n          <a class=\"text-white font-semibold\" routerLink=\"profile\">{{ username }}</a>\r\n        </div>\r\n        <button class=\"w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/15 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/25 transition-all\" (click)=\"logout()\">\r\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n            <path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>\r\n            <polyline points=\"16 17 21 12 16 7\"/>\r\n            <line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/>\r\n          </svg>\r\n          <span>Déconnexion</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_profile_profileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"max-w-3xl mx-auto my-10 px-5\" *ngIf=\"currentUser; else loggedOut\">\r\n    <header class=\"bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl mb-8 shadow-lg\">\r\n      <div class=\"flex items-center gap-5\">\r\n        <div class=\"w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-[3px] border-white/30\">\r\n          <svg width=\"60\" height=\"60\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n            <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/>\r\n            <circle cx=\"12\" cy=\"7\" r=\"4\"/>\r\n          </svg>\r\n        </div>\r\n        <h3 class=\"m-0 text-2xl font-bold\">\r\n          <strong>{{ currentUser.name }}</strong> Profile\r\n        </h3>\r\n      </div>\r\n    </header>\r\n    <div class=\"flex flex-col gap-4\">\r\n      <p class=\"text-lg text-gray-700 p-5 bg-white rounded-xl shadow-sm flex items-center gap-3\">\r\n        <strong class=\"text-indigo-500 font-semibold min-w-[80px]\">Email:</strong>\r\n        {{ currentUser.email }}\r\n      </p>\r\n      <p class=\"text-lg text-gray-700 p-5 bg-white rounded-xl shadow-sm flex items-center gap-3\">\r\n        <strong class=\"text-indigo-500 font-semibold min-w-[80px]\">Roles:</strong>\r\n        {{ currentUser.roles }}\r\n      </p>\r\n    </div>\r\n  </div>\r\n  \r\n  <ng-template #loggedOut>\r\n    <div class=\"text-center py-16 text-gray-500\">\r\n      <svg width=\"80\" height=\"80\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"mx-auto mb-5 text-indigo-400\">\r\n        <circle cx=\"12\" cy=\"12\" r=\"10\"/>\r\n        <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/>\r\n        <line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/>\r\n      </svg>\r\n      <p class=\"text-xl\">Please login.</p>\r\n    </div>\r\n  </ng-template>\r\n  ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/treeview/treeview.component.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/treeview/treeview.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_treeview_treeviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"!isLoading\">\r\n  <form class=\"flex flex-wrap gap-3 mb-4\">\r\n    <div class=\"flex-1 min-w-[200px]\">\r\n      <label for=\"search\" class=\"sr-only\">Recherche</label>\r\n      <input \r\n        type=\"text\" \r\n        class=\"w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all\"\r\n        #searchInput \r\n        id=\"search\" \r\n        placeholder=\"Rechercher...\"\r\n        (keyup.enter)=\"searchItems(searchInput.value)\">\r\n    </div>\r\n    <button \r\n      type=\"button\" \r\n      class=\"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all\"\r\n      (click)=\"searchItems(searchInput.value)\">\r\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n        <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\r\n        <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>\r\n      </svg>\r\n      Chercher\r\n    </button>\r\n    <button \r\n      type=\"button\" \r\n      class=\"flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 transition-all\"\r\n      (click)=\"resetSearch()\">\r\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\r\n        <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\r\n      </svg>\r\n      Annuler\r\n    </button>\r\n    <div class=\"flex gap-2 ml-auto\">\r\n      <button \r\n        (click)=\"collapseAll()\" \r\n        class=\"flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 transition-all\">\r\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n          <polyline points=\"18 15 12 9 6 15\"></polyline>\r\n        </svg>\r\n        Tout fermer\r\n      </button>\r\n      <button \r\n        (click)=\"expandAll()\" \r\n        class=\"flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 transition-all\">\r\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n          <polyline points=\"6 9 12 15 18 9\"></polyline>\r\n        </svg>\r\n        Tout ouvrir\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n  <!-- Contenu principal -->\r\n  <div class=\"grid grid-cols-1 lg:grid-cols-3 gap-6\">\r\n    <!-- Arborescence -->\r\n    <div class=\"lg:col-span-2\">\r\n      <ul class=\"list-none pl-0 m-0\">\r\n        <ng-template #folderTree let-parentId>\r\n          <li *ngFor=\"let item of getItemsByParent(parentId)\" \r\n              [ngClass]=\"{'bg-yellow-50 border-l-4 border-yellow-400': foundItems.includes(item)}\">\r\n            \r\n            <!-- Item header -->\r\n            <span class=\"group flex items-center p-3 rounded-lg hover:bg-indigo-50 transition-all\">\r\n              <!-- Expand/Collapse button -->\r\n              <span \r\n                class=\"flex items-center justify-center w-6 h-6 mr-2 cursor-pointer transition-transform bg-indigo-100 text-indigo-500 rounded\"\r\n                (click)=\"toggleFolder(item)\" \r\n                [ngClass]=\"{'rotate-90': openedFolders.has(item.id)}\">\r\n                <ng-container *ngIf=\"hasChildren(item.id)\">▶</ng-container>\r\n              </span>\r\n              \r\n              <!-- Item icon and name -->\r\n              <span \r\n                (click)=\"toggleFolder(item)\" \r\n                class=\"flex-1 flex items-center cursor-pointer font-medium text-gray-700 hover:text-indigo-500 transition-colors\">\r\n                <i class=\"fa fa-folder mr-2 text-yellow-500\" *ngIf=\"item.isFolder\"></i>\r\n                <i class=\"fa fa-file-pdf-o mr-2 text-red-500\" *ngIf=\"!item.isFolder && getFileType(item.path) === 'pdf'\"></i>\r\n                <i class=\"fa fa-file-image-o mr-2 text-green-500\" *ngIf=\"!item.isFolder && getFileType(item.path) === 'image'\"></i>\r\n                <i class=\"fa fa-file-o mr-2 text-gray-500\" *ngIf=\"!item.isFolder && getFileType(item.path) === 'other'\"></i>\r\n                {{item.title}}\r\n              </span>\r\n              \r\n              <!-- Actions folders -->\r\n              <span class=\"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity\" *ngIf=\"item.isFolder\">\r\n                <button \r\n                  (click)=\"showCreateFolderModal(item.id)\" \r\n                  class=\"p-1 text-indigo-500 hover:text-indigo-700 transition-colors\"\r\n                  title=\"Nouveau dossier\">\r\n                  <i class=\"fa fa-plus-circle\"></i>\r\n                </button>\r\n                <button \r\n                  (click)=\"showUploadFileModal(item.id)\" \r\n                  class=\"p-1 text-green-500 hover:text-green-700 transition-colors\"\r\n                  title=\"Uploader un fichier\">\r\n                  <i class=\"fa fa-upload\"></i>\r\n                </button>\r\n                <button \r\n                  *ngIf=\"item.parent && item.parent !== 0\"\r\n                  (click)=\"renameItem(item)\" \r\n                  class=\"p-1 text-yellow-500 hover:text-yellow-700 transition-colors\"\r\n                  title=\"Renommer\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n                <button \r\n                  *ngIf=\"item.parent && item.parent !== 0\"\r\n                  (click)=\"deleteItem(item)\" \r\n                  class=\"p-1 text-red-500 hover:text-red-700 transition-colors\"\r\n                  title=\"Supprimer\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </span>\r\n              \r\n              <!-- Actions files type -->\r\n              <span class=\"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity\" *ngIf=\"!item.isFolder\">\r\n                <button \r\n                  (click)=\"downloadFile(item)\" \r\n                  class=\"p-1 text-indigo-500 hover:text-indigo-700 transition-colors\"\r\n                  title=\"Télécharger\">\r\n                  <i class=\"fa fa-arrow-circle-down\"></i>\r\n                </button>\r\n                <button \r\n                  (click)=\"renameItem(item)\" \r\n                  class=\"p-1 text-yellow-500 hover:text-yellow-700 transition-colors\"\r\n                  title=\"Renommer\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n                <button \r\n                  (click)=\"deleteItem(item)\" \r\n                  class=\"p-1 text-red-500 hover:text-red-700 transition-colors\"\r\n                  title=\"Supprimer\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </span>\r\n            </span>\r\n            \r\n            <!-- child (recursive) -->\r\n            <ng-container *ngIf=\"openedFolders.has(item.id)\">\r\n              <ul class=\"list-none pl-6 m-2 border-l-2 border-gray-200\">\r\n                <ng-container *ngTemplateOutlet=\"folderTree; context: {$implicit: item.id}\"></ng-container>\r\n              </ul>\r\n            </ng-container>\r\n          </li>\r\n        </ng-template>\r\n        \r\n        <ng-container *ngTemplateOutlet=\"folderTree; context: {$implicit: 0}\"></ng-container>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"lg:col-span-1\">\r\n      <div class=\"border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm\" *ngIf=\"pdfView\">\r\n        <div class=\"flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50\">\r\n          <h5 class=\"m-0 text-lg font-semibold text-gray-800\"><i class=\"fa fa-file-pdf mr-2 text-red-500\"></i>Visualiseur PDF</h5>\r\n          <button \r\n            class=\"flex items-center gap-1 px-3 py-1 border-2 border-red-300 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition-all\"\r\n            (click)=\"closeViewer()\">\r\n            <i class=\"fa fa-times\"></i>Fermer\r\n          </button>\r\n        </div>\r\n        \r\n        <div class=\"h-[500px] overflow-auto p-2 bg-gray-100\">\r\n          <pdf-viewer \r\n            class=\"viewer bg-white p-5 rounded-lg\" \r\n            *ngIf=\"pdfSrc\"\r\n            [src]=\"pdfSrc\"\r\n            [show-all]=\"false\"\r\n            [(page)]=\"pageVariable\"\r\n            [render-text]=\"true\"\r\n            [original-size]=\"false\">\r\n          </pdf-viewer>\r\n        </div>\r\n        \r\n        <div class=\"flex justify-center items-center gap-4 p-4 border-t border-gray-200 bg-gray-50\" *ngIf=\"pdfSrc\">\r\n          <button \r\n            (click)=\"prevPage()\" \r\n            class=\"px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all\" \r\n            [disabled]=\"pageVariable <= 1\">\r\n            <i class=\"fa fa-chevron-left mr-1\"></i>Précédent\r\n          </button>\r\n          <span class=\"font-semibold text-indigo-500 min-w-[80px] text-center\">Page {{pageVariable}}</span>\r\n          <button \r\n            (click)=\"nextPage()\" \r\n            class=\"px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition-all\">\r\n            Suivant<i class=\"fa fa-chevron-right ml-1\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm\" *ngIf=\"imageView\">\r\n        <div class=\"flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50\">\r\n          <h5 class=\"m-0 text-lg font-semibold text-gray-800\"><i class=\"fa fa-image mr-2 text-green-500\"></i>Visualiseur Image</h5>\r\n          <button \r\n            class=\"flex items-center gap-1 px-3 py-1 border-2 border-red-300 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition-all\"\r\n            (click)=\"closeViewer()\">\r\n            <i class=\"fa fa-times\"></i>Fermer\r\n          </button>\r\n        </div>\r\n        \r\n        <div class=\"flex-1 overflow-auto p-5 flex justify-center items-center bg-gray-100 min-h-[500px]\">\r\n          <img \r\n            *ngIf=\"imageSrc\"\r\n            [src]=\"imageSrc\" \r\n            alt=\"Visualisation de l'image\"\r\n            class=\"max-w-full max-h-[400px] object-contain rounded-xl shadow-lg\">\r\n        </div>\r\n        \r\n        <div class=\"flex justify-center p-4 border-t border-gray-200 bg-gray-50\" *ngIf=\"imageSrc\">\r\n          <button \r\n            (click)=\"downloadFile(currentFile)\" \r\n            class=\"px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition-all\">\r\n            <i class=\"fa fa-download mr-1\"></i>Télécharger\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"p-10 text-center text-gray-500\" *ngIf=\"!pdfView && !imageView\">\r\n        <i class=\"fa fa-file-alt fa-4x text-indigo-300 mb-4\"></i>\r\n        <p class=\"text-lg\">Sélectionnez un fichier PDF ou image pour le visualiser</p>\r\n        <small class=\"text-gray-400\">Types supportés: PDF, JPG, PNG, GIF, BMP, WEBP</small>\r\n      </div>\r\n      \r\n      <div class=\"p-10 text-center border border-gray-200 rounded-xl bg-yellow-50\" *ngIf=\"currentFileType === 'other' && (pdfView || imageView)\">\r\n        <i class=\"fa fa-file-excel fa-4x text-yellow-500 mb-4\"></i>\r\n        <h5 class=\"mt-3 text-yellow-800\">Fichier non supporté pour la visualisation</h5>\r\n        <p class=\"text-gray-600\">Ce type de fichier ne peut pas être visualisé directement.</p>\r\n        <button \r\n          class=\"mt-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition-all\" \r\n          (click)=\"downloadFile(currentFile)\">\r\n          <i class=\"fa fa-download mr-1\"></i>Télécharger le fichier\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Loader -->\r\n<div class=\"fixed inset-0 flex items-center justify-center bg-white bg-opacity-95 z-50\" *ngIf=\"isLoading\">\r\n  <div class=\"w-40 h-40 border-4 border-purple-500 border-t-transparent rounded-full animate-spin\"></div>\r\n</div>\r\n\r\n<div class=\"p-10 text-center text-gray-500\" *ngIf=\"!isLoading && folders.length === 0\">\r\n  <i class=\"fa fa-folder-open fa-4x text-indigo-300 mb-4\"></i>\r\n  <h4 class=\"mt-3 text-xl font-semibold text-gray-700\">Aucun dossier trouvé</h4>\r\n  <p class=\"text-gray-500\">Commencez par créer un nouveau dossier</p>\r\n  <button \r\n    class=\"mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all\" \r\n    (click)=\"showCreateFolderModal(0)\">\r\n    <i class=\"fa fa-plus mr-2\"></i>\r\n    Créer un dossier\r\n  </button>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_auth_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/forgot/forgot.component */"./src/app/components/auth/forgot/forgot.component.ts");
    /* harmony import */
    var _components_auth_historic_historic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/historic/historic.component */"./src/app/components/auth/historic/historic.component.ts");
    /* harmony import */
    var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/login/login.component */"./src/app/components/auth/login/login.component.ts");
    /* harmony import */
    var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/register/register.component */"./src/app/components/auth/register/register.component.ts");
    /* harmony import */
    var _components_cabinet_add_cabinet_add_cabinet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cabinet/add-cabinet/add-cabinet.component */"./src/app/components/cabinet/add-cabinet/add-cabinet.component.ts");
    /* harmony import */
    var _components_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cabinet/cabinet.component */"./src/app/components/cabinet/cabinet.component.ts");
    /* harmony import */
    var _components_cabinet_edit_cabinet_edit_cabinet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cabinet/edit-cabinet/edit-cabinet.component */"./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.ts");
    /* harmony import */
    var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-password/change-password.component */"./src/app/components/change-password/change-password.component.ts");
    /* harmony import */
    var _components_list_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/list-user/edit-user/edit-user.component */"./src/app/components/list-user/edit-user/edit-user.component.ts");
    /* harmony import */
    var _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list-user/list-user.component */"./src/app/components/list-user/list-user.component.ts");
    /* harmony import */
    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */"./src/app/components/profile/profile.component.ts");
    /* harmony import */
    var _components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/treeview/treeview.component */"./src/app/components/treeview/treeview.component.ts");
    /* harmony import */
    var _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/admin-guard */"./src/app/helpers/admin-guard.ts");
    /* harmony import */
    var _helpers_login_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/login-guard */"./src/app/helpers/login-guard.ts");
    /* harmony import */
    var _helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/normal-guard */"./src/app/helpers/normal-guard.ts");
    /* harmony import */
    var _helpers_simple_admin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/simple-admin */"./src/app/helpers/simple-admin.ts");
    var routes = [{
      path: 'explorer',
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"]],
      //loadChildren: () => import('./file-explorer/file-explorer.module').then(mod => mod.FileExplorerModule)
      component: _components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_14__["TreeviewComponent"]
    }, {
      path: 'login',
      component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
      canActivate: [_helpers_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]]
    }, {
      path: 'register',
      component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: 'forgot',
      component: _components_auth_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]
    }, {
      path: 'change-password',
      component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: 'list-user',
      component: _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_12__["ListUserComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: 'historic',
      component: _components_auth_historic_historic_component__WEBPACK_IMPORTED_MODULE_4__["HistoricComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_simple_admin__WEBPACK_IMPORTED_MODULE_18__["SimpleAdmin"]]
    }, {
      path: 'edit-user/:id',
      component: _components_list_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: 'profile',
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"]]
    }, {
      path: 'cabinet',
      component: _components_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_8__["CabinetComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: 'new-cabinet',
      component: _components_cabinet_add_cabinet_add_cabinet_component__WEBPACK_IMPORTED_MODULE_7__["AddCabinetComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: 'edit-cabinet/:id',
      component: _components_cabinet_edit_cabinet_edit_cabinet_component__WEBPACK_IMPORTED_MODULE_9__["EditCabinetComponent"],
      canActivate: [_helpers_normal_guard__WEBPACK_IMPORTED_MODULE_17__["NormalGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/token-storage.service */"./src/app/services/token-storage.service.ts");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */"./src/app/services/user.service.ts");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(tokenStorageService, authService, userService) {
        _classCallCheck(this, AppComponent);
        this.tokenStorageService = tokenStorageService;
        this.authService = authService;
        this.userService = userService;
        this.isLoggedIn = false;
      }
      return _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.isLoggedIn = !!this.tokenStorageService.getToken();
          this.authService.getLoggedIn().subscribe(function (value) {
            if (value != null) {
              _this.isLoggedIn = value;
            }
          });
        }
      }]);
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _helpers_feature_flags_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/feature-flags.directive */"./src/app/helpers/feature-flags.directive.ts");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var _components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/treeview/treeview.component */"./src/app/components/treeview/treeview.component.ts");
    /* harmony import */
    var _services_folder_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/folder.service */"./src/app/services/folder.service.ts");
    /* harmony import */
    var _services_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/file.service */"./src/app/services/file.service.ts");
    /* harmony import */
    var _components_modals_new_folder_new_folder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modals/new-folder/new-folder.component */"./src/app/components/modals/new-folder/new-folder.component.ts");
    /* harmony import */
    var _components_modals_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modals/upload-file/upload-file.component */"./src/app/components/modals/upload-file/upload-file.component.ts");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */
    var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth/login/login.component */"./src/app/components/auth/login/login.component.ts");
    /* harmony import */
    var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/auth/register/register.component */"./src/app/components/auth/register/register.component.ts");
    /* harmony import */
    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profile/profile.component */"./src/app/components/profile/profile.component.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/auth.interceptor */"./src/app/helpers/auth.interceptor.ts");
    /* harmony import */
    var _components_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cabinet/cabinet.component */"./src/app/components/cabinet/cabinet.component.ts");
    /* harmony import */
    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */"./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */
    var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-doc-viewer */"./node_modules/ngx-doc-viewer/fesm2015/ngx-doc-viewer.js");
    /* harmony import */
    var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-pdf-viewer */"./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.js");
    /* harmony import */
    var _components_modals_rename_folder_rename_folder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modals/rename-folder/rename-folder.component */"./src/app/components/modals/rename-folder/rename-folder.component.ts");
    /* harmony import */
    var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/change-password/change-password.component */"./src/app/components/change-password/change-password.component.ts");
    /* harmony import */
    var _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/list-user/list-user.component */"./src/app/components/list-user/list-user.component.ts");
    /* harmony import */
    var _components_list_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/list-user/edit-user/edit-user.component */"./src/app/components/list-user/edit-user/edit-user.component.ts");
    /* harmony import */
    var _components_auth_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/auth/forgot/forgot.component */"./src/app/components/auth/forgot/forgot.component.ts");
    /* harmony import */
    var _components_cabinet_add_cabinet_add_cabinet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cabinet/add-cabinet/add-cabinet.component */"./src/app/components/cabinet/add-cabinet/add-cabinet.component.ts");
    /* harmony import */
    var _components_cabinet_edit_cabinet_edit_cabinet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/cabinet/edit-cabinet/edit-cabinet.component */"./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.ts");
    /* harmony import */
    var _components_auth_historic_historic_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/auth/historic/historic.component */"./src/app/components/auth/historic/historic.component.ts");
    /* harmony import */
    var ngx_pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-pagination */"./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */
    var _components_modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/modals/delete/delete.component */"./src/app/components/modals/delete/delete.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_8__["TreeviewComponent"], _helpers_feature_flags_directive__WEBPACK_IMPORTED_MODULE_6__["FeatureFlagsDirective"], _components_modals_new_folder_new_folder_component__WEBPACK_IMPORTED_MODULE_11__["NewFolderComponent"], _components_modals_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__["UploadFileComponent"], _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], _components_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_19__["CabinetComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_20__["NavBarComponent"], _components_modals_rename_folder_rename_folder_component__WEBPACK_IMPORTED_MODULE_23__["RenameFolderComponent"], _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_25__["ListUserComponent"], _components_list_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_26__["EditUserComponent"], _components_auth_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_27__["ForgotComponent"], _components_cabinet_add_cabinet_add_cabinet_component__WEBPACK_IMPORTED_MODULE_28__["AddCabinetComponent"], _components_cabinet_edit_cabinet_edit_cabinet_component__WEBPACK_IMPORTED_MODULE_29__["EditCabinetComponent"], _components_auth_historic_historic_component__WEBPACK_IMPORTED_MODULE_30__["HistoricComponent"], _components_modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_32__["DeleteComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__["PdfViewerModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_13__["SimpleModalModule"].forRoot({
        container: "modal-container"
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_21__["NgxDocViewerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_31__["NgxPaginationModule"]],
      entryComponents: [_components_modals_new_folder_new_folder_component__WEBPACK_IMPORTED_MODULE_11__["NewFolderComponent"], _components_modals_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__["UploadFileComponent"], _components_modals_rename_folder_rename_folder_component__WEBPACK_IMPORTED_MODULE_23__["RenameFolderComponent"], _components_modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_32__["DeleteComponent"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_folder_service__WEBPACK_IMPORTED_MODULE_9__["FolderService"], _services_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"], _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["authInterceptorProviders"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/components/auth/forgot/forgot.component.ts": (
  /*!************************************************************!*\
    !*** ./src/app/components/auth/forgot/forgot.component.ts ***!
    \************************************************************/
  /*! exports provided: ForgotComponent */
  /***/
  function _src_app_components_auth_forgot_forgotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
      return ForgotComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */"./src/app/services/token-storage.service.ts");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    var ForgotComponent = /*#__PURE__*/function () {
      function ForgotComponent(token, userService) {
        _classCallCheck(this, ForgotComponent);
        this.token = token;
        this.userService = userService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }
      return _createClass(ForgotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;
          this.userService.emailForgot(this.form).subscribe(function (data) {
            console.log(data);
            _this2.isSuccessful = true;
            _this2.isSignUpFailed = false;
          }, function (err) {
            _this2.errorMessage = err.error.message;
            _this2.isSignUpFailed = true;
          });
        }
      }]);
    }();
    ForgotComponent.ctorParameters = function () {
      return [{
        type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/forgot/forgot.component.html"))["default"]
    })], ForgotComponent);

    /***/
  }),
  /***/"./src/app/components/auth/historic/historic.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/components/auth/historic/historic.component.ts ***!
    \****************************************************************/
  /*! exports provided: HistoricComponent */
  /***/
  function _src_app_components_auth_historic_historicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HistoricComponent", function () {
      return HistoricComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    var HistoricComponent = /*#__PURE__*/function () {
      function HistoricComponent(userService) {
        _classCallCheck(this, HistoricComponent);
        this.userService = userService;
        this.currentIndex = -1;
        this.title = '';
        this.page = 1;
        this.pageSize = 10;
        this.pageSizes = [10, 15, 20, 30, 40];
      }
      return _createClass(HistoricComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.list();
        }
      }, {
        key: "list",
        value: function list() {
          var _this3 = this;
          this.userService.listHistoric().subscribe(function (data) {
            console.log(data);
            _this3.users = data;
          });
        }
      }, {
        key: "handlePageChange",
        value: function handlePageChange(event) {
          this.page = event;
          this.list();
        }
      }, {
        key: "handlePageSizeChange",
        value: function handlePageSizeChange(event) {
          this.pageSize = event.target.value;
          this.page = 1;
          this.list();
        }
      }, {
        key: "filterDate",
        value: function filterDate(start, end) {
          var startDate = new Date(start);
          var endDate = new Date(end);
          this.users = this.users.filter(function (m) {
            return new Date(m.date) >= startDate && new Date(m.date) <= endDate;
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.list();
        }
      }]);
    }();
    HistoricComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };
    HistoricComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./historic.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/historic/historic.component.html"))["default"]
    })], HistoricComponent);

    /***/
  }),
  /***/"./src/app/components/auth/login/login.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/components/auth/login/login.component.ts ***!
    \**********************************************************/
  /*! exports provided: LoginComponent */
  /***/
  function _src_app_components_auth_login_loginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token-storage.service */"./src/app/services/token-storage.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, tokenStorage, router, userService) {
        _classCallCheck(this, LoginComponent);
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.userService = userService;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.isLoading = false;
        this.country = null;
        this.ip = null;
      }
      return _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            var user = this.tokenStorage.getUser();
            if (user) {
              this.authService.setLoggedIn(true);
              this.authService.setAdmin(user.roles === '1');
            }
          }
          // Récupérer les infos IP pour l'historique
          this.userService.getIp().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])({
              ipAddress: 'unknown',
              countryName: 'unknown'
            });
          })).subscribe(function (data) {
            _this4.ip = data.ipAddress;
            _this4.country = data.countryName;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;
          this.isLoading = true;
          this.errorMessage = '';
          this.authService.login(this.form).subscribe(function (data) {
            _this5.tokenStorage.saveToken(data.access_token);
            _this5.authService.profile().subscribe(function (user) {
              _this5.tokenStorage.saveUser(user);
              _this5.authService.setLoggedIn(true);
              _this5.authService.setAdmin(user.roles === '1');
              // Enregistrer l'historique de connexion
              _this5.recordLoginHistory(user);
              _this5.isLoading = false;
              _this5.isLoginFailed = false;
              _this5.isLoggedIn = true;
              _this5.router.navigate(['/explorer']);
            }, function (error) {
              _this5.isLoading = false;
              _this5.errorMessage = 'Erreur lors de la récupération du profil';
              _this5.isLoginFailed = true;
            });
          }, function (err) {
            _this5.isLoading = false;
            _this5.errorMessage = err.error && err.error.error ? err.error.error : 'Erreur de connexion';
            _this5.isLoginFailed = true;
          });
        }
      }, {
        key: "recordLoginHistory",
        value: function recordLoginHistory(user) {
          var loginData = {
            name: user.name,
            email: user.email,
            country: this.country || 'unknown',
            ip: this.ip || 'unknown'
          };
          this.userService.historic(loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            console.error('Failed to record login history:', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
          })).subscribe();
        }
      }]);
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html"))["default"]
    })], LoginComponent);

    /***/
  }),
  /***/"./src/app/components/auth/register/register.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/components/auth/register/register.component.ts ***!
    \****************************************************************/
  /*! exports provided: RegisterComponent */
  /***/
  function _src_app_components_auth_register_registerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var generate_unique_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! generate-unique-id */"./node_modules/generate-unique-id/index.js");
    /* harmony import */
    var generate_unique_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_4__);
    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, userService) {
        _classCallCheck(this, RegisterComponent);
        this.authService = authService;
        this.userService = userService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.load = false;
      }
      return _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getListCabinet();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;
          this.load = true;
          var password = generate_unique_id__WEBPACK_IMPORTED_MODULE_4___default()({
            length: 20,
            useLetters: true,
            useNumbers: true
          });
          this.authService.register(this.form, password).subscribe(function (data) {
            _this6.isSuccessful = true;
            _this6.isSignUpFailed = false;
            _this6.load = false;
          }, function (err) {
            _this6.load = false;
            _this6.errorMessage = "Changer l'email";
            _this6.isSignUpFailed = true;
          });
        }
      }, {
        key: "getListCabinet",
        value: function getListCabinet() {
          var _this7 = this;
          return this.userService.getCabinet().subscribe(function (data) {
            _this7.cabinet = data;
          });
        }
      }]);
    }();
    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html"))["default"]
    })], RegisterComponent);

    /***/
  }),
  /***/"./src/app/components/cabinet/add-cabinet/add-cabinet.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/cabinet/add-cabinet/add-cabinet.component.ts ***!
    \*************************************************************************/
  /*! exports provided: AddCabinetComponent */
  /***/
  function _src_app_components_cabinet_addCabinet_addCabinetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddCabinetComponent", function () {
      return AddCabinetComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */"./src/app/services/token-storage.service.ts");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    var AddCabinetComponent = /*#__PURE__*/function () {
      function AddCabinetComponent(token, userService) {
        _classCallCheck(this, AddCabinetComponent);
        this.token = token;
        this.userService = userService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }
      return _createClass(AddCabinetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;
          this.userService.postCabinet(this.form).subscribe(function (data) {
            var new_text = _this8.form.name.split(' ').join('_');
            var feed = {
              title: _this8.form.name,
              parent: 0,
              path: new_text,
              isFolder: true,
              cabinet_id: null
            };
            _this8.userService.getCabinetID(_this8.form.name).subscribe(function (d) {
              var maxId = 1; // Temporary ID, will be replaced by backend
              var folder = {
                id: maxId,
                title: _this8.form.name,
                parent: 0,
                path: new_text,
                isFolder: true,
                cabinet_id: d[0].id
              };
              _this8.userService.postFolder(folder).subscribe({
                next: function next() {
                  // Folder created successfully
                },
                error: function error(_error) {
                  console.error('Error creating folder:', _error);
                }
              });
            }, function (error) {
              console.error('Error getting cabinet ID:', error);
            });
            _this8.isSuccessful = true;
            _this8.isSignUpFailed = false;
          }, function (err) {
            _this8.errorMessage = err.error.message;
            _this8.isSignUpFailed = true;
          });
        }
      }]);
    }();
    AddCabinetComponent.ctorParameters = function () {
      return [{
        type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };
    AddCabinetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-cabinet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-cabinet.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/add-cabinet/add-cabinet.component.html"))["default"]
    })], AddCabinetComponent);

    /***/
  }),
  /***/"./src/app/components/cabinet/cabinet.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/cabinet/cabinet.component.ts ***!
    \*********************************************************/
  /*! exports provided: CabinetComponent */
  /***/
  function _src_app_components_cabinet_cabinetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CabinetComponent", function () {
      return CabinetComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */"./node_modules/crypto-js/index.js");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/delete/delete.component */"./src/app/components/modals/delete/delete.component.ts");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    var CabinetComponent = /*#__PURE__*/function () {
      function CabinetComponent(router, userService, SimpleModalService) {
        _classCallCheck(this, CabinetComponent);
        this.router = router;
        this.userService = userService;
        this.SimpleModalService = SimpleModalService;
        this.tokenFromUI = "0123456789123456";
        this.encrypted = "";
        this.currentIndex = -1;
        this.page = 1;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 15, 20, 30, 40];
        this.load = false;
      }
      return _createClass(CabinetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.list();
        }
      }, {
        key: "list",
        value: function list() {
          var _this9 = this;
          this.userService.getCabinet().subscribe(function (data) {
            _this9.users = data;
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(cab) {
          var _this0 = this;
          this.SimpleModalService.addModal(_modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"], {
            title: 'Suppression',
            message: 'Confirmer la suppression'
          }).subscribe(function (isConfirmed) {
            if (isConfirmed) {
              _this0.userService.deleteCabinet(cab.id).subscribe(function (data) {
                var removeIndex = _this0.users.map(function (item) {
                  return item.id;
                }).indexOf(cab.id);
                if (removeIndex !== -1) {
                  _this0.users.splice(removeIndex, 1);
                }
                // delete all folder associated to the parent
                var feed = {
                  path: cab.name.split(' ').join('_'),
                  isFolder: 1
                };
                _this0.userService.deleteFolderCabinet(cab.id).subscribe(function () {
                  _this0.userService.removeFolder(feed).subscribe({
                    next: function next() {
                      // delete done
                    },
                    error: function error(_error2) {
                      console.error('Error removing folder:', _error2);
                    }
                  });
                });
              }, function (error) {
                console.error('Error deleting cabinet:', error);
              });
            }
          });
        }
      }, {
        key: "addCabinet",
        value: function addCabinet() {
          this.router.navigate(['new-cabinet']);
        }
      }, {
        key: "editCabinet",
        value: function editCabinet(id) {
          var _key = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var _iv = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(JSON.stringify(id), _key, {
            keySize: 16,
            iv: _iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_4__["mode"].ECB,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_4__["pad"].Pkcs7
          });
          this.router.navigate(['edit-cabinet/' + encrypted]);
        }
      }, {
        key: "handlePageChange",
        value: function handlePageChange(event) {
          this.page = event;
          this.list();
        }
      }, {
        key: "handlePageSizeChange",
        value: function handlePageSizeChange(event) {
          this.pageSize = event.target.value;
          this.page = 1;
          this.list();
        }
      }, {
        key: "searchTitle",
        value: function searchTitle(val) {
          this.users = this.users.filter(function (x) {
            return x.name === val;
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.list();
        }
      }]);
    }();
    CabinetComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__["SimpleModalService"]
      }];
    };
    CabinetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cabinet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cabinet.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/cabinet.component.html"))["default"]
    })], CabinetComponent);

    /***/
  }),
  /***/"./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.ts": (
  /*!***************************************************************************!*\
    !*** ./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.ts ***!
    \***************************************************************************/
  /*! exports provided: EditCabinetComponent */
  /***/
  function _src_app_components_cabinet_editCabinet_editCabinetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditCabinetComponent", function () {
      return EditCabinetComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */"./node_modules/crypto-js/index.js");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token-storage.service */"./src/app/services/token-storage.service.ts");
    var EditCabinetComponent = /*#__PURE__*/function () {
      function EditCabinetComponent(token, userService, route, router) {
        _classCallCheck(this, EditCabinetComponent);
        this.token = token;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.currentData = {};
        this.message = '';
        this.tokenFromUI = "0123456789123456";
        this.encrypted = "";
        this.load = false;
      }
      return _createClass(EditCabinetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = '';
          this.getTutorial(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "getTutorial",
        value: function getTutorial(id) {
          var _this1 = this;
          var _key = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var _iv = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var decrypt = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(id, _key, {
            keySize: 16,
            iv: _iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_4__["mode"].ECB,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_4__["pad"].Pkcs7
          }).toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8);
          this.userService.editCabinet(decrypt).subscribe(function (data) {
            _this1.currentData = data;
            _this1.oldCabinet = data.name;
            _this1.idCabinet = Number(data.id);
          }, function (error) {
            console.error('Error loading cabinet:', error);
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this10 = this;
          this.load = true;
          this.userService.getFolderCabinet(this.idCabinet).subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].path.includes('/')) {
                var path = _this10.currentData.name.split(' ').join('_') + '/' + data[i].path.substr(data[i].path.indexOf('/') + 1);
                var feed = {
                  path: path,
                  oldpath: data[i].path
                };
                _this10.userService.updateFolder(data[i].id, feed).subscribe({
                  next: function next() {
                    // Update successful
                  },
                  error: function error(_error3) {
                    console.error('Error updating folder:', _error3);
                  }
                });
              } else {
                var _path = _this10.currentData.name.split(' ').join('_');
                var _feed = {
                  title: _this10.currentData.name,
                  path: _path,
                  oldpath: data[i].path
                };
                _this10.userService.updateFolder(data[i].id, _feed).subscribe({
                  next: function next() {
                    // Update successful
                  },
                  error: function error(_error4) {
                    console.error('Error updating folder:', _error4);
                  }
                });
              }
            }
            _this10.load = false;
          });
          this.userService.updateCabinet(this.currentData.id, this.currentData).subscribe(function (response) {
            _this10.message = 'Succès de la modification';
            _this10.load = false;
          }, function (error) {
            console.error('Error updating cabinet:', error);
            _this10.load = false;
          });
        }
      }]);
    }();
    EditCabinetComponent.ctorParameters = function () {
      return [{
        type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    EditCabinetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-cabinet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-cabinet.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabinet/edit-cabinet/edit-cabinet.component.html"))["default"]
    })], EditCabinetComponent);

    /***/
  }),
  /***/"./src/app/components/change-password/change-password.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/change-password/change-password.component.ts ***!
    \*************************************************************************/
  /*! exports provided: ChangePasswordComponent */
  /***/
  function _src_app_components_changePassword_changePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent() {
        _classCallCheck(this, ChangePasswordComponent);
      }
      return _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html"))["default"]
    })], ChangePasswordComponent);

    /***/
  }),
  /***/"./src/app/components/list-user/edit-user/edit-user.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/list-user/edit-user/edit-user.component.ts ***!
    \***********************************************************************/
  /*! exports provided: EditUserComponent */
  /***/
  function _src_app_components_listUser_editUser_editUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
      return EditUserComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */"./node_modules/crypto-js/index.js");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var generate_unique_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! generate-unique-id */"./node_modules/generate-unique-id/index.js");
    /* harmony import */
    var generate_unique_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */
    var _modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/delete/delete.component */"./src/app/components/modals/delete/delete.component.ts");
    var EditUserComponent = /*#__PURE__*/function () {
      function EditUserComponent(userService, SimpleModalService, route, router) {
        _classCallCheck(this, EditUserComponent);
        this.userService = userService;
        this.SimpleModalService = SimpleModalService;
        this.route = route;
        this.router = router;
        this.isSuccessful = false;
        this.currentData = {};
        this.message = '';
        this.tokenFromUI = "0123456789123456";
        this.encrypted = "";
        this.load = false;
      }
      return _createClass(EditUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = '';
          this.getTutorial(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "getTutorial",
        value: function getTutorial(id) {
          var _this11 = this;
          var _key = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var _iv = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var decrypt = crypto_js__WEBPACK_IMPORTED_MODULE_4__["RC4"].decrypt(id, _key, {
            keySize: 16,
            iv: _iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_4__["mode"].CFB,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_4__["pad"].Pkcs7
          }).toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8);
          this.userService.findUser(decrypt).subscribe(function (data) {
            _this11.currentData = data;
          }, function (error) {
            console.error('Error loading user:', error);
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this12 = this;
          this.load = true;
          this.userService.updateUser(this.currentData.id, this.currentData).subscribe(function (response) {
            _this12.message = 'Succès de la modification';
            _this12.load = false;
            _this12.isSuccessful = true;
          }, function (error) {
            console.error('Error updating user:', error);
            _this12.load = false;
          });
        }
      }, {
        key: "deleteTutorial",
        value: function deleteTutorial() {
          var _this13 = this;
          this.SimpleModalService.addModal(_modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"], {
            title: 'Confirmation',
            message: 'Confirmation du suppression'
          }).subscribe(function (isConfirmed) {
            if (isConfirmed) {
              _this13.load = true;
              _this13.userService.deleteUser(_this13.currentData.id).subscribe(function (response) {
                _this13.load = false;
                _this13.message = 'Succès de la suppression';
                _this13.isSuccessful = true;
              }, function (error) {
                console.error('Error deleting user:', error);
                _this13.load = false;
              });
            }
          });
        }
      }, {
        key: "uuid",
        value: function uuid() {
          var password = generate_unique_id__WEBPACK_IMPORTED_MODULE_5___default()({
            length: 20,
            useLetters: true,
            useNumbers: true
          });
          this.currentData.password = password;
        }
      }]);
    }();
    EditUserComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__["SimpleModalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-user/edit-user/edit-user.component.html"))["default"]
    })], EditUserComponent);

    /***/
  }),
  /***/"./src/app/components/list-user/list-user.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/components/list-user/list-user.component.ts ***!
    \*************************************************************/
  /*! exports provided: ListUserComponent */
  /***/
  function _src_app_components_listUser_listUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
      return ListUserComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */"./node_modules/crypto-js/index.js");
    /* harmony import */
    var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
    var ListUserComponent = /*#__PURE__*/function () {
      function ListUserComponent(userService, router) {
        _classCallCheck(this, ListUserComponent);
        this.userService = userService;
        this.router = router;
        this.tokenFromUI = "0123456789123456";
        this.encrypted = "";
        this.currentTutorial = null;
        this.currentIndex = -1;
        this.title = '';
        this.page = 1;
        this.pageSize = 10;
        this.pageSizes = [10, 15, 20, 30, 40];
      }
      return _createClass(ListUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.list();
        }
      }, {
        key: "list",
        value: function list() {
          var _this14 = this;
          this.userService.getUser().subscribe(function (data) {
            _this14.tutorials = data;
          }, function (error) {
            console.error('Error loading users:', error);
          });
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          this.list();
          this.currentTutorial = null;
          this.currentIndex = -1;
        }
      }, {
        key: "setActiveTutorial",
        value: function setActiveTutorial(tutorial, index) {
          this.currentTutorial = tutorial;
          this.currentIndex = index;
        }
      }, {
        key: "searchTitle",
        value: function searchTitle(val) {
          this.tutorials = this.tutorials.filter(function (x) {
            return x.email === val;
          });
        }
      }, {
        key: "editUser",
        value: function editUser(id) {
          var _key = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var _iv = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8.parse(this.tokenFromUI);
          var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_4__["RC4"].encrypt(JSON.stringify(id), _key, {
            keySize: 16,
            iv: _iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_4__["mode"].CFB,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_4__["pad"].Pkcs7
          });
          this.router.navigate(['edit-user/' + encrypted]);
        }
      }, {
        key: "handlePageChange",
        value: function handlePageChange(event) {
          this.page = event;
          this.list();
        }
      }, {
        key: "handlePageSizeChange",
        value: function handlePageSizeChange(event) {
          this.pageSize = event.target.value;
          this.page = 1;
          this.list();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.list();
        }
      }]);
    }();
    ListUserComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    ListUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-user.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-user/list-user.component.html"))["default"]
    })], ListUserComponent);

    /***/
  }),
  /***/"./src/app/components/modals/delete/delete.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/components/modals/delete/delete.component.ts ***!
    \**************************************************************/
  /*! exports provided: DeleteComponent */
  /***/
  function _src_app_components_modals_delete_deleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () {
      return DeleteComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    var DeleteComponent = /*#__PURE__*/function (_ngx_simple_modal__WE) {
      function DeleteComponent() {
        _classCallCheck(this, DeleteComponent);
        return _callSuper(this, DeleteComponent);
      }
      _inherits(DeleteComponent, _ngx_simple_modal__WE);
      return _createClass(DeleteComponent, [{
        key: "confirm",
        value: function confirm() {
          // on click on confirm button we set dialog result as true,
          // ten we can get dialog result from caller code
          this.result = true;
          this.close();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.result = false;
          this.close();
        }
      }]);
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);
    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/delete/delete.component.html"))["default"]
    })], DeleteComponent);

    /***/
  }),
  /***/"./src/app/components/modals/new-folder/new-folder.component.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/components/modals/new-folder/new-folder.component.ts ***!
    \**********************************************************************/
  /*! exports provided: NewFolderComponent */
  /***/
  function _src_app_components_modals_newFolder_newFolderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NewFolderComponent", function () {
      return NewFolderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    var NewFolderComponent = /*#__PURE__*/function (_ngx_simple_modal__WE2) {
      function NewFolderComponent() {
        var _this15;
        _classCallCheck(this, NewFolderComponent);
        _this15 = _callSuper(this, NewFolderComponent);
        _this15.message = '';
        return _this15;
      }
      _inherits(NewFolderComponent, _ngx_simple_modal__WE2);
      return _createClass(NewFolderComponent, [{
        key: "apply",
        value: function apply() {
          if (this.message.trim()) {
            this.result = this.message;
            this.close();
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.close();
        }
      }, {
        key: "isValid",
        value: function isValid() {
          return this.message.trim().length > 0;
        }
      }]);
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);
    NewFolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-folder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-folder.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-folder/new-folder.component.html"))["default"]
    })], NewFolderComponent);

    /***/
  }),
  /***/"./src/app/components/modals/rename-folder/rename-folder.component.ts": (
  /*!****************************************************************************!*\
    !*** ./src/app/components/modals/rename-folder/rename-folder.component.ts ***!
    \****************************************************************************/
  /*! exports provided: RenameFolderComponent */
  /***/
  function _src_app_components_modals_renameFolder_renameFolderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenameFolderComponent", function () {
      return RenameFolderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    var RenameFolderComponent = /*#__PURE__*/function (_ngx_simple_modal__WE3) {
      function RenameFolderComponent() {
        var _this16;
        _classCallCheck(this, RenameFolderComponent);
        _this16 = _callSuper(this, RenameFolderComponent);
        _this16.message = '';
        return _this16;
      }
      _inherits(RenameFolderComponent, _ngx_simple_modal__WE3);
      return _createClass(RenameFolderComponent, [{
        key: "apply",
        value: function apply() {
          this.result = this.message;
          this.close();
        }
      }, {
        key: "fermer",
        value: function fermer() {
          this.close();
        }
      }]);
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);
    RenameFolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rename-folder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rename-folder.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/rename-folder/rename-folder.component.html"))["default"]
    })], RenameFolderComponent);

    /***/
  }),
  /***/"./src/app/components/modals/upload-file/upload-file.component.ts": (
  /*!************************************************************************!*\
    !*** ./src/app/components/modals/upload-file/upload-file.component.ts ***!
    \************************************************************************/
  /*! exports provided: UploadFileComponent */
  /***/
  function _src_app_components_modals_uploadFile_uploadFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () {
      return UploadFileComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    var UploadFileComponent = /*#__PURE__*/function (_ngx_simple_modal__WE4) {
      function UploadFileComponent() {
        var _this17;
        _classCallCheck(this, UploadFileComponent);
        _this17 = _callSuper(this, UploadFileComponent);
        _this17.message = '';
        _this17.files = null;
        return _this17;
      }
      _inherits(UploadFileComponent, _ngx_simple_modal__WE4);
      return _createClass(UploadFileComponent, [{
        key: "onFileChange",
        value: function onFileChange(event) {
          var input = event.target;
          if (input.files && input.files.length > 0) {
            this.files = input.files;
          }
        }
      }, {
        key: "apply",
        value: function apply() {
          if (this.files && this.files.length > 0) {
            this.result = {
              message: this.message,
              upload: this.files
            };
            this.close();
          }
        }
      }, {
        key: "isValid",
        value: function isValid() {
          return this.files !== null && this.files.length > 0;
        }
      }, {
        key: "formatFileSize",
        value: function formatFileSize(bytes) {
          if (bytes === 0) return '0 Bytes';
          var k = 1024;
          var sizes = ['Bytes', 'KB', 'MB', 'GB'];
          var i = Math.floor(Math.log(bytes) / Math.log(k));
          return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        }
      }]);
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);
    UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-file',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-file.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/upload-file/upload-file.component.html"))["default"]
    })], UploadFileComponent);

    /***/
  }),
  /***/"./src/app/components/nav-bar/nav-bar.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/
  /*! exports provided: NavBarComponent */
  /***/
  function _src_app_components_navBar_navBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */"./src/app/services/token-storage.service.ts");
    /* harmony import */
    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */"./src/app/services/user.service.ts");
    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(tokenStorageService, userService) {
        _classCallCheck(this, NavBarComponent);
        this.tokenStorageService = tokenStorageService;
        this.userService = userService;
        this.isAdmin = false;
        this.superAdmin = false;
        this.isMenuOpen = false;
        this.username = '';
      }
      return _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;
          this.userService.getProfile().subscribe(function (data) {
            if (data.roles === "3") {
              _this18.isAdmin = true;
            } else if (data.roles === "1") {
              _this18.superAdmin = true;
            }
            _this18.username = data.name || 'Utilisateur';
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
          window.location.reload();
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.isMenuOpen = !this.isMenuOpen;
        }
      }]);
    }();
    NavBarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html"))["default"]
    })], NavBarComponent);

    /***/
  }),
  /***/"./src/app/components/profile/profile.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/
  /*! exports provided: ProfileComponent */
  /***/
  function _src_app_components_profile_profileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token-storage.service */"./src/app/services/token-storage.service.ts");
    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(token, authService) {
        _classCallCheck(this, ProfileComponent);
        this.token = token;
        this.authService = authService;
      }
      return _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.token.getUser();
        }
      }]);
    }();
    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"]
    })], ProfileComponent);

    /***/
  }),
  /***/"./src/app/components/treeview/treeview.component.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/components/treeview/treeview.component.ts ***!
    \***********************************************************/
  /*! exports provided: TreeviewComponent */
  /***/
  function _src_app_components_treeview_treeviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function () {
      return TreeviewComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */"./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */
    var _modals_new_folder_new_folder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/new-folder/new-folder.component */"./src/app/components/modals/new-folder/new-folder.component.ts");
    /* harmony import */
    var _modals_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/upload-file/upload-file.component */"./src/app/components/modals/upload-file/upload-file.component.ts");
    /* harmony import */
    var _services_folder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/folder.service */"./src/app/services/folder.service.ts");
    /* harmony import */
    var _services_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/file.service */"./src/app/services/file.service.ts");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */"./src/app/services/user.service.ts");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/token-storage.service */"./src/app/services/token-storage.service.ts");
    /* harmony import */
    var _modals_rename_folder_rename_folder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/rename-folder/rename-folder.component */"./src/app/components/modals/rename-folder/rename-folder.component.ts");
    /* harmony import */
    var _modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/delete/delete.component */"./src/app/components/modals/delete/delete.component.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var TreeviewComponent = /*#__PURE__*/function () {
      function TreeviewComponent(tokenStorage, modalService, folderService, fileService, userService) {
        _classCallCheck(this, TreeviewComponent);
        this.tokenStorage = tokenStorage;
        this.modalService = modalService;
        this.folderService = folderService;
        this.fileService = fileService;
        this.userService = userService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.folders = [];
        this.openedFolders = new Set();
        this.foundItems = [];
        this.currentPath = '';
        this.isLoading = false;
        this.pdfView = false;
        this.pdfSrc = '';
        this.pageVariable = 1;
        this.imageView = false;
        this.imageSrc = '';
        this.currentFileType = 'other';
        this.currentFile = null;
        // Cabinet info
        this.cabinetName = '';
      }
      return _createClass(TreeviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFolders();
          this.loadCabinetInfo();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
          // clear url blob
          if (this.pdfSrc) {
            URL.revokeObjectURL(this.pdfSrc);
          }
          if (this.imageSrc) {
            URL.revokeObjectURL(this.imageSrc);
          }
        }
        /**
         * loading folder from services
         */
      }, {
        key: "loadFolders",
        value: function loadFolders() {
          var _this19 = this;
          this.isLoading = true;
          this.folderService.loadFolders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next(folders) {
              _this19.folders = folders;
              _this19.isLoading = false;
            },
            error: function error(_error5) {
              console.error('Error loading folders:', _error5);
              _this19.isLoading = false;
            }
          });
        }
        /**
         * data cabinet
         */
      }, {
        key: "loadCabinetInfo",
        value: function loadCabinetInfo() {
          var _this20 = this;
          var user = this.tokenStorage.getUser();
          if (user && user.cabinet_id) {
            this.userService.getCabinetUser(user.cabinet_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
              next: function next(cabinet) {
                if (cabinet && cabinet.length > 0) {
                  _this20.cabinetName = cabinet[0].name;
                }
              },
              error: function error(_error6) {
                console.error('Error loading cabinet info:', _error6);
              }
            });
          }
        }
        /**
         * open a folder
         */
      }, {
        key: "toggleFolder",
        value: function toggleFolder(item) {
          if (this.openedFolders.has(item.id)) {
            this.openedFolders["delete"](item.id);
          } else {
            this.openedFolders.add(item.id);
          }
          // if file, check type
          if (!item.isFolder) {
            this.displayFile(item);
          }
        }
        /**
         * vizualize
         */
      }, {
        key: "displayFile",
        value: function displayFile(item) {
          this.currentFile = item;
          var fileType = this.getFileType(item.path);
          this.currentFileType = fileType;
          this.pdfView = false;
          this.imageView = false;
          this.pdfSrc = '';
          this.imageSrc = '';
          switch (fileType) {
            case 'pdf':
              this.displayPdf(item);
              break;
            case 'image':
              this.displayImage(item);
              break;
            case 'other':
              //  not show if unknow type
              console.log('File type not supported for preview:', item.path);
              break;
          }
        }
        /**
         * determine type file
         */
      }, {
        key: "getFileType",
        value: function getFileType(filePath) {
          var fileParts = filePath.split('.');
          var extension = fileParts.length > 1 ? fileParts[fileParts.length - 1].toLowerCase() : '';
          var pdfExtensions = ['pdf'];
          var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
          if (pdfExtensions.includes(extension)) {
            return 'pdf';
          } else if (imageExtensions.includes(extension)) {
            return 'image';
          } else {
            return 'other';
          }
        }
        /**
         * display pdf
         */
      }, {
        key: "displayPdf",
        value: function displayPdf(item) {
          var _this21 = this;
          console.log('Displaying PDF for item:', item);
          this.pdfView = true;
          this.fileService.showPdf(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next(blob) {
              console.log('PDF blob received, creating object URL');
              _this21.pdfSrc = URL.createObjectURL(blob);
              console.log('PDF object URL created:', _this21.pdfSrc);
            },
            error: function error(_error7) {
              console.error('Error displaying PDF:', _error7);
              _this21.pdfView = false;
            }
          });
        }
        /**
         * display image
         */
      }, {
        key: "displayImage",
        value: function displayImage(item) {
          var _this22 = this;
          console.log('Displaying image for item:', item);
          this.imageView = true;
          // download image
          this.fileService.getFileBlob(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next(blob) {
              console.log('Image blob received, creating object URL');
              _this22.imageSrc = URL.createObjectURL(blob);
              console.log('Image object URL created:', _this22.imageSrc);
            },
            error: function error(_error8) {
              console.error('Error displaying image:', _error8);
              _this22.imageView = false;
            }
          });
        }
        /**
         * close vizualiser
         */
      }, {
        key: "closeViewer",
        value: function closeViewer() {
          this.pdfView = false;
          this.imageView = false;
          this.pdfSrc = '';
          this.imageSrc = '';
          this.currentFileType = 'other';
          if (this.pdfSrc) {
            URL.revokeObjectURL(this.pdfSrc);
          }
          if (this.imageSrc) {
            URL.revokeObjectURL(this.imageSrc);
          }
        }
        /**
         */
      }, {
        key: "getItemsByParent",
        value: function getItemsByParent(parentId) {
          return this.folderService.getItemsByParent(parentId);
        }
      }, {
        key: "hasChildren",
        value: function hasChildren(itemId) {
          return this.folderService.hasChildren(itemId);
        }
      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.openedFolders.clear();
        }
      }, {
        key: "expandAll",
        value: function expandAll() {
          var allIds = this.folders.map(function (item) {
            return item.id;
          });
          this.openedFolders = new Set(allIds);
        }
      }, {
        key: "showItemPath",
        value: function showItemPath(itemId) {
          var item = this.folderService.findItem(itemId);
          if (!item) return;
          var currentItem = item;
          while (currentItem.parent) {
            this.openedFolders.add(currentItem.parent);
            currentItem = this.folderService.findItem(currentItem.parent);
            if (!currentItem) break;
          }
        }
      }, {
        key: "resetSearch",
        value: function resetSearch() {
          this.foundItems = [];
        }
      }, {
        key: "searchItems",
        value: function searchItems(term) {
          var _this23 = this;
          if (!term.trim()) {
            this.resetSearch();
            return;
          }
          this.foundItems = this.folderService.searchItems(term);
          this.foundItems.forEach(function (item) {
            return _this23.showItemPath(item.id);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          var _this24 = this;
          this.modalService.addModal(_modals_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["DeleteComponent"], {
            title: 'Suppression',
            message: 'Confirmation de la suppression'
          }).subscribe(function (isConfirmed) {
            if (isConfirmed) {
              _this24.performDelete(item);
            }
          });
        }
      }, {
        key: "performDelete",
        value: function performDelete(item) {
          var _this25 = this;
          var folderData = {
            path: item.path,
            isFolder: item.isFolder
          };
          this.userService.deleteFolder(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next() {
              _this25.userService.removeFolder(folderData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this25.destroy$)).subscribe({
                next: function next() {
                  _this25.folders = _this25.folders.filter(function (f) {
                    return f.id !== item.id;
                  });
                  _this25.folderService.updateCache(_this25.folders);
                },
                error: function error(_error9) {
                  console.error('Error removing folder:', _error9);
                }
              });
            },
            error: function error(_error0) {
              console.error('Error deleting folder:', _error0);
            }
          });
        }
      }, {
        key: "showCreateFolderModal",
        value: function showCreateFolderModal(parentId) {
          var _this26 = this;
          this.modalService.addModal(_modals_new_folder_new_folder_component__WEBPACK_IMPORTED_MODULE_3__["NewFolderComponent"], {
            title: 'Nouveau dossier',
            question: 'Nom du dossier'
          }).subscribe(function (folderName) {
            if (folderName && folderName.trim()) {
              _this26.createNewFolder(parentId, folderName);
            }
          });
        }
      }, {
        key: "createNewFolder",
        value: function createNewFolder(parentId, folderName) {
          var _this27 = this;
          this.isLoading = true;
          var user = this.tokenStorage.getUser();
          if (!user) {
            console.error('User not authenticated');
            this.isLoading = false;
            return;
          }
          this.folderService.createFolder(parentId, folderName, user.cabinet_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next(newFolder) {
              _this27.isLoading = false;
              // Recharger les dossiers pour avoir les données à jour
              _this27.loadFolders();
            },
            error: function error(_error1) {
              console.error('Error creating folder:', _error1);
              _this27.isLoading = false;
            }
          });
        }
      }, {
        key: "showUploadFileModal",
        value: function showUploadFileModal(parentId) {
          var _this28 = this;
          this.modalService.addModal(_modals_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__["UploadFileComponent"], {
            title: 'Ajout d\'un fichier',
            question: 'Le fichier'
          }).subscribe(function (result) {
            if (result && result.upload && result.upload.length > 0) {
              _this28.uploadFile(parentId, result.upload[0], result.message);
            }
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(parentId, file, message) {
          var _this29 = this;
          this.isLoading = true;
          var user = this.tokenStorage.getUser();
          if (!user) {
            console.error('User not authenticated');
            this.isLoading = false;
            return;
          }
          var parentItem = this.folderService.findItem(parentId);
          if (!parentItem) {
            console.error('Parent folder not found');
            this.isLoading = false;
            return;
          }
          var validation = this.fileService.validateFile(file, 10, ['pdf', 'doc', 'docx', 'txt', 'jpg', 'png']);
          if (!validation.valid) {
            console.error('File validation failed:', validation.error);
            this.isLoading = false;
            return;
          }
          this.fileService.uploadFile(file, parentItem.path, message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next() {
              _this29.fileService.createFileRecord(file, parentId, parentItem.path, user.cabinet_id, _this29.folders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this29.destroy$)).subscribe({
                next: function next(newFile) {
                  _this29.folders.push(newFile);
                  _this29.folderService.updateCache(_this29.folders);
                  _this29.isLoading = false;
                },
                error: function error(_error10) {
                  console.error('Error creating file record:', _error10);
                  _this29.isLoading = false;
                }
              });
            },
            error: function error(_error11) {
              console.error('Error uploading file:', _error11);
              _this29.isLoading = false;
            }
          });
        }
      }, {
        key: "renameItem",
        value: function renameItem(item) {
          var _this30 = this;
          var currentName = item.title;
          var fileName = item.path.split('/').pop() || currentName;
          this.modalService.addModal(_modals_rename_folder_rename_folder_component__WEBPACK_IMPORTED_MODULE_9__["RenameFolderComponent"], {
            title: 'Modifier le nom',
            question: 'Le nouveau nom',
            message: fileName
          }).subscribe(function (newName) {
            if (newName && newName.trim() && newName !== currentName) {
              _this30.performRename(item, newName);
            }
          });
        }
      }, {
        key: "performRename",
        value: function performRename(item, newName) {
          var _this31 = this;
          var user = this.tokenStorage.getUser();
          if (!user) {
            console.error('User not authenticated');
            return;
          }
          var parentItem = this.folderService.findItem(item.parent || 0);
          if (!parentItem && item.parent) {
            console.error('Parent folder not found');
            return;
          }
          var sanitisedNewName = newName.split(' ').join('_');
          var oldPath = item.path;
          var parentPath = parentItem ? parentItem.path : '';
          var newPath = parentPath ? "".concat(parentPath, "/").concat(sanitisedNewName) : sanitisedNewName;
          var updateData = {
            title: newName,
            path: newPath,
            oldpath: oldPath
          };
          this.userService.updateFolder(item.id, updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe({
            next: function next() {
              // Mettre à jour l'item local
              var itemIndex = _this31.folders.findIndex(function (f) {
                return f.id === item.id;
              });
              if (itemIndex !== -1) {
                _this31.folders[itemIndex].title = newName;
                _this31.folders[itemIndex].path = newPath;
              }
              _this31.folderService.updateCache(_this31.folders);
            },
            error: function error(_error12) {
              console.error('Error renaming item:', _error12);
            }
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(item) {
          var fileToDownload = item || this.currentFile;
          if (fileToDownload) {
            this.fileService.downloadFile(fileToDownload);
          }
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.pageVariable++;
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.pageVariable > 1) {
            this.pageVariable--;
          }
        }
      }]);
    }();
    TreeviewComponent.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalService"]
      }, {
        type: _services_folder_service__WEBPACK_IMPORTED_MODULE_5__["FolderService"]
      }, {
        type: _services_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };
    TreeviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-treeview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./treeview.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/treeview/treeview.component.html"))["default"]
    })], TreeviewComponent);

    /***/
  }),
  /***/"./src/app/helpers/admin-guard.ts": (
  /*!****************************************!*\
    !*** ./src/app/helpers/admin-guard.ts ***!
    \****************************************/
  /*! exports provided: AdminGuard */
  /***/
  function _src_app_helpers_adminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */"./src/app/services/user.service.ts");
    var AdminGuard = /*#__PURE__*/function () {
      function AdminGuard(userService, router) {
        _classCallCheck(this, AdminGuard);
        this.userService = userService;
        this.router = router;
      }
      return _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this32 = this;
          // Check if user is logged in first
          if (!this.userService.getProfile) {
            this.router.navigate(['login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }
          return this.userService.getProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data.roles === "1") {
              return true;
            }
            _this32.router.navigate(['explorer']);
            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            _this32.router.navigate(['login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }));
        }
      }]);
    }();
    AdminGuard.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminGuard);

    /***/
  }),
  /***/"./src/app/helpers/auth.interceptor.ts": (
  /*!*********************************************!*\
    !*** ./src/app/helpers/auth.interceptor.ts ***!
    \*********************************************/
  /*! exports provided: AuthInterceptor, authInterceptorProviders */
  /***/
  function _src_app_helpers_authInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return authInterceptorProviders;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */"./src/app/services/token-storage.service.ts");
    var TOKEN_HEADER_KEY = 'Authorization';
    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(token) {
        _classCallCheck(this, AuthInterceptor);
        this.token = token;
      }
      return _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.token.getToken();
          if (token != null) {
            authReq = req.clone({
              headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            });
          }
          return next.handle(authReq);
        }
      }]);
    }();
    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }];
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthInterceptor);
    var authInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptor,
      multi: true
    }];

    /***/
  }),
  /***/"./src/app/helpers/feature-flags.directive.ts": (
  /*!****************************************************!*\
    !*** ./src/app/helpers/feature-flags.directive.ts ***!
    \****************************************************/
  /*! exports provided: FeatureFlagsDirective */
  /***/
  function _src_app_helpers_featureFlagsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeatureFlagsDirective", function () {
      return FeatureFlagsDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */"./src/app/services/user.service.ts");
    var FeatureFlagsDirective = /*#__PURE__*/function () {
      function FeatureFlagsDirective(tplRef, vcRef, user) {
        _classCallCheck(this, FeatureFlagsDirective);
        this.tplRef = tplRef;
        this.vcRef = vcRef;
        this.user = user;
      }
      return _createClass(FeatureFlagsDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    FeatureFlagsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeatureFlagsDirective.prototype, "featureFlags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeatureFlagsDirective.prototype, "featureFlagsOr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeatureFlagsDirective.prototype, "featureFlagsElse", void 0);
    FeatureFlagsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[featureFlags]'
    })], FeatureFlagsDirective);

    /***/
  }),
  /***/"./src/app/helpers/login-guard.ts": (
  /*!****************************************!*\
    !*** ./src/app/helpers/login-guard.ts ***!
    \****************************************/
  /*! exports provided: LoginGuard */
  /***/
  function _src_app_helpers_loginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */"./src/app/services/token-storage.service.ts");
    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(token, router) {
        _classCallCheck(this, LoginGuard);
        this.token = token;
        this.router = router;
      }
      return _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var user = this.token.getUser();
          if (!user) {
            return true;
          }
          return this.router.createUrlTree(['explorer']);
        }
      }]);
    }();
    LoginGuard.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuard);

    /***/
  }),
  /***/"./src/app/helpers/normal-guard.ts": (
  /*!*****************************************!*\
    !*** ./src/app/helpers/normal-guard.ts ***!
    \*****************************************/
  /*! exports provided: NormalGuard */
  /***/
  function _src_app_helpers_normalGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NormalGuard", function () {
      return NormalGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */"./src/app/services/token-storage.service.ts");
    var NormalGuard = /*#__PURE__*/function () {
      function NormalGuard(token, router) {
        _classCallCheck(this, NormalGuard);
        this.token = token;
        this.router = router;
      }
      return _createClass(NormalGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var user = this.token.getUser();
          if (!user) {
            return this.router.createUrlTree(['login']);
          }
          return true;
        }
      }]);
    }();
    NormalGuard.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    NormalGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NormalGuard);

    /***/
  }),
  /***/"./src/app/helpers/simple-admin.ts": (
  /*!*****************************************!*\
    !*** ./src/app/helpers/simple-admin.ts ***!
    \*****************************************/
  /*! exports provided: SimpleAdmin */
  /***/
  function _src_app_helpers_simpleAdminTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SimpleAdmin", function () {
      return SimpleAdmin;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */"./src/app/services/user.service.ts");
    var SimpleAdmin = /*#__PURE__*/function () {
      function SimpleAdmin(userService, router) {
        _classCallCheck(this, SimpleAdmin);
        this.userService = userService;
        this.router = router;
      }
      return _createClass(SimpleAdmin, [{
        key: "canActivate",
        value: function canActivate() {
          var _this33 = this;
          return this.userService.getProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data.roles === "1" || data.roles === "3") {
              return true;
            } else if (data.roles === "2") {
              _this33.router.navigate(['explorer']);
              return false;
            }
            _this33.router.navigate(['login']);
            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            _this33.router.navigate(['login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }));
        }
      }]);
    }();
    SimpleAdmin.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    SimpleAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SimpleAdmin);

    /***/
  }),
  /***/"./src/app/services/auth.service.ts": (
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/
  /*! exports provided: AuthService */
  /***/
  function _src_app_services_authServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */"./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */
    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */"./src/environments/environment.ts");
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };
    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlApi;
        this.userLoggedIn = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.isAdmin = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }
      return _createClass(AuthService, [{
        key: "getLoggedIn",
        value: function getLoggedIn() {
          return this.userLoggedIn.asObservable();
        }
      }, {
        key: "getLoggedInValue",
        value: function getLoggedInValue() {
          return this.userLoggedIn.getValue();
        }
      }, {
        key: "setLoggedIn",
        value: function setLoggedIn(val) {
          this.userLoggedIn.next(val);
        }
      }, {
        key: "getAdmin",
        value: function getAdmin() {
          return this.isAdmin.asObservable();
        }
      }, {
        key: "getAdminValue",
        value: function getAdminValue() {
          return this.isAdmin.getValue();
        }
      }, {
        key: "setAdmin",
        value: function setAdmin(val) {
          this.isAdmin.next(val);
        }
      }, {
        key: "login",
        value: function login(credentials) {
          return this.http.post(this.url + 'auth/login', {
            email: credentials.email,
            password: credentials.password
          }, httpOptions);
        }
      }, {
        key: "profile",
        value: function profile() {
          return this.http.get(this.url + 'auth/profile');
        }
      }, {
        key: "register",
        value: function register(user, password) {
          return this.http.post(this.url + 'auth/register', {
            name: user.name,
            email: user.email,
            password: password,
            check: user.check,
            cabinet_id: user.cabinet_id
          }, httpOptions);
        }
      }]);
    }();
    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);

    /***/
  }),
  /***/"./src/app/services/file.service.ts": (
  /*!******************************************!*\
    !*** ./src/app/services/file.service.ts ***!
    \******************************************/
  /*! exports provided: FileService */
  /***/
  function _src_app_services_fileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FileService", function () {
      return FileService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */"./src/app/services/user.service.ts");
    var FileService = /*#__PURE__*/function () {
      function FileService(userService) {
        _classCallCheck(this, FileService);
        this.userService = userService;
      }
      /**
       * Upload file
       */
      return _createClass(FileService, [{
        key: "uploadFile",
        value: function uploadFile(file, parentPath) {
          var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var formData = new FormData();
          formData.append('file', file);
          formData.append('msg', message);
          formData.append('path', '/' + parentPath);
          return this.userService.upload(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            // Upload successful - could trigger a notification here
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error('Upload failed:', error);
            throw error;
          }));
        }
        /**
         * Upload multiple files
         */
      }, {
        key: "uploadMultipleFiles",
        value: function uploadMultipleFiles(files, parentPath) {
          var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var uploadObservables = [];
          for (var i = 0; i < files.length; i++) {
            uploadObservables.push(this.uploadFile(files[i], parentPath, message));
          }
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        /**
         * download file
         */
      }, {
        key: "downloadFile",
        value: function downloadFile(item) {
          var fileName = this.extractFileName(item.path);
          var sanitisedPath = item.path.split('/').join('|');
          this.userService.downloadFile(sanitisedPath).subscribe(function (data) {
            var downloadURL = window.URL.createObjectURL(data);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = fileName;
            link.click();
            window.URL.revokeObjectURL(downloadURL);
          }, function (error) {
            console.error('Download failed:', error);
          });
        }
        /**
         * blob file
         */
      }, {
        key: "getFileBlob",
        value: function getFileBlob(item) {
          var sanitisedPath = item.path.split('/').join('|');
          console.log('Requesting file blob for path:', sanitisedPath);
          return this.userService.downloadFile(sanitisedPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (blob) {
            console.log('File blob received, size:', blob.size, 'type:', blob.type);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error('Error fetching file blob:', error);
            throw error;
          }));
        }
        /**
         * display pdf
         */
      }, {
        key: "showPdf",
        value: function showPdf(item) {
          var sanitisedPath = item.path.split('/').join('|');
          console.log('Requesting PDF for path:', sanitisedPath);
          return this.userService.showPdf(sanitisedPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (blob) {
            console.log('PDF blob received, size:', blob.size, 'type:', blob.type);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error('Error fetching PDF:', error);
            throw error;
          }));
        }
        /**
         * file name
         */
      }, {
        key: "extractFileName",
        value: function extractFileName(path) {
          var lastSlashIndex = path.lastIndexOf('/');
          return lastSlashIndex !== -1 ? path.substring(lastSlashIndex + 1) : path;
        }
      }, {
        key: "sanitiseFileName",
        value: function sanitiseFileName(fileName) {
          return fileName.split(' ').join('_');
        }
      }, {
        key: "validateFile",
        value: function validateFile(file) {
          var maxSizeMB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var allowedTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var maxSizeBytes = maxSizeMB * 1024 * 1024;
          if (file.size > maxSizeBytes) {
            return {
              valid: false,
              error: "File size exceeds ".concat(maxSizeMB, "MB limit")
            };
          }
          // verify type 
          if (allowedTypes.length > 0) {
            var fileParts = file.name.split('.');
            var fileExtension = fileParts.length > 1 ? fileParts[fileParts.length - 1].toLowerCase() : '';
            if (!allowedTypes.includes(fileExtension)) {
              return {
                valid: false,
                error: "File type not allowed. Allowed types: ".concat(allowedTypes.join(', '))
              };
            }
          }
          return {
            valid: true
          };
        }
        /**
         * save in bdd
         */
      }, {
        key: "createFileRecord",
        value: function createFileRecord(file, parentId, parentPath, cabinetId, existingFolders) {
          var sanitisedName = this.sanitiseFileName(file.name);
          var newPath = parentPath ? "".concat(parentPath, "/").concat(sanitisedName) : sanitisedName;
          // id generate
          var maxId = existingFolders.length > 0 ? Math.max.apply(Math, _toConsumableArray(existingFolders.map(function (item) {
            return item.id;
          }))) : 0;
          var newFile = {
            id: maxId + 1,
            title: file.name,
            parent: parentId,
            path: newPath,
            isFolder: false,
            cabinet_id: cabinetId
          };
          return this.userService.postFolder(newFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return newFile;
          }));
        }
      }]);
    }();
    FileService.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FileService);

    /***/
  }),
  /***/"./src/app/services/folder.service.ts": (
  /*!********************************************!*\
    !*** ./src/app/services/folder.service.ts ***!
    \********************************************/
  /*! exports provided: FolderService */
  /***/
  function _src_app_services_folderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FolderService", function () {
      return FolderService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */"./src/app/services/user.service.ts");
    var FolderService = /*#__PURE__*/function () {
      function FolderService(userService) {
        _classCallCheck(this, FolderService);
        this.userService = userService;
        this.cachedFolders = [];
      }
      /**
       * Charge les dossiers selon les permissions de l'utilisateur
       */
      return _createClass(FolderService, [{
        key: "loadFolders",
        value: function loadFolders() {
          var _this34 = this;
          var user = this.userService.getTokenStorage().getUser();
          if (!user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
          }
          if (user.roles === '1' || user.roles === '3') {
            // Admin ou super user - voit tous les dossiers
            return this.userService.getFolder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (folders) {
              _this34.cachedFolders = folders;
              return folders;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }));
          } else {
            // User normal - voit seulement les dossiers de son cabinet
            return this.userService.getFolderCabinet(user.cabinet_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (folders) {
              _this34.cachedFolders = folders;
              return folders;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }));
          }
        }
        /**
         * Récupère les dossiers depuis le cache
         */
      }, {
        key: "getCachedFolders",
        value: function getCachedFolders() {
          return this.cachedFolders;
        }
        /**
         * Récupère les items d'un parent spécifique
         */
      }, {
        key: "getItemsByParent",
        value: function getItemsByParent(parentId) {
          return this.cachedFolders.filter(function (item) {
            if (parentId === null || parentId === 0) {
              return !item.parent || item.parent === 0;
            }
            return item.parent === parentId;
          });
        }
        /**
         * Vérifie si un item a des enfants
         */
      }, {
        key: "hasChildren",
        value: function hasChildren(itemId) {
          return this.cachedFolders.some(function (item) {
            return item.parent === itemId;
          });
        }
        /**
         * Trouve un item par son ID
         */
      }, {
        key: "findItem",
        value: function findItem(itemId) {
          return this.cachedFolders.find(function (item) {
            return item.id === itemId;
          });
        }
        /**
         * Crée un nouveau dossier
         */
      }, {
        key: "createFolder",
        value: function createFolder(parentId, folderName, cabinetId) {
          var _this35 = this;
          var parentItem = this.findItem(parentId);
          var parentPath = parentItem ? parentItem.path : '';
          var sanitizedName = folderName.split(' ').join('_');
          var newPath = parentPath ? "".concat(parentPath, "/").concat(sanitizedName) : sanitizedName;
          // Générer un ID temporaire (sera remplacé par le backend)
          var maxId = this.cachedFolders.length > 0 ? Math.max.apply(Math, _toConsumableArray(this.cachedFolders.map(function (item) {
            return item.id;
          }))) : 0;
          var newFolder = {
            id: maxId + 1,
            title: folderName,
            parent: parentId,
            path: newPath,
            isFolder: true,
            cabinet_id: cabinetId
          };
          return this.userService.postFolder(newFolder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this35.cachedFolders.push(newFolder);
            return newFolder;
          }));
        }
        /**
         * Met à jour le cache après modification
         */
      }, {
        key: "updateCache",
        value: function updateCache(updatedFolders) {
          this.cachedFolders = updatedFolders;
        }
        /**
         * Vide le cache
         */
      }, {
        key: "clearCache",
        value: function clearCache() {
          this.cachedFolders = [];
        }
        /**
         * Recherche des dossiers/fichiers
         */
      }, {
        key: "searchItems",
        value: function searchItems(searchTerm) {
          var term = searchTerm.toLowerCase();
          return this.cachedFolders.filter(function (item) {
            return item.title.toLowerCase().includes(term);
          });
        }
        /**
         * Construit le chemin complet pour un item
         */
      }, {
        key: "getItemPath",
        value: function getItemPath(itemId) {
          var path = [];
          var currentItem = this.findItem(itemId);
          while (currentItem) {
            path.unshift(currentItem.title);
            if (currentItem.parent) {
              currentItem = this.findItem(currentItem.parent);
            } else {
              break;
            }
          }
          return path;
        }
      }]);
    }();
    FolderService.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };
    FolderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FolderService);

    /***/
  }),
  /***/"./src/app/services/token-storage.service.ts": (
  /*!***************************************************!*\
    !*** ./src/app/services/token-storage.service.ts ***!
    \***************************************************/
  /*! exports provided: TokenStorageService */
  /***/
  function _src_app_services_tokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';
    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }
      return _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          sessionStorage.removeItem(TOKEN_KEY);
          sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          sessionStorage.removeItem(USER_KEY);
          sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          if (sessionStorage.getItem(USER_KEY)) {
            return JSON.parse(sessionStorage.getItem(USER_KEY));
          } else {
            return 0;
          }
          //return JSON.parse(sessionStorage.getItem(USER_KEY));
        }
      }]);
    }();
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenStorageService);

    /***/
  }),
  /***/"./src/app/services/user.service.ts": (
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/
  /*! exports provided: UserService */
  /***/
  function _src_app_services_userServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-storage.service */"./src/app/services/token-storage.service.ts");
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };
    var httpDownload = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/pdf'
      })
    };
    var UserService = /*#__PURE__*/function () {
      function UserService(http, tokenStorage) {
        _classCallCheck(this, UserService);
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlApi;
      }
      return _createClass(UserService, [{
        key: "getTokenStorage",
        value: function getTokenStorage() {
          return this.tokenStorage;
        }
      }, {
        key: "getCabinet",
        value: function getCabinet() {
          return this.http.get(this.url + 'auth/cabinet');
        }
      }, {
        key: "getCabinetID",
        value: function getCabinetID(name) {
          return this.http.get(this.url + 'auth/cabinet-name/' + name);
        }
      }, {
        key: "deleteCabinet",
        value: function deleteCabinet(id) {
          return this.http["delete"](this.url + 'auth/cabinet-delete/' + id);
        }
      }, {
        key: "editCabinet",
        value: function editCabinet(id) {
          return this.http.get(this.url + 'auth/cabinet-edit/' + id);
        }
      }, {
        key: "updateCabinet",
        value: function updateCabinet(id, data) {
          return this.http.put(this.url + 'auth/cabinet-update/' + id, data);
        }
      }, {
        key: "postCabinet",
        value: function postCabinet(cabinet) {
          return this.http.post(this.url + 'auth/cabinet', {
            name: cabinet.name
          }, httpOptions);
        }
      }, {
        key: "getFolder",
        value: function getFolder() {
          return this.http.get(this.url + 'auth/listFolder');
        }
      }, {
        key: "getFolderCabinet",
        value: function getFolderCabinet(id) {
          return this.http.get(this.url + 'auth/listFolder/' + id);
        }
      }, {
        key: "getCabinetUser",
        value: function getCabinetUser(id) {
          return this.http.get(this.url + 'auth/cabinet/' + id);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(path) {
          return this.http.get(this.url + 'auth/download/' + path, {
            responseType: 'blob'
          });
        }
      }, {
        key: "showPdf",
        value: function showPdf(path) {
          return this.http.get(this.url + 'auth/showPdf/' + path, {
            responseType: 'blob'
          });
        }
      }, {
        key: "postFolder",
        value: function postFolder(folder) {
          return this.http.post(this.url + 'auth/createFolder', {
            title: folder.title,
            parent: folder.parent,
            path: folder.path,
            isFolder: folder.isFolder,
            cabinet_id: folder.cabinet_id
          }, httpOptions);
        }
      }, {
        key: "upload",
        value: function upload(data) {
          return this.http.post(this.url + 'auth/upload', data);
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          return this.http.get(this.url + 'auth/profile');
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.url + 'auth/list-user');
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(id, data) {
          return this.http.post(this.url + 'auth/change-password/' + id, data);
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, data) {
          return this.http.put(this.url + 'auth/update-user/' + id, data);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](this.url + 'auth/delete-user/' + id);
        }
      }, {
        key: "findUser",
        value: function findUser(id) {
          return this.http.get(this.url + 'auth/find-user/' + id);
        }
      }, {
        key: "updateFolder",
        value: function updateFolder(id, data) {
          return this.http.put(this.url + 'auth/update-folder/' + id, data);
        }
      }, {
        key: "deleteFolder",
        value: function deleteFolder(id) {
          return this.http["delete"](this.url + 'auth/delete-folder/' + id);
        }
      }, {
        key: "deleteFolderCabinet",
        value: function deleteFolderCabinet(id) {
          return this.http["delete"](this.url + 'auth/delete-folder-cabinet/' + id);
        }
      }, {
        key: "removeFolder",
        value: function removeFolder(data) {
          return this.http.post(this.url + 'auth/remove-folder', data, httpOptions);
        }
      }, {
        key: "emailForgot",
        value: function emailForgot(data) {
          return this.http.post(this.url + 'auth/emailForgot', data, httpOptions);
        }
      }, {
        key: "getIp",
        value: function getIp() {
          return this.http.get('https://api.db-ip.com/v2/free/self');
        }
      }, {
        key: "historic",
        value: function historic(data) {
          return this.http.post(this.url + 'auth/historic', data, httpOptions);
        }
      }, {
        key: "listHistoric",
        value: function listHistoric() {
          return this.http.get(this.url + 'auth/list-historic');
        }
      }]);
    }();
    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
      }];
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyBJ5Ppe6ItEUS4ogiteg_eDErWUmrPdvPI',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: 'file-explorer-a303e',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
      },
      urlApi: 'http://127.0.0.1:8000/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! C:\Users\USER\Documents\portfolio\tree folder\tree_folder_angular\src\main.ts */"./src/main.ts");

    /***/
  }),
  /***/1: (
  /*!**********************!*\
    !*** zlib (ignored) ***!
    \**********************/
  /*! no static exports found */
  /***/
  function _(module, exports) {

    /* (ignored) */

    /***/}),
  /***/2: (
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/
  /*! no static exports found */
  /***/
  function _(module, exports) {

    /* (ignored) */

    /***/}),
  /***/3: (
  /*!**********************!*\
    !*** http (ignored) ***!
    \**********************/
  /*! no static exports found */
  /***/
  function _(module, exports) {

    /* (ignored) */

    /***/}),
  /***/4: (
  /*!***********************!*\
    !*** https (ignored) ***!
    \***********************/
  /*! no static exports found */
  /***/
  function _(module, exports) {

    /* (ignored) */

    /***/}),
  /***/5: (
  /*!********************************!*\
    !*** ./util.inspect (ignored) ***!
    \********************************/
  /*! no static exports found */
  /***/
  function _(module, exports) {

    /* (ignored) */

    /***/})
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map