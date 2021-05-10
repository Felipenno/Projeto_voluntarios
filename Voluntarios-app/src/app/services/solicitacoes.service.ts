import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Solicitacoes } from '../models/Solicitacoes'; 
import { Usuario } from '../models/Usuario';


@Injectable({
    providedIn: 'root'
})
export class SolicitacoesService {

    private apiUrl: string = 'http://localhost:8080/'

    constructor(private httpClient: HttpClient) { }

    listarSolicitacoes(): Observable<Solicitacoes[]> {
        return this.httpClient.get<Solicitacoes[]>(`${this.apiUrl}usuario/endereco/solicitacoes`);
    }

    aceitar(): Observable<Solicitacoes[]> {
        return this.httpClient.post<Solicitacoes[]>(`${this.apiUrl}solicitacoes`,Solicitacoes);
    }

    listarStatusAndamento(): Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>(`${this.apiUrl}solicitacoes/aceito/usuario/s`);
    }
}
