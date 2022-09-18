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
  
  ngOnInit(): void {
    this.productService.getProductList().subscribe((retorno: any) => {
      this.productList = retorno;
    })
  }

}
