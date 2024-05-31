
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  totalProduct:number= 0
  @Input()
  inStock:number = 0
  @Input() 
  outOfStock:number = 0
  @Output()
  eventOninputChange: EventEmitter<string> = new EventEmitter<string>()
  selectedInput:string = 'all'
  changedInput(){
    this.eventOninputChange.emit(this.selectedInput)
  }
}
