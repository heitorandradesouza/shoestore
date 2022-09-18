import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProductList() {
    return this.httpClient.get("./assets/data/product-list.json")
  }

  getProductDetail(id: any) {
    return this.httpClient.get(`./assets/data/${id}.json`)
  }
}
