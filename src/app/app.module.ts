import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
register();

import { HomeComponent } from './pages/home/home.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { NavComponent } from './core/nav/nav.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductSwiperComponent } from './components/product/product-swiper/product-swiper.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { GlobalService } from './services/global.service';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FooterComponent } from './core/footer/footer.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { ReturnexchangeComponent } from './pages/returnexchange/returnexchange.component';
import { OrderExcangeDetailsComponent } from './orders/order-excange-details/order-excange-details.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowProductComponent,
    NavComponent,
    SwiperComponent,
    TestimonialComponent,
    LoginComponent,
    ProductSwiperComponent,
    ProductInfoComponent,
    FooterComponent,

    SearchResultsComponent,
    CategoryComponent,

    SearchResultsComponent,
    SingleProductComponent, // Add FooterComponent to the declarations
    ProductCardComponent, SignUpComponent, ReturnexchangeComponent, OrderExcangeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [GlobalService, {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
