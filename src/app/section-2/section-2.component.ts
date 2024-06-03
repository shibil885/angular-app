import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
  text:string =''
  changeValue(event:any){
    this.text = event.target.value
  }
}
    