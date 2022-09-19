import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  productList: any[] = []
  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('productList') || '[]')
  }

  saveCart() {
    localStorage.setItem('productList', JSON.stringify(this.productList))
  }

  removeProduct(product) {
    this.productList = this.productList.filter(item => item != product)
    this.saveCart();
  }

  subtract(product) {
    if (product.quantity > 1)
      product.quantity = product.quantity - 1
    this.saveCart();
  }

  add(product) {
    product.quantity = product.quantity + 1
    this.saveCart();
  }

}
