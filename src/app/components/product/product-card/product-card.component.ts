import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  productId: number | null = null;
  product:any={
    id:null,
    title:null,
    price:null,
    imagLink:null
  };
  products = [
    {
      id:1,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600'
    },
    {
      id:2,
      title:'Puffer Basic Jacket',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600'
    },
    {
      id:3,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600'
    },
    {
      id:4,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600'
    },
    {
      id:5,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600'
    },
    {
      id:6,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600'
    },
    {
      id:7,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600'
    },
    {
      id:8,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600'
    },
    {
      id:9,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600'
    },
    {
      id:10,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600'
    },
    {
      id:11,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600'
    },
    {
      id:12,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600'
    },
    {
      id:13,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600'
    },
    {
      id:14,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600'
    },
    {
      id:15,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600'
    },
    {
      id:16,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600'
    },
    {
      id:17,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600'
    },
    {
      id:18,
      title:'Puffer Basic Jacket',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600'
    },
    {
      id:19,
      title:'Over Size Milton Hoodie Sweatshirt Printed Look Around',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600'
    },
    {
      id:20,
      title:'Over Size Milton Hoodie Sweatshirt Printed Simple',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600'
    },
  ]
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id')); // Get the ID from URL
    console.log('Product ID:', this.productId);
  
    this.product = this.products.filter(x => x.id == this.productId);
    console.log('Filtered Product:', this.product);
      if (this.product.length > 0) {
      console.log('Image Link:', this.product[0].imagLink);
    } else {
      console.log('No product found');
    }
  }
  
}
