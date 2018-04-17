import {Component, Inject, Input} from '@angular/core';
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
    router:Router;

  constructor(http: Http, fb : FormBuilder, private loginService: LoginService, router: Router) { 
     this.http = http;
     this.router=router;
		 this.meuForm = fb.group({
		 	email: ['', Validators.required],
		 	senha: ['', Validators.required]
		 });

  }

  fazerLogin(e) {
     // e.preventDefault();
    
      this.loginService.login(this.email, this.senha)
      
     
    
  }
}
