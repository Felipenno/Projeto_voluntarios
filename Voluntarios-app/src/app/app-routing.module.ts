import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioAtualizarComponent } from './components/usuario-atualizar/usuario-atualizar.component';
import { LoginComponent } from './components/usuario-login/login.component';
import { RegistroComponent } from './components/usuario-registro/registro.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro/:tipo', component: RegistroComponent },
  
  { path: 'usuario/atualizar', component: UsuarioAtualizarComponent },
  { path: 'endereco/:id', component:EnderecoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
