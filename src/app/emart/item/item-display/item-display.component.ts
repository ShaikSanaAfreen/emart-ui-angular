import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'item';
import { EMartService } from '../../e-mart.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
item:Item;
  constructor(protected activatedRoute:ActivatedRoute,protected emartService:EMartService,protected router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('iId');
        this.item=this.emartService.getItem(id);
      }
    );
  }
addToCart(itemId:number)
{
  this.emartService.addToCart(itemId);
  this.router.navigate(['item-list']);
}
}
