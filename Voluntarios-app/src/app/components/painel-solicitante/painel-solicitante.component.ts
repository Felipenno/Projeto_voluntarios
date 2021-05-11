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

  constructor(private router: Router,
    private solicitacoesServico: SolicitacoesService,
  ) { }

  ngOnInit() {
    this.listarSolicitacoesAceitas()
  }
  listarSolicitacoesAceitas(): void{
    this.solicitacoesServico.listarSolicitacoesPorStatus(Constants.STATUS_CRIADO, Constants.TIPO_VOLUNTARIO)
      .subscribe(
        data => {

          this.solicitacoes = data

        }, error => {
          console.log(error)
        }

      )
  }

}
