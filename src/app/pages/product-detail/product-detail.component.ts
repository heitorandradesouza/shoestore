import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  product: any = {}
  ngOnInit(): void {
    this.productService.getProductDetail(this.route.snapshot.paramMap.get('url')).subscribe(retorno => {
      this.product = retorno
    })
  }
}
