import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { BuyerSignupComponent } from './emart/Signup/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/Signup/seller-signup/seller-signup.component';
import { LoginComponent } from './emart/Signup/login/login.component';


const routes: Routes = [{
  path:'item-display/:iId',
  component:ItemDisplayComponent
},
{
  path:'item-list',
  component:ItemListComponent
},
{
  path:'cart-list',
  component:CartListComponent
},
{
  path:'bill-view',
  component:BillViewComponent
},
{
  path:'bill-list',
  component:BillListComponent
},
{
  path:'buyer-signup',
  component:BuyerSignupComponent
},
{
  path:'seller-signup',
  component:SellerSignupComponent
},
{
  path:'login',
  component:LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
