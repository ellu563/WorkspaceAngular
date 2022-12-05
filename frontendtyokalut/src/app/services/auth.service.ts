import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, passwrd: string) { }

  logout() { }

  getLoggedInUser(): any { }

  checkLoggedInUser() { }

}
