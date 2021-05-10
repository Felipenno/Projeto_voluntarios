import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacoes } from 'src/app/models/Solicitacoes';
import { Usuario } from 'src/app/models/Usuario';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';



@Component({
  selector: 'app-usuario-voluntario',
  templateUrl: './usuario-voluntario.component.html',
  styleUrls: ['./usuario-voluntario.component.css']
})
export class UsuarioVoluntarioComponent implements OnInit {
  
  
  solicitacao: Solicitacoes[] = []
  solicitacaoAndamento: Usuario[] = []


  constructor(
    private solicitacoesService : SolicitacoesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarSolicitacoesAbertas();
    this.listarEmAndamento();
    
  }

  listarSolicitacoesAbertas(): void {
    this.solicitacoesService.listarSolicitacoes()
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

  aceitarSolicitacao(): void {
    this.solicitacoesService.aceitar()
    .subscribe
     data => {
       this.router.navigate(['/']);

      }
    
   

  }

  listarEmAndamento(): void {
    this.solicitacoesService.listarStatusAndamento()
    .subscribe(
      data => {
        this.solicitacaoAndamento = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }

}
