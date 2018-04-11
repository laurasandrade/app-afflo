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

       localStorage['token'] = user.uid;

       console.log('consegui logar');

     })

     .catch((error) => {

       console.log(error);

       console.log('não consegui logar');

     });

   })

   .catch((error) => {

     console.log(error);

     console.log('não consegui logar');

   });

 }



 public logout() {

   return this.afAuth.auth.signOut();

 }

}