import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { routing } from './app.routes';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
