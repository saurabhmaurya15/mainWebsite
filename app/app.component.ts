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
		var serviceUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(this.apiUrl);
		this.http.get(serviceUrl)
			.map(res => {console.log(res.json()); return res.json();})
			.subscribe(res=> {
				this.feeds = res;
			});
	}

	openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
	}

	closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}

}