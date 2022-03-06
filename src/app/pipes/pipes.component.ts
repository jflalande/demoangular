import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  amount = 20;
  mydate = 1646577574;

  constructor() { }

  ngOnInit(): void {
  }

}
