import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string =''
  
  @Output()
  eventToSearchText:EventEmitter<string> = new EventEmitter<string>()

  searchItem(InputElement:HTMLInputElement){
    console.log(InputElement);
    
    this.searchText = InputElement.value
    this.eventToSearchText.emit(this.searchText)    
  }
}
