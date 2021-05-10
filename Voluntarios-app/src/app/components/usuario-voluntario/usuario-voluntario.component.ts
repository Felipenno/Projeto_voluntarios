import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import {Voluntario } from 'src/app/models/Voluntario';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';



@Component({
  selector: 'app-usuario-voluntario',
  templateUrl: './usuario-voluntario.component.html',
  styleUrls: ['./usuario-voluntario.component.css']
})
export class UsuarioVoluntarioComponent implements OnInit {
  
  
  solicitacao: Solicitacoes = new Solicitacoes();
  displayedColumns = ['servico', 'descricao_problema', 'dia']


  constructor(
    private solicitacoesService : SolicitacoesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  listarPorStatus(status: string): void {
    this.solicitacoesService.listarSolicitacoes(this.solicitacao)
    .subscribe(
      data => {
        this.solicitacao = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }

}
