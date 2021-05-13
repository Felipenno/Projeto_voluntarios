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
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.maxLength(15)]],
      telefone: ['', [Validators.maxLength(15)]]
    })
  }

  update(): void{
    this.usuarioAtual = this.usuarioForm.value;
    this.usuarioService.atualizarUsuario(this.usuarioAtual)
    .subscribe({
      next: data => {
        this.toastr.success('Cadastro atualizado com sucesso!', 'Atualizado');
        this.voltaParaPainel();
      },
      error: err => this.toastr.error("Erro ao atualizar ", 'Algo deu errado!')
    });
  }

  voltarPaginaAnterior():void{
    this.voltaParaPainel();
  }

  voltaParaPainel(){
    const usuarioPainel = localStorage.getItem('usertype')
    switch(usuarioPainel){
      case 's': this.router.navigate(['/painel/solicitante']); break;
      case 'v': this.router.navigate(['/painel/voluntario']); break;
      default: this.router.navigate(['/home']); break;
    }
  }
}
