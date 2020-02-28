import { Component, OnInit } from '@angular/core';
import { EMartService } from '../../e-mart.service';
import { Item } from 'item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
cartItems:Item[];
  constructor(protected emartService:EMartService) { }

  ngOnInit(): void {
    //this.cart=this.emartService.getAllCart();
this.cartItems=this.emartService.getAllCart();
  }
deleteCartItem(itemNo:number){
  this.emartService.deleteCartItem(itemNo);
  this.cartItems=this.emartService.getAllCart();
}
}
