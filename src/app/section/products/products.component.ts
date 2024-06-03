import { Component, Input } from '@angular/core';
import{Product} from '../../models/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input()
  product: Product;
  
}
