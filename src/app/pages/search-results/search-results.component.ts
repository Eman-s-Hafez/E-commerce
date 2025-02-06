import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { DataServiceService } from '../../services/data/data-service.service';

@Component({
  selector: 'app-search-results',
  standalone: false,
  
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  products :any=[]
  constructor(private router:Router , private global:GlobalService ,private data:DataServiceService ){

  }

  
  ngOnInit(){
    console.log(this.data.search(history.state.searchword)
  )
    if (history.state.searchword==""){
      debugger
      this.router.navigateByUrl("/")
    }
    else{
      this.products=this.data.search(history.state.searchword)
    }



  }

}


// let obj ={
//   "keyword":history.state.searchword       //w كانت كايبتال بوظت الدنيا
// }
// this.global.getSearchResults(obj).subscribe((res)=>{
//  // console.log(res.data)
//   this.products=res.data
// })