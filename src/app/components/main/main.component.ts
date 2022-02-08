import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from "swiper"
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mySwiper: Swiper;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      this.mySwiper = new Swiper('.swiper')
  }
}
