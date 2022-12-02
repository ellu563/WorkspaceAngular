import { Pipe, PipeTransform } from '@angular/core';

/* Pipe tehty search baria varten */

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();
    // jos se sisältää hakusanan, eli etsitään nyt Title/PublishDate
    return items.filter(it => {
      return (it.Title.toLocaleLowerCase().includes(searchText) || it.PublishDate.includes(searchText));
    });

    /*
    console.log("Taulukon 1 objekti merkkijonona : " + JSON.stringify(items[0]));
    console.log("Hakusana" + searchText);*/
  }

}
