import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  baseurl = "https://full.faedg.com/api"

  login(obj: any): Observable<any> {
    return this.http.post('https://6796160dbedc5d43a6c43af4.mockapi.io/Newsletter/emailnewsletter', obj);
  }
  
  formLogin(obj:any):Observable<any>
  {
    
      return this.http.post('https://full.faedg.com/api/client/customer_login',obj)
    }
  getSearchResults(obj:any):Observable<any>{
    return this.http.post(`${this.baseurl}/search-by-keyword`,obj)
    
  }
  
  searchOrder(orderId:any):Observable <any> {
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
   return this.http.get(`https://fakeapi.net/orders/${orderId}`)
  // const apiUrl = `https://api.fakeapi.net/orders/${encodeURIComponent(orderId)}`;
 // return this.http.get(apiUrl);

   }

}
