import { Component, OnInit } from '@angular/core';
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
  solicitacaoEscolhida: Solicitacoes = new Solicitacoes();
  solicitacaoCancelada: Solicitacoes = new Solicitacoes();

  constructor(
    private solicitacoesService : SolicitacoesService,
  ) { }

  ngOnInit() {
    this.carregarListas();
  }

  carregarListas():void{
    this.listarSolicitacoesAbertas();
    this.listarEmAndamento();
    this.listarConcluidas();
  }

  listarSolicitacoesAbertas(): void {
    this.solicitacoesService.listarSolicitacoesAbertas()
    .subscribe(
      data => {
        this.solicitacaoAbertas = data;
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
      },
      error => {
        console.log(error);
      }
    );
  }

  escolherSolicitacao(id: number): void {
    this.solicitacaoEscolhida = this.solicitacaoAbertas.find(item => item.id_solicitacoes === id);
    this.solicitacaoEscolhida.status = Constants.STATUS_ANDAMENTO;

    this.solicitacoesService.adicionarVoluntario(id, this.solicitacaoEscolhida).subscribe({
      next: data => {
        console.log("adicionar Solicitação >>", data)
        this.carregarListas();
      },
      error: err =>{
        console.log("erro ao adicionar >>", err)
      }
    })
  }

  cancelarSolicitacao(id: number): void {
    this.solicitacaoAndamento.map(item => 
      item.solicitacoes.find(item2 => {
        if(item2.id_solicitacoes == id){
          this.solicitacaoCancelada = item2;
        }
      }));
    
    this.solicitacaoCancelada.status = Constants.STATUS_CRIADO;

    console.log("remove Solicitação >>", this.solicitacaoCancelada)
    this.solicitacoesService.cancelarSolicitacao(id, this.solicitacaoCancelada).subscribe({
      next: data => {
        console.log("remove Solicitação >>", data)
        this.carregarListas();
      },
      error: err =>{
        console.log("erro ao adicionar >>", err)
      }
    });
  }

}
