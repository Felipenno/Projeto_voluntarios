import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from "src/app/services/usuario.service";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent implements OnInit {

  usuarioAtual: Usuario = new Usuario();
  usuarioForm: FormGroup;

  //editaFlag: boolean = true ;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  get usuario(): any{
    return this.usuarioForm.controls;
  }

  ngOnInit(): void {
    this.preencherUsuario();
    this.validacao();
  }

  preencherUsuario():void {
    this.usuarioService.pegarUsuario()
    .subscribe({
      next: data => {
        this.usuarioAtual = data;
        this.usuarioForm.patchValue(this.usuarioAtual);
      },
      error: err => console.log("Error: ", err)      
    })
  }

  validacao(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(20)]],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      telefone: ['', [Validators.maxLength(11)]]
    })
  }

  update(): void{
    this.usuarioAtual = this.usuarioForm.value;
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

  /*editar(): void {
    if (this.editaFlag) {
      this.editaFlag= false;
    } else {
      this.editaFlag=true
    }
  }*/
}
