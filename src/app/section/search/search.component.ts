import { NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @ViewChild('searchTextInput') 
  searchTextInput:ElementRef
  searchText:string =''
  
  @Output()
  eventToSearchText:EventEmitter<string> = new EventEmitter<string>()

  searchItem(){
    this.searchText = this.searchTextInput.nativeElement.value
    this.eventToSearchText.emit(this.searchText)    
  }
}
