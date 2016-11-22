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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var midwife_search_service_1 = require('./midwife-search.service');
var MidwifeSearchComponent = (function () {
    function MidwifeSearchComponent(midwifeSearchService, router) {
        this.midwifeSearchService = midwifeSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    MidwifeSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    MidwifeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.midwives = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.midwifeSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    MidwifeSearchComponent.prototype.gotoDetail = function (midwife) {
        var link = ['/detail', midwife.id];
        this.router.navigate(link);
    };
    MidwifeSearchComponent = __decorate([
        core_1.Component({
            moduleId:'module.id',
            selector: 'midwife-search',
            templateUrl: 'midwife-search.component.html',
            styleUrls: ['midwife-search.component.css'],
            providers: [midwife_search_service_1.MidwifeSearchService]
        }), 
        __metadata('design:paramtypes', [midwife_search_service_1.MidwifeSearchService, router_1.Router])
    ], MidwifeSearchComponent);
    return MidwifeSearchComponent;
}());
exports.MidwifeSearchComponent = MidwifeSearchComponent;
//# sourceMappingURL=midwife-search.component.js.map