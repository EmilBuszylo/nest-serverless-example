/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nlet AppController = class AppController {\n    constructor(appService) {\n        this.appService = appService;\n    }\n    getHello() {\n        return this.appService.getHello();\n    }\n};\n__decorate([\n    common_1.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", String)\n], AppController.prototype, \"getHello\", null);\nAppController = __decorate([\n    common_1.Controller(),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof app_service_1.AppService !== \"undefined\" && app_service_1.AppService) === \"function\" ? _a : Object])\n], AppController);\nexports.AppController = AppController;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/app.controller.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nconst dogs_module_1 = __webpack_require__(/*! ./dogs/dogs.module */ \"./src/dogs/dogs.module.ts\");\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [dogs_module_1.DogsModule, cats_module_1.CatsModule],\n        controllers: [app_controller_1.AppController],\n        providers: [app_service_1.AppService],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/app.module.ts?");

/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet AppService = class AppService {\n    getHello() {\n        return \"Hello World!\";\n    }\n};\nAppService = __decorate([\n    common_1.Injectable()\n], AppService);\nexports.AppService = AppService;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/app.service.ts?");

/***/ }),

/***/ "./src/cats/cats.controller.ts":
/*!*************************************!*\
  !*** ./src/cats/cats.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CatsController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatsController = class CatsController {\n    create(text) {\n        return `create ${text} miua`;\n    }\n    get() {\n        return \"get text miau\";\n    }\n};\n__decorate([\n    common_1.Post(),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"create\", null);\n__decorate([\n    common_1.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"get\", null);\nCatsController = __decorate([\n    common_1.Controller(\"cats\")\n], CatsController);\nexports.CatsController = CatsController;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/cats/cats.controller.ts?");

/***/ }),

/***/ "./src/cats/cats.module.ts":
/*!*********************************!*\
  !*** ./src/cats/cats.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CatsModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats.controller */ \"./src/cats/cats.controller.ts\");\nlet CatsModule = class CatsModule {\n};\nCatsModule = __decorate([\n    common_1.Module({\n        controllers: [cats_controller_1.CatsController]\n    })\n], CatsModule);\nexports.CatsModule = CatsModule;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/cats/cats.module.ts?");

/***/ }),

/***/ "./src/dogs/dogs.controller.ts":
/*!*************************************!*\
  !*** ./src/dogs/dogs.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dogsController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet dogsController = class dogsController {\n    create(data) {\n        return `create ${data.data.text} hau burk`;\n    }\n    getCurrent(id) {\n        return \"get text hau\";\n    }\n};\n__decorate([\n    common_1.Post(),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], dogsController.prototype, \"create\", null);\n__decorate([\n    common_1.Get(\":id\"),\n    __param(0, common_1.Param(\"id\")),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], dogsController.prototype, \"getCurrent\", null);\ndogsController = __decorate([\n    common_1.Controller(\"dogs\")\n], dogsController);\nexports.dogsController = dogsController;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/dogs/dogs.controller.ts?");

/***/ }),

/***/ "./src/dogs/dogs.module.ts":
/*!*********************************!*\
  !*** ./src/dogs/dogs.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DogsModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst dogs_controller_1 = __webpack_require__(/*! ./dogs.controller */ \"./src/dogs/dogs.controller.ts\");\nlet DogsModule = class DogsModule {\n};\nDogsModule = __decorate([\n    common_1.Module({\n        controllers: [dogs_controller_1.dogsController]\n    })\n], DogsModule);\nexports.DogsModule = DogsModule;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/dogs/dogs.module.ts?");

/***/ }),

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst aws_serverless_express_1 = __webpack_require__(/*! aws-serverless-express */ \"aws-serverless-express\");\nconst middleware_1 = __webpack_require__(/*! aws-serverless-express/middleware */ \"aws-serverless-express/middleware\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ \"@nestjs/platform-express\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst binaryMimeTypes = [];\nlet cachedServer;\nasync function bootstrapServer() {\n    if (!cachedServer) {\n        const expressApp = express();\n        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));\n        nestApp.use(middleware_1.eventContext());\n        await nestApp.init();\n        cachedServer = aws_serverless_express_1.createServer(expressApp, undefined, binaryMimeTypes);\n    }\n    return cachedServer;\n}\nconst handler = async (event, context) => {\n    cachedServer = await bootstrapServer();\n    return aws_serverless_express_1.proxy(cachedServer, event, context, \"PROMISE\").promise;\n};\nexports.handler = handler;\n\n\n//# sourceURL=webpack://nest-serverless-example/./src/handler.ts?");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");;

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express");;

/***/ }),

/***/ "aws-serverless-express/middleware":
/*!****************************************************!*\
  !*** external "aws-serverless-express/middleware" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express/middleware");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;