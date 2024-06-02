import { Component, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input()
  product:{
    id:number,
    title:string,
    description:string,
    stock:number,
    price:string
  }  
  
}
