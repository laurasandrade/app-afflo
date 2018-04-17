import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {

 user: Observable<firebase.User>;

 constructor(public afAuth: AngularFireAuth) {
   this.user = afAuth.authState
 }


  public login(mail: string, password: string) {
   return new Promise((resolve, reject) => {
     this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
      // localStorage.setItem('token', JSON.stringify({ email: mail }));
       // var tokenstr = localStorage.getItem('token');
       // var token = JSON.parse(tokenstr);
       // token.email;
       console.log('Consegui logar');
     })

     .catch((error) => {
       console.log(error);
       console.log('Não consegui logar');
     });
   })
 }


 public logout() {
   return this.afAuth.auth.signOut();
 }

}