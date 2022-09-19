import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList: any = []
  filterSelected: any = 'default';
  ngOnInit(): void {
    this.productService.getProductList().subscribe((retorno: any) => {
      this.productList = retorno;
    })
  }

  sortBy(type) {
    switch (type) {
      case 'review':
        this.productList = this.productList.sort((a, b) => b.score - a.score)
        break;
      case 'price':
        this.productList = this.productList.sort((a, b) => a.price - b.price)
        break;
      case 'default':
        break;
    }
  }

}
