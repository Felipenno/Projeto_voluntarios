import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/Usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
    templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

    usuario: Usuario[] = [];

    constructor(private usuarioService: UsuarioService){

    }

    ngOnInit():void{
        this.listarUsuario();
    }

    listarUsuario(): void{
        this.usuarioService.listarUsuario().subscribe({
            next: usuarios => {
              this.usuario = usuarios;
            },
            error: err => console.log('Error', err)
        })
    }
}