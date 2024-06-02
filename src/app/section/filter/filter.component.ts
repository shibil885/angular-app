import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  allProduct:number 

  @Input()
  inStock:number

  @Input()
  outOfStock:number

  selectedRadio:string = 'all'

  @Output()
  radioChangedEvent:EventEmitter<string> = new EventEmitter<string>()
  changeRadio(){
    this.radioChangedEvent.emit(this.selectedRadio)
  }
}
