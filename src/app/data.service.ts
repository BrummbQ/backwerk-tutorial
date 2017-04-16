import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    baseUrl = "http://jsonplaceholder.typicode.com";

    constructor(private http: Http) { }

    getCompleteUsers() {
        return Observable.create(observer => {
            Observable.forkJoin(this.getAlbums(), this.getPhotos(), this.getUsers()).
                subscribe(
                    res => {
                        observer.next(this.buildUsers(res));
                        observer.complete();
                    },
                    error => observer.error(error));
        });
    }
    
    private buildUsers(data) {
        let albums = data[0];
        let photos = data[1];
        let users = data[2];

        albums.forEach(album => {
            const photosForAlbum = photos.filter(photo => photo.albumId === album.id);
            album.photos = photosForAlbum;
        });

        users.forEach(user => {
            const albumsForUser = albums.filter(album => album.userId === user.id);
            user.albums = albumsForUser;
        });

        return users;
    }

    getUsers() {
        return this.http
            .get(`${this.baseUrl}/users`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAlbums() {
        return this.http
            .get(`${this.baseUrl}/albums`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPhotos() {
        return this.http
            .get(`${this.baseUrl}/photos`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response) {
        let body = response.json();
        return body || {};
    }

    private handleError(error: Response | any) {
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