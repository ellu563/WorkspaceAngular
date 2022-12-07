import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => { // user on nyt vain muuttuja
      let userEmail = user?.email as string;
      if (user != null) {
        this.userEmail.next(userEmail);
      }
    });
  }

  login(email: string, passwrd: string) {
    console.log(email, passwrd);
    return this.afAuth.signInWithEmailAndPassword(email, passwrd)
      .then(result => {
        this.userEmail.next(email);
        console.log("haloo nyt toimii");
        this.router.navigate(['admin']);

      })
      .catch((error) => {
        console.log("error error haloo")
        console.log(error.message)
      });
  }

  logout() { }

  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser() { }

}
