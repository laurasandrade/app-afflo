import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { routing } from './app.routes';
import { CadastroService } from './cadastro.service';
//import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCsmK1EsJqyk-2ZwalX9vps9SnhK29SzL0",
    authDomain: "teste-cadastro-mvp.firebaseapp.com",
    databaseURL: "https://teste-cadastro-mvp.firebaseio.com",
    projectId: "teste-cadastro-mvp",
    storageBucket: "teste-cadastro-mvp.appspot.com",
    messagingSenderId: "1032867656774"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent
    ],
  imports: [
    BrowserModule,
    routing,FormsModule,ReactiveFormsModule,
   // AngularFireModule.initializeApp(firebaseConfig),CadastroService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
