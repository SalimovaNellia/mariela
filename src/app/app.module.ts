import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { CarouselComponent } from './carousel/carousel.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSliderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
