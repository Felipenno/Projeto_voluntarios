import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endereco } from "../models/Endereco";
import { Constants } from "../utils/Constants";

@Injectable({
    providedIn: 'root'
})
export class EnderecoService{
    
    private apiUrl: string = Constants.HOST;

    constructor(private httpClient: HttpClient){}

    criarEndereco(endereco:Endereco, id: number): Observable<Endereco>{
        return this.httpClient.post<Endereco>(`${this.apiUrl}endereco/${id}`, endereco);
    }
    atualizarEndereco(endereco: Endereco): Observable<Endereco>{
        return this.httpClient.put<Endereco>(`${this.apiUrl}enderecos`, endereco);
    }
    pegarEndereco(): Observable<Endereco>{
        return this.httpClient.get<Endereco>(`${this.apiUrl}endereco/selecionar`)
    }
    
}