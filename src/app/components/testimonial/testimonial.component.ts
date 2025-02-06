import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-testimonial',
  standalone: false,

  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements AfterViewInit {
  // Swiper configuration options

  // Initialize Swiper after the view is rendered
  ngAfterViewInit(): void {
    new Swiper('.testimSwiper', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  testimonial_data = [
    {
      name: "Omar S.",
      message: "الكواليتي كويسة جدا جدا",
    },
    {
      name: "Mohamed A.",
      message: "Perfect fit and very good materials, many thanks for this quality",
    },
    {
      name: "Yasser M.",
      message: "انا عميل مستمر مع سترة لجودة التلبيس وراحة التيشيرتات وكمان عشان خاماتهم اللي بتعيش معايا بالسنين ",
    },
    {
      name: "ضياء م.",
      message: "جامد اجدعان",
    },
    {
      name: "Essam S.",
      message: "I loved it",
    },

  ]
}
