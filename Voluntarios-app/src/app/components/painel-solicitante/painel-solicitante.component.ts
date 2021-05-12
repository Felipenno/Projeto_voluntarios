import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import { Usuario } from 'src/app/models/Usuario';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { Constants } from 'src/app/utils/Constants';



@Component({
  selector: 'app-painel-solicitante',
  templateUrl: './painel-solicitante.component.html',
  styleUrls: ['./painel-solicitante.component.css']
})
export class PainelSolicitanteComponent implements OnInit {

  solicitacoes: Usuario[] = []
  solicitacoesConcluidas: Usuario[] = []

  constructor(private router: Router,
    private solicitacoesServico: SolicitacoesService,
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

  }


}
