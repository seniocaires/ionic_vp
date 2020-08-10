import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public produtos;

  constructor(public navCtrl: NavController) {

    this.produtos = [
      {nome: 'Arroz', preco: 100},
      {nome: 'Feijão', preco: 300},
      {nome: 'Macarrão', preco: 400},
      {nome: 'Cuscuz', preco: 100},
      {nome: 'Leite integral', preco: 100},
      {nome: 'Batata doce', preco: 600},
      {nome: 'Maçã', preco: 100},
      {nome: 'Filé de camarão', preco: 1500},
      {nome: 'Pera', preco: 100},
      {nome: 'Suco de caixinha', preco: 100}
    ];
  }

}
