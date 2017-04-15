import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    baseUrl = "http://jsonplaceholder.typicode.com";

    constructor (private http: Http) {}

    getUsers () {
        return this.http
            .get(`${this.baseUrl}/users`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAlbums () {
        return this.http
            .get(`${this.baseUrl}/albums`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response) {
        let body = response.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}