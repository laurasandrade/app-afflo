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

     })

     .catch((error) => {

       // this.router.navigate(['/login']);

     });

   })

   .catch((error) => {

   });

 }



 public logout() {

   return this.afAuth.auth.signOut();

 }

}