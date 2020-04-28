import { Component, OnInit } from '@angular/core';
import {Slide, SlideDetails} from "../carousel/slide.model";

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  public slider : Slide[];

  constructor() { }

  ngOnInit() {
    this.slider = [
      { imgUrl: "../../assets/slider-1.jpg",
        slideDetails: {
          tag: "New",
          title: "Spring cushion collection 2019",
          linkTitle: "Buy now",
          linkHref: "/products"
        }
      },
      { imgUrl: "../../assets/slider-2.jpg",
        slideDetails: {
          tag: "About me",
          title: "I'm a trendy Cushion Designer",
          linkTitle: "Learn more",
          linkHref: "/about"
        }
      }
    ]
  }

}
