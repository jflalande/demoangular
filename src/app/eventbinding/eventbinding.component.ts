import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  private i: number;

  constructor() {
    this.i = 42;
  }

  onClick() {
    alert("You Clicked Me!");
  }
  ngOnInit(): void {
  }
  toto(){
    return 6+this.i;
  }

}
