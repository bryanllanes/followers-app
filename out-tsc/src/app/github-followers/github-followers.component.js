import * as tslib_1 from "tslib";
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
var GithubFollowersComponent = /** @class */ (function () {
    function GithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .switchMap(function (combined) {
            var id = combined[0].get('id');
            var page = combined[1].get('page');
            return _this.service.getFollowers();
        })
            .subscribe(function (followers) { return _this.followers = followers; });
    };
    GithubFollowersComponent = tslib_1.__decorate([
        Component({
            selector: 'github-followers',
            templateUrl: './github-followers.component.html',
            styleUrls: ['./github-followers.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            GithubFollowersService])
    ], GithubFollowersComponent);
    return GithubFollowersComponent;
}());
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map