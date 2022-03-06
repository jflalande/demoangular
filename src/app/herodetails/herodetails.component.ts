import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
  @Input() hero = 'default';
  alignement = 'right';
  couleur = 'green';
  constructor() { }

  ngOnInit(): void {
  }

}
