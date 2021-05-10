import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Solicitacoes } from '../models/Solicitacoes';


@Injectable({
    providedIn: 'root'
})
export class SolicitacoesService {

    private apiUrl: string = 'http://localhost:8080/'

    constructor(private httpClient: HttpClient) { }

    listarSolicitacoes(solicitacoes : Solicitacoes): Observable<Solicitacoes> {
        return this.httpClient.get<Solicitacoes>(`${this.apiUrl}solicitacoes`);
  }
    registrarSolitacoes(solicitacoes: Solicitacoes): Observable<Solicitacoes> {
    return this.httpClient.post<Solicitacoes>(`${this.apiUrl} solicitacoes`, solicitacoes);
  }
    atualizarSolicitacoes(solicitacoes: Solicitacoes): Observable<Solicitacoes>{
    return this.httpClient.put<Solicitacoes>(`${this.apiUrl}solicitacoes`, solicitacoes);
  }


}
