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
var midwife_service_1 = require('./midwife.service');
var MidwivesComponent = (function () {
    function MidwivesComponent(router, midwifeService) {
        this.router = router;
        this.midwifeService = midwifeService;
    }
    MidwivesComponent.prototype.getMidwives = function () {
        var _this = this;
        this.midwifeService.getMidwives()
            .then(function (midwives) {
            return _this.midwives = midwives;
        });
    };
    MidwivesComponent.prototype.ngOnInit = function () {
        this.getMidwives();
    };
    MidwivesComponent.prototype.onSelect = function (midwife) {
        this.selectedMidwife = midwife;
        // console.log(this.selectedMidwife);
    };
    MidwivesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedMidwife.id]);
    };
    MidwivesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.midwifeService.create(name)
            .then(function (midwife) {
            _this.midwives.push(midwife);
            console.log(_this.midwives);
            _this.selectedMidwife = null;
        });
    };
    MidwivesComponent.prototype.delete = function (midwife) {
        var _this = this;
        this.midwifeService
            .delete(midwife.id)
            .then(function () {
            _this.midwives = _this.midwives.filter(function (h) { return h !== midwife; });
            if (_this.selectedMidwife === midwife) {
                _this.selectedMidwife = null;
            }
        });
    };
    MidwivesComponent = __decorate([
        core_1.Component({
            moduleId:'module.id',
            selector: 'my-midwives',
            providers: [midwife_service_1.MidwifeService],
            templateUrl: 'midwife.component.html',
            styleUrls: ['midwife.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, midwife_service_1.MidwifeService])
    ], MidwivesComponent);
    return MidwivesComponent;
}());
exports.MidwivesComponent = MidwivesComponent;
//# sourceMappingURL=midwives.component.js.map