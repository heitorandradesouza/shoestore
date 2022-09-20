import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('Product added to cart.', 'OK', {
      duration: 300000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
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
    window.dispatchEvent(new CustomEvent('updateCartEvent'));
  }

  openProduct(url) {
    let newRouterLink = '/detail/' + url;
    this.router.navigate(['/']).then(() => { this.router.navigate([newRouterLink]); })
  }

}
