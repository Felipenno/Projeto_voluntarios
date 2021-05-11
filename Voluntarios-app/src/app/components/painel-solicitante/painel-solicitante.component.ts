import { SolicitacoesService } from './../../services/solicitacoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import { Usuario } from 'src/app/models/Usuario';
import { Constants } from 'src/app/utils/Constants';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-painel-solicitante',
  templateUrl: './painel-solicitante.component.html',
  styleUrls: ['./painel-solicitante.component.css']
})
export class PainelSolicitanteComponent implements OnInit {

  solicitacoes: Usuario[] = []
  solicitacoesConcluidas: Usuario[] = []
  novaSolicitacao: Solicitacoes = new Solicitacoes()


  constructor(private router: Router,
    private solicitacoesServico: SolicitacoesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.listarSolicitacoesAceitas()
    this.listarSolicitacoesConcluidas();
  }

  listarSolicitacoesAceitas(): void{
    this.solicitacoesServico.listarSolicitacoesPorStatus(Constants.STATUS_ANDAMENTO, Constants.TIPO_VOLUNTARIO)
      .subscribe(
        data => {

          this.solicitacoes = data
          console.log( "aceitas",this.solicitacoes = data
            )

        }, error => {
          console.log(error)
        }

      )
  }

  listarSolicitacoesConcluidas(): void{
    this.solicitacoesServico.listarSolicitacoesPorStatus(Constants.STATUS_CONCLUIDO, Constants.TIPO_VOLUNTARIO)
      .subscribe(
        data => {
          this.solicitacoesConcluidas = data
          console.log( "aceitas",this.solicitacoesConcluidas = data
            )

        }, error => {
          console.log(error)
        }

      )
  }

  concluirSolicitacao(): void{

  }

  cancelarSolicitacao(): void{
    
  }

  
  criarSolicitacao(): void{
    this.novaSolicitacao.data_criacao = new Date("2021/11/05");
    this.novaSolicitacao.status = "Criado!"


    this.solicitacoesServico.registrarSolitacoes(this.novaSolicitacao).subscribe({
      next: data =>{
        this.toastr.success("Solicitação criada com sucesso!", "Atualizado");
        console.log(data);
        console.log(this.novaSolicitacao);
      },
      error: err => this.toastr.error("Erro ao criar solicitação", "Algo deu errado")
    
    })

}}
