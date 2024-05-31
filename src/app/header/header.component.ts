import { NgFor, NgForOf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector:'app-head',
    standalone:true,
    templateUrl:"./header.component.html",
    styleUrl:'./header.component.css',
    imports:[NgFor,NgForOf]
})

export class HeaderComponent {
    headerMenu:string[] = ['Home','About','Services','Contact']
}