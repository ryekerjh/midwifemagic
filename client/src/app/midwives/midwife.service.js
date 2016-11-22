"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MidwifeService = (function () {
    function MidwifeService(http) {
        this.http = http;
        this.midwivesUrl = 'app/midwives';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MidwifeService.prototype.getMidwives = function () {
        return this.http.get(this.midwivesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MidwifeService.prototype.getMidwife = function (id) {
        return this.getMidwives()
            .then(function (midwives) { return midwives.find(function (midwife) { return midwife.id === id; }); });
    };
    MidwifeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MidwifeService.prototype.update = function (midwife) {
        var url = this.midwivesUrl + "/" + midwife.id;
        return this.http
            .put(url, JSON.stringify(midwife), { headers: this.headers })
            .toPromise()
            .then(function () { return midwife; })
            .catch(this.handleError);
    };
    MidwifeService.prototype.create = function (name) {
        return this.http
            .post(this.midwivesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    MidwifeService.prototype.delete = function (id) {
        var url = this.midwivesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    MidwifeService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MidwifeService);
    return MidwifeService;
}());
exports.MidwifeService = MidwifeService;
//# sourceMappingURL=midwife.service.js.map