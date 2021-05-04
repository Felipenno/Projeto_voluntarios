import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path: '', redirectTo: 'usuario', pathMatch:'full'},
  {path: '**', redirectTo: 'usuario', pathMatch:'full'},
  {path: 'usuario', component: UsuarioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
