import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('Produto adicionado ao carrinho.', 'OK', {
      duration: 300000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['snackbar'],
    });
  }

  addToCart(product) {
    var productList: any[];

    if (localStorage.getItem('productList')) {
      productList = JSON.parse(localStorage.getItem('productList') || '[{}]')
    } else {
      productList = [];
    }
    product.quantity = 1
    productList.push(product)
    localStorage.setItem('productList', JSON.stringify(productList))
    this.openSnackBar();
  }

}
