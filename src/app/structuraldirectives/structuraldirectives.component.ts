import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
  public heroes = ['Batman', 'Superman', 'Ironman', 'Flash', 'Catwoman',];

  constructor() { }

  ngOnInit(): void {
  }

}
