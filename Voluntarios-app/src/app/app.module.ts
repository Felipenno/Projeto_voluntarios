import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AuthInterceptor } from './auth/auth.interceptor';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/usuario-registro/registro.component';
import { LoginComponent } from './components/usuario-login/login.component';
import { UsuarioAtualizarComponent } from './components/usuario-atualizar/usuario-atualizar.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { EnderecoAtualizarComponent } from './components/endereco-atualizar/endereco-atualizar.component';


@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioAtualizarComponent,
    EnderecoComponent,
    HomeComponent,
    EnderecoAtualizarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
