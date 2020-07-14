import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CacheService } from "./cache.service";

@Injectable()
export class DataService {

    constructor(private http: HttpClient,
        public cacheService: CacheService) {

    }

    postData(url: string, body: any): Observable<any> {
        return this.http.post(url, body)
            .map(
                (response: Response) => {
                    return response;
                }).catch(
                    error => {
                        console.log(error);
                        return Observable.throw(error)
                    }
                )
    }

    putData(url: string, body: any): Observable<any> {
        return this.http.put(url, body)
            .map(
                (response: Response) => {
                    return response;
                }).catch(
                    error => {
                        console.log(error);
                        return Observable.throw(error)
                    }
                )
    }

    getDataWithTokens(url: string, params): Observable<any> {
        let httpHeaders = new HttpHeaders();
        const accessToken = JSON.parse(localStorage.getItem('userData')).User.accessToken;
        httpHeaders = httpHeaders.set('Authorization', accessToken);
        httpHeaders.set('Content-Type', 'application/json');
        httpHeaders.append("Access-Control-Allow-Origin", "*");
        httpHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        let options = { headers: httpHeaders }

        return this.http.get(url, { headers: httpHeaders, params: params })
            .map((res: Response) => {
                return res;
            })
            .catch(error => {
                return Observable.throw(error)
            });
    }

}