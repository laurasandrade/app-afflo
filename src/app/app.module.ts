import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    QuestionarioComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
