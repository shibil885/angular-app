import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { Product } from '../models/product';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [NgForOf,NgIf,ProductsComponent,FilterComponent,CommonModule,SearchComponent,ProductDetailsComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  selectedProduct:Product;
  sportsItems = [
    {
      id: 1,
      title: "Soccer Ball",
      description: "High-quality soccer ball suitable for all weather conditions.",
      stock: 0,
      price: "$19.99"
    },
    {
      id: 2,
      title: "Basketball",
      description: "Professional-grade basketball for indoor and outdoor use.",
      stock: 80,
      price: "$29.99"
    },
    {
      id: 3,
      title: "Tennis Racket",
      description: "Lightweight tennis racket with high-tension strings for precision.",
      stock: 45,
      price: "$49.99"
    },
    {
      id: 4,
      title: "Running Shoes",
      description: "Comfortable and durable running shoes with excellent grip.",
      stock: 0,
      price: "$59.99"
    },
    {
      id: 5,
      title: "Yoga Mat",
      description: "Non-slip yoga mat with extra cushioning for comfort.",
      stock: 150,
      price: "$24.99"
    },
    {
      id: 6,
      title: "Baseball Glove",
      description: "Leather baseball glove designed for optimal performance.",
      stock: 0,
      price: "$39.99"
    },
    {
      id: 7,
      title: "Golf Clubs Set",
      description: "Complete set of golf clubs with a durable carrying bag.",
      stock: 30,
      price: "$299.99"
    },
    {
      id: 8,
      title: "Swimming Goggles",
      description: "Anti-fog swimming goggles with UV protection.",
      stock: 100,
      price: "$14.99"
    },
    {
      id: 9,
      title: "Cycling Helmet",
      description: "Safety-certified cycling helmet with adjustable straps.",
      stock: 85,
      price: "$34.99"
    },
    {
      id: 10,
      title: "Fitness Tracker",
      description: "Waterproof fitness tracker with heart rate monitor and GPS.",
      stock: 0,
      price: "$79.99"
    }
  ]
  countOfAll:number = this.sportsItems.length
  inStock:number = this.sportsItems.filter((item => item.stock>0)).length
  outOfStock:number = this.sportsItems.filter((item => item.stock <= 0)).length

  selectedRadio:string = 'all'
  @Input()
  searchText:string = ''
  getSearchText(value:string){
    this.searchText = value
  }
  changedSelectedRadio(event:string){
    this.selectedRadio = event   
  }
}
