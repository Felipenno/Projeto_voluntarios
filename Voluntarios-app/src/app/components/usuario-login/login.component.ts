import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  token: string;

  loginForm:FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logar():void{
    this.authService.loginUsuario(this.login).subscribe({
      next: data => {
        this.token = data.token;
        console.log("Login >>>>>>>>", data)
      },
      error: err => console.log("Error: ", err)
    })
  }

  


}
