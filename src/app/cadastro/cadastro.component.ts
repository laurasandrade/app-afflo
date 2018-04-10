import {Component} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
//Validar password minimo 6 caracteres
export class CadastroComponent implements OnInit {
  http: Http;
  meuForm: FormGroup;
  constructor(fb:FormBuilder) {
      this.meuForm =fb.group({
          nome:['',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z ]*")])],
          email:['',Validators.compose([Validators.required, Validators.email])],
          senha:['',Validators.compose([Validators.required,Validators.minLength(6)])],
          confirmaSenha:['',Validators.required]
      });
   }
 
 

  ngOnInit() {
  }

}
