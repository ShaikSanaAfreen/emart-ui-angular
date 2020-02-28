import { subCategory } from 'sub-category';

export interface Item{
    id:number,
    categoryId:number,
    subcategoryId:number,
    price:number,
    name:string,
    description:string,
    stock:number,
    remarks:string,
    image:string
}