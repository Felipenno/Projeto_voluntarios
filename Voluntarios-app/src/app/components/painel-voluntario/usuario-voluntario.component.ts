import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import { Usuario } from 'src/app/models/Usuario';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { Constants } from 'src/app/utils/Constants';

@Component({
  selector: 'app-usuario-voluntario',
  templateUrl: './usuario-voluntario.component.html',
  styleUrls: ['./usuario-voluntario.component.css']
})
export class UsuarioVoluntarioComponent implements OnInit {
  
  
  solicitacaoAbertas: Solicitacoes[] = []
  solicitacaoAndamento: Usuario[] = []
  solicitacoesConcluidas: Usuario[] = [];

  constructor(
    private solicitacoesService : SolicitacoesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarSolicitacoesAbertas();
    this.listarEmAndamento();
    this.listarConcluidas();
    
  }

  listarSolicitacoesAbertas(): void {
    this.solicitacoesService.listarSolicitacoesAbertas()
    .subscribe(
      data => {
        this.solicitacaoAbertas = data;
        console.log("aberta>>", data)
        console.log("aberta>>", this.solicitacaoAbertas)
      },
      error => {
        console.log(error);
      }
    );
    
  }

  listarEmAndamento(): void {
    this.solicitacoesService.listarSolicitacoesPorStatus(Constants.STATUS_ANDAMENTO, Constants.TIPO_SOLICITANTE)
    .subscribe(
      data => {
        this.solicitacaoAndamento = data;
        console.log("andamento>>", data)
        console.log("andamento>>", this.solicitacaoAndamento)
      },
      error => {
        console.log(error);
      }
    );
  }

  listarConcluidas(): void {
    this.solicitacoesService.listarSolicitacoesPorStatus(Constants.STATUS_CONCLUIDO, Constants.TIPO_SOLICITANTE)
    .subscribe(
      data => {
        this.solicitacoesConcluidas = data;
        console.log("Concluidas>>", data)
        console.log("Concluidas2>>", this.solicitacoesConcluidas)
      },
      error => {
        console.log(error);
      }
    );
  }

  escolherSolicitacao(id: number): void {
    console.log('id:', id)
  }

  cancelarSolicitacao(id: number): void {
    console.log('id:', id)
  }

}
