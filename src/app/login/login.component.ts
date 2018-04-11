import {Component, Inject} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
    moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
	
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
}
