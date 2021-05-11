import { Endereco } from "./Endereco";
import { Solicitacoes } from "./Solicitacoes";

export class Usuario {
    id_usuario: number;
    nome: string;
    email: string;
    senhaV: string;
    telefone: string;
    cpf: string;
    tipo: string;

    endereco: Endereco
    solicitacoes: Solicitacoes[]
    
}