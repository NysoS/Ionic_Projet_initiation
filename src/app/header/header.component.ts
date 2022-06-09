import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  isHidden:boolean = false

  fruits:string[] = ["fraise","banane","ananas","pomme"];

  clickMe(){
    console.log("Your are clicked on me!");
    this.isHidden = !this.isHidden;
  }

}
