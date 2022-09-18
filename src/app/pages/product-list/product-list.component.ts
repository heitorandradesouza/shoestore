import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  productList: any = [
    {
      name: 'Nike 01',
      price: '236',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Nike Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    },
    {
      name: 'Adidas 01',
      price: '180',
      primarayColor: '#000000',
      secondaryColor: '#c58b25',
      score: 5,
      img: 'Green Shoe.png'
    }
  ]

  ngOnInit(): void {
  }

}
