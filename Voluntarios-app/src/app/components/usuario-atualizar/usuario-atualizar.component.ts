import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from "src/app/services/usuario.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent implements OnInit {

  usuarioAtual: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.preencherUsuario();
  }


  preencherUsuario():void {
    this.usuarioService.pegarUsuario()
    .subscribe({
      next: data => {
        this.usuarioAtual = data;
      },
      error: err => console.log("Error: ", err)      
    })
  }

  update(): void{
    this.usuarioService.atualizarUsuario(this.usuarioAtual)
    .subscribe({
      next: data => {
        this.toastr.success('Cadastro atualizado com sucesso!', 'Atualizado');
      },
      error: err => this.toastr.error("Erro ao atualizar ", 'Algo deu errado!')
    });
  }

  voltarPaginaAnterior():void{
    this.router.navigate(['home'])
  }
}
