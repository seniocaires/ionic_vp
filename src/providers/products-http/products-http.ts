import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductsHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsHttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductsHttpProvider Provider');
  }

  query() : Observable<any> {

    const options = {
      responseType: 'json' as const,
    };

    return this.http.get('http://localhost:3000/products', options);
  }

}
