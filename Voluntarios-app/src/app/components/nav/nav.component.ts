import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  mostrarMenu() {
    return this.router.url !== '/usuario/login';
  }

  logado() {
    return this.authService.estaLogado();
  }

  nomeUsuario() {
    return  localStorage.getItem('username')
  }

  linkPainel(){
    //this.router.navigate(['usuario/painel']);
  }

  linkAtualizarDados(){
    this.router.navigate(['/usuario/atualizar']);
  }

  linkAtualizarEndereco(){
    this.router.navigate(['/endereco/atualizar']);
  }


  linkSair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usertype');
    localStorage.removeItem('username');
    this.router.navigate(['/usuario/login']);
  }

}
