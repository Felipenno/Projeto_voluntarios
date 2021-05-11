import { Usuario } from "./Usuario";

export class Solicitacoes {
  id_solicitacoes?: number ;
  servico?: string;
  descricao_problema?: Text;
  dia?: Date ;
  status?: string;
  data_criacao?: Date;
  data_encerramento?: Date;
  nota?: number;
 
  usuarios: Usuario[]
 
 }

 
