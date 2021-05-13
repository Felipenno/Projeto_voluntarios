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

 /*  mostrarMenu() {
    return this.router.url !== '/usuario/login';
  } */

  logado() {
    return this.authService.estaLogado();
  }

  nomeUsuario() {
    return  localStorage.getItem('username')
  }

  linkPainel(){
    const usuarioPainel = localStorage.getItem('usertype')
    switch(usuarioPainel){
      case 's': this.router.navigate(['/painel/solicitante']); break;
      case 'v': this.router.navigate(['/painel/voluntario']); break;
      default: this.router.navigate(['/home']); break;
    }
    
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
