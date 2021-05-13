import { SolicitacoesService } from './../../services/solicitacoes.service';
import { Component, OnInit } from '@angular/core';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import { Usuario } from 'src/app/models/Usuario';
import { Constants } from 'src/app/utils/Constants';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-painel-solicitante',
  templateUrl: './painel-solicitante.component.html',
  styleUrls: ['./painel-solicitante.component.css']
})
export class PainelSolicitanteComponent implements OnInit {

  solicitacoesAbertas: Usuario[] = []
  solicitacoesCriadas: Solicitacoes[] = []
  solicitacoesConcluidas: Usuario[] = []

  novaSolicitacao: Solicitacoes = new Solicitacoes()
  atualizaSolicitacao: Solicitacoes = new Solicitacoes()
  notaSolicitacao = 0;

  novaSolicitacaoForm: FormGroup;

  constructor(
    private solicitacoesServico: SolicitacoesService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  get sf(): any {
    return this.novaSolicitacaoForm.controls;
  }

  ngOnInit() {
    this.carregarListas();
    this.validacao();
  }

  carregarListas(): void {
    this.listarSolicitacoesCriadas();
    this.listarSolicitacoesAceitas();
    this.listarSolicitacoesConcluidas();
  }

  listarSolicitacoesAceitas(): void {
    this.solicitacoesServico.listarSolicitacoesPorStatus(Constants.STATUS_ANDAMENTO, Constants.TIPO_VOLUNTARIO).subscribe({
      next: data => {
        this.solicitacoesAbertas = data
      },
      error: err => {
        console.log(err)
      }
    });
  }


  listarSolicitacoesConcluidas(): void {
    this.solicitacoesServico.listarSolicitacoesPorStatus(Constants.STATUS_CONCLUIDO, Constants.TIPO_VOLUNTARIO).subscribe({
      next: data => {
        this.solicitacoesConcluidas = data
      },
      error: err => {
        console.log(err)
      }
    });
  }

  listarSolicitacoesCriadas(): void {
    this.solicitacoesServico.listarSolicitacoes().subscribe({
      next: data => {
        this.solicitacoesCriadas = data
      },
      error: err => {
        console.log(err)
      }
    });
  }

  concluirSolicitacao(id: number): void {
    this.solicitacoesAbertas.map(item =>
      item.solicitacoes.find(item2 => {
        if (item2.id_solicitacoes == id) {
          this.atualizaSolicitacao = item2
        }
      })
    )
    this.atualizaSolicitacao.status = Constants.STATUS_CONCLUIDO
    this.atualizaSolicitacao.nota = this.notaSolicitacao
    this.atualizaSolicitacao.data_encerramento = new Date(Date.now())
    this.solicitacoesServico.fimSolicitacao(this.atualizaSolicitacao.id_solicitacoes, this.atualizaSolicitacao)
      .subscribe({
        next: data => {
          this.toastr.success('Solitacao Concluída')
          this.carregarListas();
        },
        error: err => {
          this.toastr.error("Erro ao concluir solicitação", "Algo deu errado")
          console.log(err)
        }


      })

  }

  cancelarSolicitacao(id: number): void {
    this.solicitacoesServico.excluirSolicitacoes(id)
      .subscribe({
        next: data => {
          this.toastr.success('Solicitacão Excluida')
          this.carregarListas();
        },
        error: err => this.toastr.error('Algo deu errado!')
      })
  }


  criarSolicitacao(): void {
    this.novaSolicitacao = this.novaSolicitacaoForm.value;
    this.novaSolicitacao.data_criacao = new Date(Date.now());
    this.novaSolicitacao.status = Constants.STATUS_CRIADO

    this.solicitacoesServico.registrarSolitacoes(this.novaSolicitacao).subscribe(
      () => {
        this.toastr.success("Solicitação criada com sucesso!", "Atualizado");
        this.carregarListas();
      },
      (err) => {
        this.toastr.error("Erro ao criar solicitação", "Algo deu errado");
        console.log(err);
      }
    );
  }

  validacao(): void {
    this.novaSolicitacaoForm = this.formBuilder.group({
      servico: ['', [Validators.required]],
      dia: ['', [Validators.required]],
      descricao_problema: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],

    });
  }
}
