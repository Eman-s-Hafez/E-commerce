import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../services/data/data-service.service';

@Component({
  selector: 'app-category',
  standalone: false,
  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private activated : ActivatedRoute, private global : DataServiceService) {
          
  }
  category_name_id:{[key: string]: number} = {
    winter      :1,
    shirts      :2,
    trousers    :3,
    sweetpants  :4,
    accessories :5
  }
  cat_name:any
  products:any
  listSort:string="featured"
  ngOnInit() {
    this.activated.paramMap.subscribe(params => {
      this.cat_name = params.get('cat_name')
      this.filterProducts()
    })
  }

  filterProducts() {
    this.products = this.global.filterByCategory(this.category_name_id[this.cat_name])
  }
  
}
