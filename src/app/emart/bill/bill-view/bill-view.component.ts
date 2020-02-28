import { Component, OnInit } from '@angular/core';
import { Item } from 'item';
import { EMartService } from '../../e-mart.service';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {
  cartItems:Item[];
  buyerName:string='John';
  buyerId:string='901';
  todayDate:string='18/02/2020';
  buyerContact:string='emart@abc.com';
  amount:number=0;

  constructor(protected emartService:EMartService) { }

  ngOnInit(): void {
    this.cartItems=this.emartService.getAllCart();
    let size=this.cartItems.length;
    for(let i=0;i<size;i++)
    {
      this.amount=this.amount+this.cartItems[i].price
    }
  }

}
