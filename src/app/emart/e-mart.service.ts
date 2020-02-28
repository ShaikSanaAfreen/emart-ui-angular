import { Injectable } from '@angular/core';
import { Category } from 'category';
import { Item } from 'item';
import { subCategory } from 'sub-category';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Cart } from 'cart';
import { Buyer } from 'buyer';
import { Seller } from 'seller';

@Injectable({
  providedIn: 'root'
})
export class EMartService {
categories:Category[];
subCategories:subCategory[];
items:Item[];
cartItems:Item[];
allBuyers:Buyer[
  
];
allSellers:Seller[];
  constructor() {
   this.allBuyers=[
    {
      id:101,
      username:'sana',
      password:'123',
      email:'sana@gmail.com',
      mobile:8247867665,
      date:'19-02-2020'
    },
    {
      id:102,
      username:'ash',
      password:'123',
      email:'ash@gmail.com',
      mobile:8639207332,
      date:'19-02-2020'
    }
   ];
   this.allSellers=[
     {id:201,
    username:'gayathri',
    password:'123',
    company:'abc',
    gst:'12%',
    brief:"abc solutions",
    address:'kurnool',
    email:'gayii@gmail.com',
    website:'abc.com',
contact:984822252
     },
     {id:202,
      username:'Shanthi',
      password:'sha',
      company:'xyz',
      gst:'11%',
      brief:"xyz solutions",
      address:'Chennai',
      email:'shan@gmail.com',
      website:'xyz.com',
  contact:9876543210
       }
];
    this.categories=[{
    id:401,
    name:'Electronics',
    brief:'Different electronics like TV,Wahing Machines etc'
    },
  {
    id:402,
    name:'Mobiles',
    brief:'Different mobiles like Smartphones,Tablets etc'
  },
  {
    id:403,
    name:'Clothes',
    brief:'Different clothes like Womens wear,Mens wear etc'
  }
  ];
  this.subCategories=[{
      id:501,
      name:'TV',
      categoryId:401,
      brief:'description',
      gstPercent:4
    },
{
      id:502,
      name:'Washing Machine',
      categoryId:401,
      brief:'description',
      gstPercent:3
},
{
      id:503,
      name:'Smartphones',
      categoryId:402,
      brief:'description',
      gstPercent:4
},
{
  id:504,
  name:'Tablets',
  categoryId:402,
  brief:'description',
  gstPercent:3
},
{
  id:505,
  name:'Womens wear',
  categoryId:403,
  brief:'description',
  gstPercent:3
},
{
  id:506,
  name:'Mens wear',
  categoryId:403,
  brief:'description',
  gstPercent:3
}
  ];
  this.items=[{
    id:601,
    subcategoryId:501,
    categoryId:401,
    price:20000,
    name:'SAMSUNG TV',
    description:'Wide screen',
    stock:10,
    remarks:'GOOD',
    image:'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
{
  id:602,
  subcategoryId:501,
  categoryId:401,
  price:25000,
  name:'LG TV',
  description:'3D Screen',
  stock:8,
  remarks:'GOOD',
  image:'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},
{
  id:603,
  subcategoryId:502,
  categoryId:401,
  price:15000,
  name:'Haier',
  description:'Automatic WM',
  stock:17,
  remarks:'GOOD',
  image:'https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},
{
  id:604,
  subcategoryId:502,
  categoryId:401,
  price:30000,
  name:'LG WM',
  description:'works fast',
  stock:8,
  remarks:'GOOD',
  image:'https://images.unsplash.com/photo-1532916697008-5bc24f95592a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},
{
  id:605,
  subcategoryId:503,
  categoryId:402,
  price:90000,
  name:'iphone11 pro',
  description:'iphone',
  stock:8,
  remarks:'GOOD',
  image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},
{
  id:606,
  subcategoryId:503,
  categoryId:402,
  price:60000,
  name:'iphone 10',
  description:'iphone',
  stock:8,
  remarks:'GOOD',
  image:'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},
{
  id:607,
  subcategoryId:504,
  categoryId:402,
  price:9000,
  name:'LG Tab',
  description:'Tablet',
  stock:10,
  remarks:'GOOD',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRT43z9sJSU1hdGeUdqOLBFC-7Z6Zy2o2ufdSHY0HmF5y8-746n'
},
{
  id:608,
  subcategoryId:504,
  categoryId:402,
  price:17000,
  name:'MI Tab',
  description:'Tablet',
  stock:9,
  remarks:'GOOD',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsGVroU6l9QKHcoN4X2d8h1blcNxlMxXrPHvjMb-usXcfi6Z-E'
},
{
  id:609,
  subcategoryId:505,
  categoryId:403,
  price:3999,
  name:'Banaras Saree',
  description:'Saree',
  stock:10,
  remarks:'GOOD',
  image:'https://img6.craftsvilla.com/image/upload/w_500/C/V/CV-36102-MCRAF80576334680-1544179443-Craftsvilla_1.jpg'
},
{
  id:610,
  subcategoryId:505,
  categoryId:403,
  price:15000,
  name:'Frocks',
  description:'Frock',
  stock:15,
  remarks:'GOOD',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbSnSMlmHQs5fw0_rAQo1L-Ek9ynMUpjNouV6ck4DYiIFMSfpq'
},
{
  id:611,
  subcategoryId:506,
  categoryId:403,
  price:2000,
  name:'Nike T-Shirt',
  description:'T-shirt',
  stock:16,
  remarks:'GOOD',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt4wp1FqfxZaOAaXlaNHpPv6FHNpAF0YltyFs8utg18bH7whNr'
},
{
  id:612,
  subcategoryId:506,
  categoryId:403,
  price:17000,
  name:'Suit',
  description:'Suit',
  stock:19,
  remarks:'GOOD',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3Vkr6cgXAh9El2To-tmyEWORtwpfB949HMAaEoVsdEyXZrTPD'
}
];
this.cartItems=[];

}
getAllItems():Item[]{
return [] .concat(this.items);
}
getCategories():Category[]{
  return [] .concat(this.categories);
  }
  getSubCategories():subCategory[]{
    return [] .concat(this.subCategories);
    }
    getItem(itemId:string):Item
{
  let item:Item;
  let size=this.items.length;
  for(let i=0;i<size;i++){
if(this.items[i].id==+itemId){
  //item=this.items[i];
  item={
    id:this.items[i].id,
    name:this.items[i].name,
    categoryId:this.items[i].categoryId,
    subcategoryId:this.items[i].subcategoryId,
  price:this.items[i].price,

    description:this.items[i].description,
    
    stock:this.items[i].stock,
    remarks:this.items[i].remarks,
    image:this.items[i].image
  }
  break;
}
  }  
  return item;

}
addToCart(itemId:number)
{
let item:Item=this.getItem(itemId+'');
this.cartItems.push(item);
}
getAllCart(){
  return [].concat(this.cartItems);
}
validBuyer(Username,Password)
{
  let buyer:Buyer;
let size=this.allBuyers.length;
for(let i=0;i<size;i++)
{
  if(this.allBuyers[i].username==Username && this.allBuyers[i].password==Password)
  {
    buyer={
      id:this.allBuyers[i].id,
      username:this.allBuyers[i].username,
      password:this.allBuyers[i].password,
      email:this.allBuyers[i].email,
      mobile:this.allBuyers[i].mobile,
      date:this.allBuyers[i].date
    }
    break;
  }
  return buyer;
}
}
validSeller(Username,Password)
{
  let seller:Seller;
let size=this.allSellers.length;
for(let i=0;i<size;i++)
{
  if(this.allBuyers[i].username==Username && this.allBuyers[i].password==Password)
  {
    seller={
      id:this.allSellers[i].id,
    username:this.allSellers[i].username,
    password:this.allSellers[i].password,
    company:this.allSellers[i].company,
    gst:this.allSellers[i].gst,
    brief:this.allSellers[i].brief,
    address:this.allSellers[i].address,
    email:this.allSellers[i].email,
    website:this.allSellers[i].website,
contact:this.allSellers[i].contact
    }
    break;
  }
  return seller;
}
}
deleteCartItem(itemNo:number)
{
  let size=this.cartItems.length;
for(let i=0;i<size;i++){
  if(this.cartItems[i].id==itemNo){
    this.cartItems.splice(i,1);
    break;
    
  }
}
}
}
