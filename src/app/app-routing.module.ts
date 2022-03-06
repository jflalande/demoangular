import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HerodetailsComponent} from "./herodetails/herodetails.component";
import {AppComponent} from "./app.component";
import {MyHomePageComponent} from "./my-home-page/my-home-page.component";

const routes: Routes = [
  { path: 'hero', component: HerodetailsComponent },
  { path: '', component: MyHomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
