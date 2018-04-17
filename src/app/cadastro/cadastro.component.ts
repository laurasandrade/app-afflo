import {Component,Input} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{OnInit} from '@angular/core'

import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ActivatedRoute ,Router} from '@angular/router';
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
  route : ActivatedRoute;
  router : Router;
  email:string;
  senha:string;
 // @Input() nome : string;
  constructor(private fb:FormBuilder,public af:AngularFireAuth,route:ActivatedRoute,router:Router) {
   this.senha;
    this.email;
   // this.nome;
    this.route=route;
    this.router=router;
      this.http;
      this.meuForm =this.fb.group({
        //nome:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
            email:['',Validators.compose([Validators.required, Validators.email])],
            senha:['',Validators.compose([Validators.required,Validators.minLength(6)])],
            confirmaSenha:['',Validators.required]
        });
  }
   

  cadastrar(email,senha){
    return new Promise<any>((resolve,reject)=>{
    firebase.auth().createUserWithEmailAndPassword(email,senha).then(res=>{
      
         alert("Cadastro realizado com sucesso!");
         
         resolve(res);
         this.router.navigate(['']);
     },erro => reject(erro))
    // alert("Usuário já cadastrado!");
   })
  }

 

  ngOnInit() {

  }
  

}
