import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  burgerReleased: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  toggleMenu() {
    this.burgerReleased = !this.burgerReleased;
  }
}
