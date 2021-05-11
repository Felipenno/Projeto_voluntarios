import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';

@Component({
  selector: 'app-painel-solicitante',
  templateUrl: './painel-solicitante.component.html',
  styleUrls: ['./painel-solicitante.component.css']
})
export class PainelSolicitanteComponent implements OnInit {

  solicitacoes: Solicitacoes = new Solicitacoes();

  constructor(private router: Router,
    private solicitacoesServico: SolicitacoesService,
  ) { }

  ngOnInit() {
  }


}
