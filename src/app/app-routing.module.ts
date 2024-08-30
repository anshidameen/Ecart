import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './pages/main/order/order.component';
import { PaymentComponent } from './pages/main/payment/payment.component';
import { ProductComponent } from './pages/main/product/product.component';
import { AboutUsComponent } from './pages/user/about-us/about-us.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { CategoryComponent } from './pages/user/category/category.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: 'categories', component: CategoryComponent
  },
  { path: 'category/:categoryName', component: CategoryComponent },
  { path: 'category/:categoryName/:subcategoryName', component: CategoryComponent },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'signUp', component: RegisterComponent
  },
  {
    path:'about',component:AboutUsComponent
  },
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
