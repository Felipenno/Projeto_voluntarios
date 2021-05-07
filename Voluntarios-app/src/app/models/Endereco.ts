export class Endereco{
    id_endereco: number;
    //fk_id_usuario: number;
    cep: string;
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero: number
    complemento?: string
}