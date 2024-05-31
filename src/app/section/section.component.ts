import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [NgForOf,FilterComponent,NgIf],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
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
  totalCount = this.sportsItems.length
  outOfStockCount = this.sportsItems.filter(item => item.stock <= 0).length
  inStockCount = this.sportsItems.filter(item => item.stock > 0).length
  selectedInput:string = 'all'
  changedInputParent(value:any){
    console.log('fro pa',this.selectedInput);
    
    this.selectedInput = value
  }
}
