import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsHttpProvider } from '../../providers/products-http/products-http';

/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  products: [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public productsHttp: ProductsHttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
    this.productsHttp.query().subscribe(data => { this.products = data });
  }

}
