import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{
    
    private apiUrl: string = 'http://localhost:8080/'

    constructor(private httpClient: HttpClient){

    }

    listarUsuario(): Observable<Usuario[]>{
        return this.httpClient.get<Usuario[]>(`${this.apiUrl}usuario`);
    }
}