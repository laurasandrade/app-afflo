import {Component,Input} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{OnInit} from '@angular/core'
import {AngularFire} from 'angularfire2';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
//Validar password minimo 6 caracteres
export class CadastroComponent implements OnInit {
  http: Http;
  meuForm: FormGroup;
  @Input() email:string;
 @Input senha:string;
  @Input nome : string;
  constructor(private fb:FormBuilder,public af:AngularFire) {
    this.senha;
    this.email;
    this.nome;
    
      this.http;
      this.meuForm =this.fb.group({
        nome:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
            email:['',Validators.compose([Validators.required, Validators.email])],
            senha:['',Validators.compose([Validators.required,Validators.minLength(6)])],
            confirmaSenha:['',Validators.required]
        });
  }
   

   cadastrar(){
     this.af.auth.createUser({email:this.email,password:this.senha}).then((authObj)=>{
        console.log(authObj);
        this.af.database.object("candidato/"+authObj.uid).update({
          email:this.email,
          id: authObj.uid,
          senha: this.senha,
          nome:this.nome
        }).then(()=>{
            window.location.href = '/';
        }).catch(erro=>{
          console.log(erro);
        })
     }).catch((erro)=>{
        console.log(erro);
     })
   }

 

  ngOnInit() {

  }
  

}
