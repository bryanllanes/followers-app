import * as tslib_1 from "tslib";
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var GithubFollowersService = /** @class */ (function () {
    function GithubFollowersService(http) {
        this.http = http;
        this._url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    GithubFollowersService.prototype.getFollowers = function () {
        return this.http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    GithubFollowersService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], GithubFollowersService);
    return GithubFollowersService;
}());
export { GithubFollowersService };
//# sourceMappingURL=github-followers.service.js.map