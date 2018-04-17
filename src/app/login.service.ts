import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
@Injectable()

export class LoginService {

 user: Observable<firebase.User>;
 router:Router;
 constructor(public afAuth: AngularFireAuth,router:Router) {
   this.user = afAuth.authState
   this.router=router;
 }


  public login(mail: string, password: string) {
   return new Promise((resolve, reject) => {
     this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
      // localStorage.setItem('token', JSON.stringify({ email: mail }));
       // var tokenstr = localStorage.getItem('token');
       // var token = JSON.parse(tokenstr);
       // token.email;
       this.router.navigate(['questionario']);
       console.log('Consegui logar');
       window.localStorage.setItem('usuario', mail);
     })

     .catch((error) => {
       console.log(error);
       alert("Usuário não cadastrado!");
       console.log('Não consegui logar');
     });
   })
 }


 public logout() {
   return this.afAuth.auth.signOut();
 }

}