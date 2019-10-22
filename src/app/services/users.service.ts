import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  baseURL = 'https://uifaces.co/api?limit=12';

  constructor(private http: HttpClient) { }

  getRequest(): Observable <any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'X-API-KEY':  '04fafacd6d64ecab8468ec30733e55'
      })
    };

    return this.http.get(this.baseURL, httpOptions );
  }
}