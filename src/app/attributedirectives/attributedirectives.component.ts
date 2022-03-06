import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedirectives',
  templateUrl: './attributedirectives.component.html',
  styleUrls: ['./attributedirectives.component.css']
})
export class AttributedirectivesComponent implements OnInit {

  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};

  public canSave: boolean;
  public isUnchanged: boolean;
  public isSpecial: boolean;
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  constructor() {
    this.canSave = false;
    this.isUnchanged = false;
    this.isSpecial = false;
  }

  ngOnInit(): void {
  }


}
