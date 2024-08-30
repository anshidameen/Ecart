import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../user/home/home.component';
import { RegisterComponent } from '../user/register/register.component';
import { CartComponent } from '../user/cart/cart.component';
import { AboutUsComponent } from '../user/about-us/about-us.component';
import { CategoryComponent } from '../user/category/category.component';
import { OrderComponent } from '../main/order/order.component';
import { PaymentComponent } from '../main/payment/payment.component';
import { ProductComponent } from '../main/product/product.component';
import { ReturnComponent } from '../main/return/return.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    CartComponent,
    AboutUsComponent,
    CategoryComponent,
    OrderComponent,
    PaymentComponent,
    ProductComponent,
    ReturnComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class PagesModule { }
