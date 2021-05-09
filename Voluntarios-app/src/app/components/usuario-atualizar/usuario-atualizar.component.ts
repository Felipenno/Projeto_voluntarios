import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from "src/app/services/usuario.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent implements OnInit {

  usuarioAtual: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  update(): void{
    this.usuarioService.atualizarUsuario(this.usuarioAtual)
    .subscribe({
      next: data => console.log('Atualizado com sucesso', data),
      error: erro => console.log('Erro', erro)
    });
  }
}
