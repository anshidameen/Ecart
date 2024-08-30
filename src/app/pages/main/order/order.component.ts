import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasServiceService } from 'src/app/core/services/pas-service.service';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  newForm: any
  i = 1;
  constructor(private fb: FormBuilder, private shopService: ShopingServiceService,
    private pass: PasServiceService, private routes: Router) { }


  ngOnInit(): void {
    this.pass.currentOrders.subscribe((order:any)=>{
      this.newForm=order;
      console.log(order.price)
     
    })
  }
  getOrderFormDate(orderForm: { name: String, details: String, size: String, price: String, address: String, mobileNumber: String, email: String }) {
    this.shopService.addOrder(orderForm).subscribe((res: any) => {
      this.newForm = orderForm
      console.log(this.newForm);
      this.routes.navigate(['/payment']);

    });
  }
}
 