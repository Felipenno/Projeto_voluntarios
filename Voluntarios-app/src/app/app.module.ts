import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AuthInterceptor } from './auth/auth.interceptor';
=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

>>>>>>> Mariana

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/usuario-registro/registro.component';
import { LoginComponent } from './components/usuario-login/login.component';
import { UsuarioAtualizarComponent } from './components/usuario-atualizar/usuario-atualizar.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { NavComponent } from './components/nav/nav.component';
import { EnderecoAtualizarComponent } from './components/endereco-atualizar/endereco-atualizar.component';
import { EnderecoComponent } from './components/endereco-criar/endereco.component';
=======
import { UsuarioVoluntarioComponent } from  './components/usuario-voluntario/usuario-voluntario.component';

>>>>>>> Mariana


@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioAtualizarComponent,
    EnderecoComponent,
    HomeComponent,
<<<<<<< HEAD
    EnderecoAtualizarComponent
=======
    UsuarioVoluntarioComponent,
   

>>>>>>> Mariana

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
   }
=======
    MatTableModule
   
>>>>>>> Mariana
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
