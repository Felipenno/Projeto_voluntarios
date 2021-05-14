import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";
import { Constants } from "../utils/Constants";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{
    
    private apiUrl: string = Constants.HOST;

    constructor(private httpClient: HttpClient){}

    registrarUsuario(usuario: Usuario): Observable<Usuario> {
        return this.httpClient.post<Usuario>(`${this.apiUrl}usuario`, usuario);
    }

    atualizarUsuario(usuario: Usuario): Observable<Usuario>{
        return this.httpClient.put<Usuario>(`${this.apiUrl}usuarios`, usuario);
    }

    pegarUsuario(): Observable<Usuario> {
        return this.httpClient.get<Usuario>(`${this.apiUrl}usuarios/selecionar`)
    }
   
}

