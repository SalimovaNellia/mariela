import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { CarouselComponent } from './carousel/carousel.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSliderComponent,
    CarouselComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
