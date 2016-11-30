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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var midwife_service_1 = require('./midwife.service');
var MidwifeDetailComponent = (function () {
    function MidwifeDetailComponent(midwifeService, route, location) {
        this.midwifeService = midwifeService;
        this.route = route;
        this.location = location;
    }
    MidwifeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.midwifeService.getMidwife(id)
                .then(function (midwife) { return _this.midwife = midwife; });
        });
    };
    MidwifeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MidwifeDetailComponent.prototype.save = function () {
        var _this = this;
        this.midwifeService.update(this.midwife)
            .then(function () { return _this.goBack(); });
    };
    MidwifeDetailComponent = __decorate([
        core_1.Component({
            selector: 'midwife-detail',
            templateUrl: 'app/midwives/midwife-detail.component.html',
            styleUrls: ['app/midwives/midwife-detail.component.css']
        }), 
        __metadata('design:paramtypes', [midwife_service_1.MidwifeService, router_1.ActivatedRoute, common_1.Location])
    ], MidwifeDetailComponent);
    return MidwifeDetailComponent;
}());
exports.MidwifeDetailComponent = MidwifeDetailComponent;
//# sourceMappingURL=midwife-detail.component.js.map