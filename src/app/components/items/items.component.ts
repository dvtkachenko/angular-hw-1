import { Component, OnInit } from '@angular/core';
import { Item } from './model/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
//  templateUrl: './items-2.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [
    {
      name: "TV Samsung UE32MU5100",
      price: "$600",
      info: "This is a LED TV",
      isReviewShowed: false,
      reviews:  
      [ 
        {
          userName: "Andrey",
          text: "It is good TV, but screen is a little"
        },
        {
          userName: "Bob",
          text: "There is no Smart TV."
        }
      ]
    },
    {
      name: "TV Samsung UE49MU7100",
      price: "$1200",
      info: "This is a top level model",
      isReviewShowed: false,
      reviews:  
      [ 
        {
          userName: "Aleksandr",
          text: "Very good TV, but a too expensive, I bought another model"
        },
        {
          userName: "Anton",
          text: "I bought it two months ago. There are no any defects"
        }
      ]
    },
    {
      name: "Sony KDL-32WE",
      price: "$400",
      info: "Led TV",
      isReviewShowed: false,
      reviews:  
      [ 
        {
          userName: "Tanya",
          text: "I bought it two months ago. There are no any defects"
        },
        {
          userName: "Vlad",
          text: "It is ugly. Screen is too small. It is not fashion"
        }
      ]
    },
    {
      name: "Notebook ASUS FX503VD",
      price: "$800",
      info: "Screen 15.6 IPS (1920x1080)/Intel Core i5/RAM 8 ГБ/SSHD 1 ТБ",
      isReviewShowed: false,
      reviews:  
      [ 
        {
          userName: "Oksana",
          text: "Good choice"
        },
        {
          userName: "Sam",
          text: "I do not like ASUS, I prefer Toshiba"
        }
      ]
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  deleteItem(index: number) {
    this.items.splice(index, 1)
  }
}
