import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../buyer';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // users: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    throw new Error('Method not implemented.');
  }

}
