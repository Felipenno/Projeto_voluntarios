import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from 'src/app/models/Endereco';
import { AuthService } from 'src/app/services/auth.service';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
 
  endereco: Endereco = new Endereco();
  enderecoForm: FormGroup;
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private enderecoService: EnderecoService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.estaLogado()){
      this.router.navigate(['/home']);
    }
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.validacao();
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

  salvarEndereco():void{
    this.endereco = this.enderecoForm.value;
    this.enderecoService.criarEndereco(this.endereco, this.id).subscribe(
      () => {
        this.toastr.success('Conta criada!', 'Sucesso');
        this.router.navigate(['/usuario/login'])
      },
      (err) =>{
        this.toastr.error('Erro ao finalizar cadastro', 'Algo deu errado');
        console.log(err);
      }
    )
  }

}
