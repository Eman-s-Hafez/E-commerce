import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-excange-details',
  standalone: false,
  
  templateUrl: './order-excange-details.component.html',
  styleUrl: './order-excange-details.component.css'
})
export class OrderExcangeDetailsComponent {
  constructor(private activated:ActivatedRoute,private global:GlobalService){
  
  }
  order:any[]=[]
  orderData:any
ngOnInit(){
this.activated.paramMap.subscribe(param=>{
  console.log("Id inside details")
  console.log(param.get('orderId'))
  this.global.searchOrder(param.get('orderId')).subscribe(res=>{
    console.log(res)
    this.orderData=res
   //this.posts=res
  
  })
})
 
  

}
}



