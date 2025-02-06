import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-returnexchange',
  standalone: false,
  
  templateUrl: './returnexchange.component.html',
  styleUrl: './returnexchange.component.css'
})
export class ReturnexchangeComponent {
  isSubmitted:boolean=false
  errMessage:any=null
  order: any;
  constructor(private global:GlobalService , private router:Router, private toastr: ToastrService){
  
  }
  
  searchOrderForm=new FormGroup(
    {
      order_id:new FormControl(null , [Validators.required ]),
      // Validators.minLength(3)
      //,Validators.pattern('^[0-9]{3}$')
      phone:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{10,15}$/) ])
    })
    
    handleSubmit(){this.isSubmitted=true
      console.log("before validation")
      console.log(this.searchOrderForm.valid)
      if(this.searchOrderForm.valid)
        
        { //orderId: any = this.searchOrderForm.value.order_id
         const orderId: string = this.searchOrderForm.value.order_id || '';

          

          this.global.searchOrder(orderId).subscribe(res=>{
           // this.toastr.success('login successfully')
           console.log("before res")
            console.log(res)
           // localStorage.setItem("token",res.data.token)
           console.log("before routing")
           //routerLink="/single-post/{{post.id}}"
            this.router.navigateByUrl(`/orderExchangeDetails/${orderId}`)
          },err=>{
            console.log(err.error.message)
           // this.errMessage=err.error.message
          this.toastr.error('Order Not Found')
          })
        }
}

get searchOrderControl(){
  return this.searchOrderForm.controls
  
    
}

}



