import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaService } from '../services/cinema.service';

/* Haetaan Finnkinon rajapinnasta elokuvia ja uutisia, kommunikaatio rajapintaan tapahtuu HTTP pyyntöjen avulla */

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public cinemaData$: Observable<any>;

  // muuttujan kautta saadaan servicen palvelut
  constructor(private cinemaService: CinemaService) {
    this.cinemaData$ = this.cinemaService.getData();
  }

  ngOnInit(): void {
  }

}
