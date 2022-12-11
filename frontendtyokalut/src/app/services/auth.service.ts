import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

/*Service kutsuu firebasea*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => { // user on nyt vain muuttuja
      let userEmail = user?.email as string;
      if (user != null) {
        this.userEmail.next(userEmail); //userEmailiin tallennetaan kayttajan email
      }
    });
  }

  login(email: string, passwrd: string) {
    console.log(email, passwrd);
    return this.afAuth.signInWithEmailAndPassword(email, passwrd)
      .then(result => {
        this.userEmail.next(email);
        // console.log("toimii");
        this.router.navigate(['admin']);
      })
      .catch((error) => {
        console.log(error.message)
        alert("Wrong credentials")
      });
  }

  logout(): void {
    // funktiota kutsutaan kun klikataan logout
    this.afAuth.signOut()
      .then(() => {
        this.userEmail.next(""); // toolbarista poistetaan kirjautuneen kayttajan tiedot
        this.router.navigate(['calculator']); // navigoidaan komponenttiin eli pois
      });
  }

  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser() {
    // palauttaa kirjautuneen kayttajan spostin
    // eli se näkyy toolbarissa jos olet kirjautunut
    return this.userEmail;
  }

}
