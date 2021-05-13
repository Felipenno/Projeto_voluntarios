import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ValidacaoSenha } from 'src/app/utils/ValidacaoSenha';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  novoUsuario: Usuario = new Usuario();
  usuarioForm: FormGroup;

  registroTipo = 'Registro'

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {

  }

  get usuario(): any {
    return this.usuarioForm.controls;
  }

  ngOnInit(): void {
    if (this.novoUsuario.tipo === 's') {
      this.registroTipo = 'Registrar Como Solicitante'
    }
    if (this.novoUsuario.tipo === 'v') {
      this.registroTipo = 'Registrar Como Voluntário'
    }

    this.validacao();
  }

  criarUsuario(): void {
    this.novoUsuario = this.usuarioForm.value;
    this.novoUsuario.tipo = this.activatedRoute.snapshot.paramMap.get('tipo');

    console.log(this.novoUsuario)
    this.usuarioService.registrarUsuario(this.novoUsuario).subscribe({
      next: data => {
        this.router.navigate(['/usuario/endereco', data.id_usuario])
        this.toastr.info('Agora preencha seu endereço', 'Próximo passo')
      },
      error: err => {
        this.toastr.error('Erro ao criar cadastro', 'Algo deu errado');
        console.log(err);
      }
    });

  }

  validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidacaoSenha.MustMatch('senhaV', 'confirmarSenha')
    };

    this.usuarioForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      telefone: ['', [Validators.minLength(10), Validators.required]],
      senhaV: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
    }, formOptions)
  }

}
