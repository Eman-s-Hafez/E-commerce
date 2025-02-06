import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router:Router){}
  handleSearch(searchInput:any){
    this.router.navigateByUrl("/search",{state:{searchword:searchInput.value,type:'products'}})
    console.log(searchInput.value)

  }
  isVisable:boolean=false ;
  showSearch():void{
   this.isVisable=!this.isVisable ;
  }
 


}
