import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  mensagem: string;

  loginForm:FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit() {
    if(this.auth.estaLogado()){
      this.router.navigate(['/home']);
    }
  }

  logar():void{
    this.authService.loginUsuario(this.login).subscribe(
      () => {
        const tipoUsuario = localStorage.getItem('usertype')
        if(tipoUsuario === 's'){
          this.mensagem = 'Logado com sucesso';
          this.router.navigate(['/home']);
        }
        if(tipoUsuario === 'v'){
          this.mensagem = 'Logado com sucesso';
          this.router.navigate(['/home']);
        }
      
      },
      error => {
        this.mensagem = 'Dados incorretos';
      }
    )
  }

  


}
