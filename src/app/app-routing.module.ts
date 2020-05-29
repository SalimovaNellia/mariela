import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeSliderComponent} from "./home-slider/home-slider.component";
import {ContactsComponent} from "./contacts/contacts.component";


const routes: Routes = [
  {
    path: "home",
    component: HomeSliderComponent
  },
  {
    path: "contact-me",
    component: ContactsComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
