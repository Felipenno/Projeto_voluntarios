import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco-atualizar',
  templateUrl: './endereco-atualizar.component.html',
  styleUrls: ['./endereco-atualizar.component.css']
})
export class EnderecoAtualizarComponent implements OnInit {

  endereco: Endereco = new Endereco();



  constructor(private enderecoService: EnderecoService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.preencherEndereco()
  }

  preencherEndereco():void{
    this.enderecoService.pegarEndereco().subscribe({
      next: data => {
        this.endereco = data;
      },
      error: err => console.log("Error: ", err)
    })
  }

  voltarPaginaAnterior():void{
    this.router.navigate(['home'])
  }

  atualizarEndereco():void{
    this.enderecoService.atualizarEndereco(this.endereco).subscribe({
      next: data => {
        this.toastr.success('Atualizado com sucesso', 'Atualizado');
        this.router.navigate(['home'])
      },
      error: err => this.toastr.error("Erro ao atualizar ", 'Algo deu errado!')
    })
  }
}
