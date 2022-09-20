import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  @Input() insideDetail: any;
  productList: any = []
  filterSelected: any = 'reviewDesc';
  ngOnInit(): void {
    this.productService.getProductList().subscribe((retorno: any) => {
      this.productList = retorno;
    })
  }

  sortBy(type) {
    switch (type) {
      case 'reviewDesc':
        this.productList = this.productList.sort((a, b) => b.score - a.score)
        break;
      case 'reviewAsc':
        this.productList = this.productList.sort((a, b) => a.score - b.score)
        break;
      case 'priceDesc':
        this.productList = this.productList.sort((a, b) => b.price - a.price)
        break;
      case 'priceAsc':
        this.productList = this.productList.sort((a, b) => a.price - b.price)
        break;
    }
  }

}
