import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  productList: any[] = []
  total: any = 0;
  desconto: any = 0;
  frete: any = 25;
  subtotal: any = 0;

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('productList') || '[]')
    this.updateCart();
  }

  saveCart() {
    this.updateCart();
    localStorage.setItem('productList', JSON.stringify(this.productList))
    window.dispatchEvent(new CustomEvent('updateCartEvent'));
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

  updateCart() {
    let subtotal = 0
    this.subtotal = this.productList.forEach(product => {
      subtotal = subtotal + (product.price * product.quantity)
    })
    this.subtotal = subtotal;
    this.total = this.subtotal + this.frete;
  }

}
