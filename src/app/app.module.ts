import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from "angularfire2/auth";

import { LoginService } from './login.service';

export const firebaseConfig = {

 apiKey: 'AIzaSyCkfcRqpbFF2xyAIWbie9wn2_cFQX5wIsA',
 authDomain: 'angular-bf420.firebaseapp.com',
 databaseURL: 'https://angular-bf420.firebaseio.com',
 storageBucket: 'angular-bf420.appspot.com',
 messagingSenderId: '229553449034'

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

 providers: [
   AngularFireModule,
   AngularFireAuth,
   LoginService
 ],

 bootstrap: [AppComponent]

})

export class AppModule { }