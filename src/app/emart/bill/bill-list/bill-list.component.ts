import { Component, OnInit } from '@angular/core';
import { EMartService } from '../../e-mart.service';
import { Item } from 'item';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
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
