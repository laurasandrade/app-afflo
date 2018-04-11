import {Component} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{OnInit} from '@angular/core'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
//Validar password minimo 6 caracteres
export class CadastroComponent implements OnInit {
  http: Http;
  meuForm: FormGroup;
  constructor(private fb:FormBuilder) {
      this.http;
     
   }

   
 
/* cadastrar(event){
   event.preventDefault();
   let header = new Headers();
   header.append("Content-type","application/text");
   this.http.post('v1/fotos',JSON.stringify(this.foto),{ headers:header})//metodo post para alteração
        .subscribe(()=>{//executa algo após o envio
            this.foto = new FotoComponent();
            console.log("Foto enviada com sucesso!");
        },erro=>console.log(erro));
 }*/

  ngOnInit() {
    this.meuForm =this.fb.group({
        nome:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
            email:['',Validators.compose([Validators.required, Validators.email])],
            senha:['',Validators.compose([Validators.required,Validators.minLength(6)])],
            confirmaSenha:['',Validators.required]
        });
  }

  

}
