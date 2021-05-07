import { Component, OnInit } from '@angular/core';
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

  repetirSenha:string = '';

  constructor(
    private usuarioService: UsuarioService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    
  }

  ngOnInit():void {
    this.usuario.tipo = this.activatedRoute.snapshot.paramMap.get('tipo');
  }

  salvarUsuario(): void{
    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: data => { 
        console.log("Salvo com sucesso", data)
        this.router.navigate(['/endereco', data.id_usuario])
      },
      error: err => console.log("Error: ", err)
    });

    
  }
  

}
