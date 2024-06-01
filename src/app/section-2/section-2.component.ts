import { Component } from '@angular/core';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
  text:string|number =''
  changeValue(event:any){
    this.text = event.target.value
  }
}
    