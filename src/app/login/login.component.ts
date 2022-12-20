import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { LoginI } from '../models/login.interface';
import { switchMap, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { TokenService } from './../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  private apiUrl = `${environment.API_URL}`;

  constructor(private apiService: ApiService, private router: Router,private http: HttpClient,private tokenService: TokenService) {}
  errorMsj: any;

  ngOnInit(): void {}

  onLogin() {
    console.log("gjhggggggggggggggggg");
    return this.http.post<ResponseI>("/api/token",{username,password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access)),
    );

/*     this.apiService.loginAndGet('1085312659', '123')
    .subscribe(() => {
      this.router.navigate(['/panel']);
    }); */
  }

  logout() {
    this.apiService.logout();
    //this.profile = null;
    this.router.navigate(['/login']);
  }
 /* onLogin() {
      console.log(this.loginForm.value)
/*
    this.api.loginByUser(form).subscribe((res: ResponseI) => {
      let dataResponse: ResponseI = res;
      console.log(dataResponse.access);

      if (dataResponse.access != '') {
        localStorage.setItem('tkusr', dataResponse.access);
        localStorage.setItem('rfsh', dataResponse.refresh);
        this.router.navigate(['panel']);
      } else {
        this.errorMsj = 'credenciales no validas';
      }
    });
  }
/*
  getToken(){
    //return localStorage.get('tkusr');
  }

  getRefresh(){
    //return localStorage.get('rfsh');
  }*/
}
