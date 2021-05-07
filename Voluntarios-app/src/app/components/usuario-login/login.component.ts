import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  token: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  logar():void{
    this.usuarioService.loginUsuario(this.login).subscribe({
      next: data => {
        this.token = data.token;
        console.log("Login >>>>>>>>", data)
      },
      error: err => console.log("Error: ", err)
    })
  }

  


}
