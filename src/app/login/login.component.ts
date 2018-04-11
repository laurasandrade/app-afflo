import {Component, Inject} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {LoginService} from '../login.service'
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  	@Input() email: string;
    @Input() senha: string;

    salvaDados: string = '';
	  meuForm: FormGroup;
    http: Http;

  constructor(http: Http, fb : FormBuilder) { 
     this.http = http;
		 this.meuForm = fb.group({
		 	email: ['', Validators.required],
		 	senha: ['', Validators.required]
		 });

  }


fazerLogin(e) {
   e.preventDefault();
   //chama serviço de login
   this.loginService.login(mail, password);

 }


}
