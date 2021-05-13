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

    listarSolicitacoes(): Observable<Solicitacoes[]>{
        return this.httpClient.get<Solicitacoes[]>(`${this.apiUrl}solicitacoes`);
    }
    registrarSolitacoes(solicitacoes: Solicitacoes): Observable<Solicitacoes> {
        return this.httpClient.post<Solicitacoes>(`${this.apiUrl}solicitacoes`, solicitacoes);
    }
    atualizarSolicitacoes(solicitacoes: Solicitacoes): Observable<Solicitacoes> {
        return this.httpClient.put<Solicitacoes>(`${this.apiUrl}solicitacoes`, solicitacoes);
    }

    listarSolicitacoesAbertas(): Observable<Solicitacoes[]> {
        return this.httpClient.get<Solicitacoes[]>(`${this.apiUrl}usuario/solicitacoes/abertas`);
    }

    //concluido, criado, andamento'
    listarSolicitacoesPorStatus(status: string, tipoUsuario: string): Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>(`${this.apiUrl}solicitacoes/${status}/usuario/${tipoUsuario}`);
    }

    excluirSolicitacoes(id_solicitacoes: number): Observable<Solicitacoes>{
      return this.httpClient.delete<Solicitacoes>(`${this.apiUrl}solicitacoes/${id_solicitacoes}`);
    }

    adicionarVoluntario(id_solicitacoes: number, solicitacoes: Solicitacoes): Observable<Solicitacoes>{
        return this.httpClient.put<Solicitacoes>(`${this.apiUrl}solicitacoes/adicionar/voluntario/${id_solicitacoes}`, solicitacoes);
    }

    cancelarSolicitacao(id_solicitacoes: number, solicitacoes: Solicitacoes): Observable<Solicitacoes>{
        return this.httpClient.put<Solicitacoes>(`${this.apiUrl}solicitacoes/cancelar/voluntario/${id_solicitacoes}`, solicitacoes);
    }
    
     fimSolicitacao(id_solicitacoes:number, solicitacoes : Solicitacoes): Observable<Solicitacoes>{
        return this.httpClient.put<Solicitacoes>(`${this.apiUrl}solicitacoes/concluir/${id_solicitacoes}`, solicitacoes);
    } 



}
