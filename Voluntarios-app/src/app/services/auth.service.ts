import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Login } from '../models/Login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'http://localhost:8080/'
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  loginUsuario(login: Login): Observable<any> {
    return this.httpClient.post<Login>(`${this.apiUrl}session`, login).pipe(
      map((response: any) => {
        const data = response;
        if (data) {
          localStorage.setItem('token', data.token);
          const userInfo = this.jwtHelper.decodeToken(data.token);

          localStorage.setItem('username', userInfo.nome)
          localStorage.setItem('usertype', userInfo.tipo)
        }
      })
    )

  }

  estaLogado(){
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
