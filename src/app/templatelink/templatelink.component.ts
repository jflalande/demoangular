import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatelink',
  templateUrl: './templatelink.component.html',
  styleUrls: ['./templatelink.component.css']
})
export class TemplatelinkComponent implements OnInit {

  firstname = "JF";
  lastname = "Lalande";
  year = 2022;
  constructor() { }

  ngOnInit(): void {
  }

}
