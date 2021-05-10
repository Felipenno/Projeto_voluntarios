import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Solicitacoes } from '../models/Solicitacoes'; 


@Injectable()
export class SolicitacoesService {

    private apiUrl: string = 'http://localhost:8080/'

    constructor(private httpClient: HttpClient) { }

    listarSolicitacoes(solicitacoes : Solicitacoes): Observable<Solicitacoes> {
        return this.httpClient.get<Solicitacoes>(`${this.apiUrl}`);
    }

}
