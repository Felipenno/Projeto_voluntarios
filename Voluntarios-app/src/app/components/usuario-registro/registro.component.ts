import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario = new Usuario();
  confirmarSenha: string;
  registroTipo = 'Registro'

  registroForm:FormGroup;

  constructor(
    private usuarioService: UsuarioService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    
  }

  ngOnInit():void {
    this.usuario.tipo = this.activatedRoute.snapshot.paramMap.get('tipo');

    if(this.usuario.tipo === 's'){
      this.registroTipo = 'Registrar Como Solicitante'
    }
    if(this.usuario.tipo === 'v'){
      this.registroTipo = 'Registrar Como Voluntário'
    }
  }

  criarUsuario(): void{
    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: data => { 
        this.router.navigate(['/usuario/endereco', data.id_usuario])
      },
      error: err => console.log("Error: ", err)
    });

    
  }
  

}
