import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  url: string;
  testData = [{ 'Title': 'Ensi-PalmSprings', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' }, { 'Title': 'Ensi-ilta: Karjamäenjoulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];

  constructor(private httpClient: HttpClient) {
    this.url = "https://www.finnkino.fi/xml/News/";
  }

  // Observable hoitaa asynkronisen operaation
  getData(): Observable<any> {
    // http pyyntö
    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {

        let newsData: any;

        // tässä muunnetaan xml-data json muotoon
        parseString(response, {
          trim: true,
          explicitArray: false,
          mergeAttrs: true
        }, function (err: any, result: any) {
          console.log(JSON.stringify(result.News.NewsArticle));
          newsData = result.News.NewsArticle;
        });

        return newsData;
      }));
  }

  getTestData(): Observable<any> {
    return of(this.testData);
  }
}
