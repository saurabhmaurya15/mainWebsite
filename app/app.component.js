System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http, _jsonp) {
                    this.http = http;
                    this._jsonp = _jsonp;
                    this.feeds = null;
                    this.apiUrl = "http://xkcd.com/rss.xml";
                    this.isLoading = false;
                    this.selected = 'Home';
                    this.zone = new core_1.NgZone({ enableLongStackTrace: false });
                    this.getRssFeed();
                }
                AppComponent.prototype.getRssFeed = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.feeds = null;
                    var serviceUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(this.apiUrl);
                    this.http.get(serviceUrl)
                        .map(function (res) { console.log(res.json()); return res.json(); })
                        .subscribe(function (res) {
                        _this.feeds = res;
                        if (_this.feeds && _this.feeds.items) {
                            var max = _this.feeds.items.length;
                            if (max > 5) {
                                var startIndex = Math.floor(Math.random() * (max - 5)) + 0;
                                _this.feeds.items = _this.feeds.items.splice(startIndex, 5);
                            }
                        }
                        _this.isLoading = false;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/xkcd.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map