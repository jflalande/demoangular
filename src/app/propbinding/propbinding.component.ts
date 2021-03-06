import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.css']
})
export class PropbindingComponent implements OnInit {
  public heroes: string[];
  public selectedHero: string;

  constructor() {
    this.heroes = ['Batman', 'Robin', 'Superman'];
    this.selectedHero = "";
  }

  selectHero(hero: string) { this.selectedHero = hero; }
  ngOnInit(): void {
  }

}
