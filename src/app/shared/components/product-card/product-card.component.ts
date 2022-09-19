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
    localStorage.setItem('product', JSON.stringify(product))
    this.openSnackBar();
  }

}
