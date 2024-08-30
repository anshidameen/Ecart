import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasServiceService } from 'src/app/core/services/pas-service.service';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails: any;
  cartTotal:any;
  price:any;
  itemId: string | null | undefined;
  constructor(private cartService: ShopingServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllCart();
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');  
      if (this.itemId) {
        this.deleteCart(this.itemId);  
      }
    });
  }
  getAllCart() {
    this.cartService.getAllCart().subscribe((res: any) => {
      this.cartDetails = res
      this.cartTotal=res.map((item: { price: any; })=>item.price);
      this.totalPrice();
      console.log(this.cartTotal);
    })
  }
  deleteCart(id:any){
    this.cartService.removeCart(id).subscribe((res)=>{
      console.log('item deleted');
      this.getAllCart();
    })
  }
  totalPrice(){
    if (this.cartDetails && this.cartDetails.length > 0) {
      this.price = this.cartDetails.reduce((sum: number, item: { price: number }) => {
        return sum + item.price;
      }, 0);
      console.log('Total Price:', this.price); 
    } else {
      this.price = 0; 
    }
  }
}
