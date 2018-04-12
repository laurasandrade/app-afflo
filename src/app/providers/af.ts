import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class AF {
 

  constructor(public af: AngularFire) {
    
   
   
  }

    registerUser(email, password) {
        console.log(email)
        return this.af.auth.createUser({
        email: email,
        password: password
        });


    }
}


