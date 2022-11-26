import { Component, OnInit } from '@angular/core';

/* Yksinkertainen sivu, jossa voi vaihtaa kuvan napista painamalla */

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  pagetitle: string = "Harjoittelua";
  itemImageUrl = 'https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg';
  first_name = "Angular";

  changeImg() {
    console.log(this.first_name);
    if (this.itemImageUrl == 'https://cdn.pixabay.com/photo/2019/10/05/19/40/pumpkins-4528653_960_720.jpg') {
      this.itemImageUrl = 'https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg';
    } else {
      this.itemImageUrl = 'https://cdn.pixabay.com/photo/2019/10/05/19/40/pumpkins-4528653_960_720.jpg'
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
