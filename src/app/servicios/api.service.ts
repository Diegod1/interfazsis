import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { environment } from './../../environments/environment';
import { LoginI } from '../models/login.interface';
import { User } from '../models/user';
import { TokenService } from './../services/token.service';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `${environment.API_URL}`;
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }



  login(username: string, password: string) {

    return this.http.post<ResponseI>(`${this.apiUrl}/api/token`, {"username":"1085312659","password":"123"})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access)),
    );
  }

  getProfile() {
    console.log("se ha logueado")
    // return this.http.get<User>(`${this.apiUrl}/profile`)
    // .pipe(
    //   tap(user => this.user.next(user))
    // );
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
  }

  logout() {
    this.tokenService.removeToken();
    this.user.next(null);
  }
}



/* import { Injectable } from '@angular/core';
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
} */
