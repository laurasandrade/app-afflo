import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAFslbeTC63m9UH39I_G0ujnElbgLctKIQ',
  authDomain: 'app-afflo.firebaseapp.com',
  databaseURL: 'https://app-afflo.firebaseio.com',
  storageBucket: 'app-afflo.appspot.com',
  messagingSenderId: '281776171082'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
