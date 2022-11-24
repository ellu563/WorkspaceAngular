import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  url: string;

  constructor() {
    this.url = "https://www.finnkino.fi/xml/";
  }

}
