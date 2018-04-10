import {Component} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	
	meuForm: FormGroup;

  constructor(fb : FormBuilder) { 

		 this.meuForm = fb.group({
		 	email: ['', Validators.required],
		 	senha: ['', Validators.required]
		 });

  }

  ngOnInit() {
  }

}
