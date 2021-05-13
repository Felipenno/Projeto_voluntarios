import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  enderecoForm: FormGroup

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.preencherEndereco()
    this.validacao()
  }

  get ef(): any {
    return this.enderecoForm.controls;
  }

  validacao(): void {
    this.enderecoForm = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.maxLength(20)]],
      estado: ['', [Validators.required, Validators.maxLength(25)]],
      cidade: ['', [Validators.required, Validators.maxLength(40)]],
      bairro: ['', [Validators.required, Validators.maxLength(25)]],
      rua: ['', [Validators.required, Validators.maxLength(30)]],
      numero: ['', [Validators.required]],
      complemento: ['', [Validators.maxLength(20)]]
    })
  }

  preencherEndereco(): void {
    this.enderecoService.pegarEndereco().subscribe({
      next: data => {
        this.endereco = data;
        this.enderecoForm.patchValue(this.endereco);
      },
      error: err => console.log("Error: ", err)
    })
  }

  atualizarEndereco(): void {
    this.endereco = this.enderecoForm.value;
    this.enderecoService.atualizarEndereco(this.endereco).subscribe({
      next: data => {
        this.toastr.success('Atualizado com sucesso', 'Atualizado');
        this.voltaParaPainel();
      },
      error: err => this.toastr.error("Erro ao atualizar ", 'Algo deu errado!')
    })
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
