import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoestore';
  totalCart = 0;
  constructor() {
    this.totalCart = JSON.parse(localStorage.getItem('productList') || '[]').length
    this.cartListner();
  }

  cartListner() {
    window.addEventListener('updateCartEvent', () => {
      this.totalCart = JSON.parse(localStorage.getItem('productList') || '[]').length
    })
  }
}
