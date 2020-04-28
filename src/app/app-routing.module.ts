import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeSliderComponent} from "./home-slider/home-slider.component";


const routes: Routes = [
  {
    path: "home", component: HomeSliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
