import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { LoginI } from '../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../modelos/response.interface';

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

  constructor(private api: ApiService, private router: Router) {}
  errorMsj: any;

  ngOnInit(): void {}

  onLogin() {
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
    });*/
  }
/*
  getToken(){
    //return localStorage.get('tkusr');
  }

  getRefresh(){
    //return localStorage.get('rfsh');
  }*/
}
