import {Component, NgZone} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, Jsonp} from 'angular2/http';
import 'rxjs/Rx';


@Component({
    selector: 'my-app',
    templateUrl: 'app/xkcd.html'
})
export class AppComponent { 
	private zone: NgZone;
	public feeds = null;
	public apiUrl = "http://xkcd.com/rss.xml";

	constructor(private http: Http, private _jsonp: Jsonp){
		this.zone = new NgZone({ enableLongStackTrace: false });
		this.getRssFeed();
	}


	getRssFeed() {
		var serviceUrl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSONP_CALLBACK&q=' + encodeURIComponent(this.apiUrl);
		this._jsonp.get(serviceUrl)
			.map(res => {console.log(res._body.responseData.feed); return res._body.responseData.feed})
			.subscribe(res=> {
				this.feeds = res;
			});
	}

}