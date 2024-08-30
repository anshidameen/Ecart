import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PasServiceService {

  private passDetails = new BehaviorSubject<any>(null);
  private passOrder = new BehaviorSubject<any>(null);
  private passPrice = new BehaviorSubject<any>(null);
  currentDetails = this.passDetails.asObservable();
  currentOrders = this.passOrder.asObservable();
  currentPrice = this.passPrice.asObservable();


  constructor() { }

  transferDetails(detail: any) {
    this.passDetails.next(detail);
  }

  transferToCart(details: any) {
    this.passDetails.next(details);
  }
  transferPrice(newPrice: any) {
    this.passPrice.next(newPrice);
  }
  tranferOrder(orders: any) {
    this.passOrder.next(orders);
  }

}
