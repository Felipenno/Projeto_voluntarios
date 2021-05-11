import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/Login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  loginForm:FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder : FormBuilder
  ) { }

  get lf(): any{
    return this.loginForm.controls; 
  }

  ngOnInit() {
    if(this.authService.estaLogado()){
      this.router.navigate(['/home']);
    }

    this.validacao();
  }

  validacao():void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(40), Validators.email]],
      senhaV: ['', [Validators.required, Validators.maxLength(60)]]
    });
  }

  logar():void{
    if(this.loginForm.valid){

      this.login = this.loginForm.value

      this.authService.loginUsuario(this.login).subscribe(
        () => {
          const tipoUsuario = localStorage.getItem('usertype')
          if(tipoUsuario === 's'){
            this.router.navigate(['/home']);
            this.toastr.success('Logado com sucesso', "Sucesso!");
          }
          if(tipoUsuario === 'v'){
            this.router.navigate(['/home']);
            this.toastr.success('Logado com sucesso!', 'Sucesso!');
          }
        
        },
        error => {
          this.toastr.error('Dados incorretos', 'Erro!');
        }
      )
    }
    else(
      this.toastr.error('Dados invalidos', 'Erro!')
    )
    
  }

  

}
