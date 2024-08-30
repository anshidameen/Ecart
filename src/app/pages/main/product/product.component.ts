import { Component, OnInit } from '@angular/core';
import { PasServiceService } from 'src/app/core/services/pas-service.service';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  details: any;
  count: number = 1;
  updatedPrice: number | undefined;
  constructor(private shopService: ShopingServiceService, private pass: PasServiceService) { }

  ngOnInit(): void {
    this.pass.currentDetails.subscribe((detail: any) => {
      this.details = detail;
      this.updatedPrice = this.details.price * this.count;
      console.log(this.details.price)
    });
  }

  add() {
    if (this.count < 5) {
      this.count++;
      this.updatedPrice = this.details.price * this.count;
    }
  }
  minus() {
    if (this.count > 1) {
      this.count--;
      this.updatedPrice = this.details.price * this.count;
    }
  }

  onClick(orders:any){
    const orderWithPrice = { ...orders, price: this.updatedPrice };
    console.log(orderWithPrice);
    this.pass.tranferOrder(orderWithPrice);
  }

}
