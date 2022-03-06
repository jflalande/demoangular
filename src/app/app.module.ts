import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatelinkComponent } from './templatelink/templatelink.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { EventpropbindingComponent } from './eventpropbinding/eventpropbinding.component';
import {FormsModule} from "@angular/forms";
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { HighlightDirective } from './highlight.directive';
import { AttributedirectivesComponent } from './attributedirectives/attributedirectives.component';
import { PipesComponent } from './pipes/pipes.component';
import { MyHomePageComponent } from './my-home-page/my-home-page.component';
import { UsingAServiceComponent } from './using-aservice/using-aservice.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatelinkComponent,
    EventbindingComponent,
    PropbindingComponent,
    HerodetailsComponent,
    EventpropbindingComponent,
    StructuraldirectivesComponent,
    HighlightDirective,
    AttributedirectivesComponent,
    PipesComponent,
    MyHomePageComponent,
    UsingAServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
