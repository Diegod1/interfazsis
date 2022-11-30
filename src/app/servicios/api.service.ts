import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //url:string = "/api_generate_token/";
  url: string = 'http://localhost:4300/api/token/';
  response: ResponseI = {
    refresh: '',
    access: '',
  };
  constructor(private http: HttpClient) {}

  loginByUser(form: LoginI): Observable<ResponseI> {
    let direction = this.url;

    return this.http.post<ResponseI>(direction, form);
  }

  profile(tokenAuth: ResponseI) {}
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
}
