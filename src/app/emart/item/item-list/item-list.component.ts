import { Component, OnInit } from '@angular/core';
import { Item } from 'item';
import { EMartService } from '../../e-mart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
allItems:Item[];
  constructor(protected eMart:EMartService,protected router:Router) { }

  ngOnInit(): void {
    this.allItems=this.eMart.getAllItems();
  }
  displayItemDetails(itemID:number){
    this.router.navigate(['/item-display/'+itemID])
  }
}

