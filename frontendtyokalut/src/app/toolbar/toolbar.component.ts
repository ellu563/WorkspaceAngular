import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  userEmail$: Observable<any>;

  loginText = "Sign in";
  logOut = "Sign out";

  constructor(public authService: AuthService) {
    this.userEmail$ = this.authService.checkLoggedInUser();
  }

  // logggoutissa pitää kutsua authServicen logout metodia
  logggOut(): any {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
