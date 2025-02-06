import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReturnexchangeComponent } from './pages/returnexchange/returnexchange.component';
import { OrderExcangeDetailsComponent } from './orders/order-excange-details/order-excange-details.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"search",component:SearchResultsComponent},
  { path: 'product-card/:id', component: SingleProductComponent },
  {path:"category/:cat_name",component:CategoryComponent},
  {path:"pages/returnexchange",component:ReturnexchangeComponent},
  {path:"orderExchangeDetails/:orderId",component:OrderExcangeDetailsComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
