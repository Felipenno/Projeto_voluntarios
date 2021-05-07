import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/Login";
import { Usuario } from "../models/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{
    
    private apiUrl: string = 'http://localhost:8080/'

    constructor(private httpClient: HttpClient){

    }

    registrarUsuario(usuario: Usuario): Observable<Usuario>{
        return this.httpClient.post<Usuario>(`${this.apiUrl}usuario`, usuario);
    }

    loginUsuario(login: Login): Observable<any>{
        return this.httpClient.post<Login>(`${this.apiUrl}session`, login)
    }


} //colocar no app.module
