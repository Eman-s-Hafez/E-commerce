
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  standalone: false,
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements AfterViewInit {

  
  constructor() {}

  ngAfterViewInit(): void {
    // تهيئة Swiper
    new Swiper('.SwiperComp-mySwiper', {
      spaceBetween:5,
      slidesPerView:4,
      slidesPerGroup:4,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar', // تمكين الـ Progress Bar
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,  // التكرار بين الشرائح
    });
  }
}