import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { DataServiceService } from '../../services/data/data-service.service';

@Component({
  selector: 'app-show-product',
  standalone: false,
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  constructor(private activated: ActivatedRoute, private data: DataServiceService){}
  mainSwiper!: Swiper;
  secondarySwiper!: Swiper;
  tertiarySwiper!: Swiper;
  Stock: number = 20;
  sendProduct = {
    isAdded:false,
    num: 1,
    id: "",
  }
  imagesOfProduct = [
    "https://sutrastores.com/cdn/shop/files/sutra_172.jpg?v=1737558509&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_27.jpg?v=1737558510&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_26.jpg?v=1737558510&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_16.jpg?v=1737558510&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_15.jpg?v=1737558510&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_14.jpg?v=1737558510&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_296.jpg?v=1737558509&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_17.jpg?v=1737558509&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_28.jpg?v=1737558509&width=700",
    "https://sutrastores.com/cdn/shop/files/sutra_184.jpg?v=1737558509&width=700"
  ];

  colors:any = [
    "bg-dark",
    "bg-secondary-subtle",
    "bg-success",
    "bg-warning bg-gradient",
    "bg-warning-subtle",
    "bg-body-secondary",
    "bg-dark-subtle",
    "bg-secondary-subtle",
    "bg-secondary-subtle",
    "bg-secondary-subtle"
  ];
  selectedColorIndex: number | null = 0;
product: any;
  // دالة لتحديد اللون
  selectColor(index: number): void {
    this.selectedColorIndex = index;
  }
  toggleAddToCart() {
    this.sendProduct.isAdded = !this.sendProduct.isAdded;
  }
  increase() {
    if (this.sendProduct.num < this.Stock) this.sendProduct.num++
  }
  decrease() {
    if (this.sendProduct.num > 1) this.sendProduct.num--
  }
  ngAfterViewInit(): void {
    this.tertiarySwiper = new Swiper('.mySwiper3', {
      slidesPerView: 10,
      spaceBetween: 2,
      watchSlidesProgress: true,
    });

    this.secondarySwiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    this.mainSwiper = new Swiper('.mySwiper2', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: this.secondarySwiper,
      },
    });

    // تحديث السوابر الثانوية عند تغيير السلايدر الرئيسي
    this.mainSwiper.on('slideChange', () => {
      const activeIndex = this.mainSwiper.realIndex;
      if (this.secondarySwiper.realIndex !== activeIndex) this.secondarySwiper.slideTo(activeIndex);
      if (this.tertiarySwiper.realIndex !== activeIndex) this.tertiarySwiper.slideTo(activeIndex);
      this.selectedColorIndex = activeIndex;
    });

    // إضافة حدث click لعناصر السلايدر الثالث
    this.tertiarySwiper.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        this.mainSwiper.slideTo(index);
        this.selectColor(index);
        this.secondarySwiper.slideTo(index);
      });
    });

    // إضافة حدث click لعناصر السلايدر الثاني
    this.secondarySwiper.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        this.mainSwiper.slideTo(index);
        this.selectColor(index);
        this.tertiarySwiper.slideTo(index);
      });
    });

  }
  productInfo:any = []
  ngOnInit(){
    this.activated.paramMap.subscribe((params) => {
      const productId = params.get('id'); // Assuming the route parameter is named 'id'
      if (productId) {
        this.productInfo = this.data.filterById(productId);
        this.imagesOfProduct =[this.productInfo[0].imagLink];
        this.colors = null
      } else {
        console.error('Product ID not found in URL');
      }
    });
  }
}