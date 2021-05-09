import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private router: Router) { }

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
        console.log("Atualizado com sucesso!", data);
        this.router.navigate(['home'])
      },
      error: err => console.log("Error: ", err)
    })
  }
}
