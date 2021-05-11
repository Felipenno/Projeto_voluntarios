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

    listarSolicitacoesAbertas(): Observable<Solicitacoes[]> {
        return this.httpClient.get<Solicitacoes[]>(`${this.apiUrl}usuario/solicitacoes/abertas`);
    }

    //concluido, criado, andamento'
    listarSolicitacoesPorStatus(status: string, tipoUsuario: string): Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>(`${this.apiUrl}solicitacoes/${status}/usuario/${tipoUsuario}`);
    }

    /* aceitar(): Observable<Solicitacoes[]> {
        return this.httpClient.post<Solicitacoes[]>(`${this.apiUrl}solicitacoes`,Solicitacoes);
    } */
}
