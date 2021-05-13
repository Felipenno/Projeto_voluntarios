import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { UsuarioAtualizarComponent } from './components/usuario-atualizar/usuario-atualizar.component';
import { LoginComponent } from './components/usuario-login/login.component';
import { RegistroComponent } from './components/usuario-registro/registro.component';
import { EnderecoAtualizarComponent } from './components/endereco-atualizar/endereco-atualizar.component';
import { EnderecoComponent } from './components/endereco-criar/endereco.component';
import { UsuarioVoluntarioComponent } from './components/painel-voluntario/usuario-voluntario.component';
import { PainelSolicitanteComponent } from './components/painel-solicitante/painel-solicitante.component';



const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'usuario/login', component: LoginComponent },
  { path: 'usuario/registro/:tipo', component: RegistroComponent },
  { path: 'usuario/endereco/:id', component:EnderecoComponent},
  
  { path :'endereco/atualizar', component: EnderecoAtualizarComponent, canActivate: [AuthGuard]},  
  { path: 'usuario/atualizar', component: UsuarioAtualizarComponent, canActivate: [AuthGuard] },
  { path: 'painel/solicitante', component: PainelSolicitanteComponent, canActivate: [AuthGuard]},
  { path: 'painel/voluntario', component: UsuarioVoluntarioComponent, canActivate: [AuthGuard]},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
