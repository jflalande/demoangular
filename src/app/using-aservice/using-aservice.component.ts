import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-using-aservice',
  templateUrl: './using-aservice.component.html',
  styleUrls: ['./using-aservice.component.css']
})
export class UsingAServiceComponent implements OnInit {
  public mydate: Date;

  constructor(myservice : MyServiceService) {
    this.mydate = myservice.getDate();
  }

  ngOnInit(): void {

  }

}
