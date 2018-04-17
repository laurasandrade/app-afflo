import {Component,Input} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{OnInit} from '@angular/core'

import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RouterLink ,Router} from '@angular/router';
import { routing } from '../app.routes';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
//Validar password minimo 6 caracteres
export class CadastroComponent implements OnInit {
  http: Http;
  meuForm: FormGroup;
  router : Router;
  email:string;
  senha:string;
 // @Input() nome : string;
  constructor(private fb:FormBuilder,public af:AngularFireAuth) {
   this.senha;
    this.email;
   // this.nome;
    
      this.http;
      this.meuForm =this.fb.group({
        //nome:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
            email:['',Validators.compose([Validators.required, Validators.email])],
            senha:['',Validators.compose([Validators.required,Validators.minLength(6)])],
            confirmaSenha:['',Validators.required]
        });
  }
   

  cadastrar(email:string,senha:string){
    return new Promise<any>((resolve,reject)=>{
    firebase.auth().createUserWithEmailAndPassword(email,senha).then(res=>{
         alert("Cadastro realizado com sucesso!");
         this.router.navigate(['']);
         resolve(res);
         
     },erro => reject(erro))
     alert("Usuário já cadastrado!");
   })
  }

 

  ngOnInit() {

  }
  

}
