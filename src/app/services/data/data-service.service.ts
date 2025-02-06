import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  questions =[
    // {
    //   question:'',
    //   answer:""
    // },
    {
      question:'متي يصل الطلب إلي باب المنزل؟',
      answer:"يتم تجهيز وشحن المنتج ويصلك خلال ٤ - ٦ أيام عمل",
      statusOpen:true
    },
    {
      question:'إذا كان المقاس غير مناسب هل يمكن الإستبدال؟',
      answer:"يتوفر الاستبدال أو الإرجاع خلال 14 يومًا من الاستلام، بشرط أن يكون المنتج في حالته الأصلية",
      statusOpen:false
    },
    {
      question:' إذا كان المقاس غير مناسب هل يمكن الإستبدال؟',
      answer:"يتوفر الاستبدال أو الإرجاع خلال 14 يومًا من الاستلام، بشرط أن يكون المنتج في حالته الأصلية.",
      statusOpen:false
    },
    {
      question:' هل يمكنني الاستبدال من أي فرع من فروع سٌترة؟',
      answer:"نعم، يمكنك التوجه إلى أقرب فرع مع الفاتورة، وفريق 'سترة' سيساعدك في عملية الاستبدال.",
      statusOpen:false
    },
    {
      question:'هل يمكن لشخص آخر استلام المنتج؟',
      answer:"ممكن، ولكن نحتاج إلى رقم الشخص الذي سيستلم لتسهيل التواصل وتسليم المنتج في أسرع وقت ممكن.",
      statusOpen:false
    },
    {
      question:'كيفية الإسترجاع والإستبدال؟',
      answer:'يمكن الاستبدال من خلال التواصل مع خدمة عملاء "سترة" على الرقم 01016946753، وسيتم تفعيل طلب الاستبدال خلال 4 أيام - أو يمكنك زيارتنا في أقرب فرع لك واستبدال المنتج حسب الفاتورة.',
      statusOpen:false
    
    },
  ];
  resultedProducts:any[]=[];
  constructor() { }
  productsSlider = [
    {
      id:1,
      page:"home",
      title:'Wudu Milton Hoodie Basic',
      description:"هودي الوضوء الخامة: ميلتون المادة الداخلية: واسعة (أوفرسايز) المقاس: رجال الجنس: رجال الأكمام: طويلة الرقبة: قبعة (كابيشو) النقشة: غير متوفرة الإغلاق: كاجوال النمط: شتوي الموسم: شتاء",
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600',
      categoryId:1
    },
    {
      id:2,
      title:'Puffer Basic Jacket',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600',
      categoryId:1
    },
    {
      id:3,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600',
      categoryId:2
    },
    {
      id:4,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600',
      categoryId:3
    },
    {
      id:5,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600',
      categoryId:4
    },
    {
      id:6,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600',
      categoryId:5
    },
    {
      id:7,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600',
      categoryId:6
    },
    {
      id:8,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600',
      categoryId:7
    },
    {
      id:9,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600',
      categoryId:8
    },
    {
      id:10,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600',
      categoryId:9
    },
    {
      id:11,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600',
      categoryId:10
    },
    {
      id:12,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600',
      categoryId:11
    },
    {
      id:13,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600',
      categoryId:12
    },
    {
      id:14,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600',
      categoryId:13
    },
    {
      id:15,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600',
      categoryId:14
    },
    {
      id:16,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600',
      categoryId:15
    },
    {
      id:17,
      title:'Wudu Milton Hoodie Basic',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_120.jpg?v=1737558516&width=600',
      categoryId:16
    },
    {
      id:18,
      title:'Puffer Basic Jacket',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_136.jpg?v=1737558520&width=600',
      categoryId:17
    },
    {
      id:19,
      title:'Over Size Milton Hoodie Sweatshirt Printed Look Around',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_171.jpg?v=1737558500&width=600',
      categoryId:18
    },
    {
      id:20,
      title:'Over Size Milton Hoodie Sweatshirt Printed Simple',
      price:'LE 899.00',
      imagLink:'https://sutrastores.com/cdn/shop/files/sutra_242.jpg?v=1737558507&width=600',
      categoryId:19
    },
  ];
  copyProducts = [...this.productsSlider];
  filterById(id:any){
    return this.productsSlider.filter(x=>x.id == id)
  }
  filterByCategory(id:any){
    return this.productsSlider.filter(x=>x.categoryId == id)
  }
  search(element:string){
    if (element.length > 0) {      
      return this.productsSlider.filter(item => item.title.includes(element));     
    } else {
      return this.productsSlider;
    }
  }
}
