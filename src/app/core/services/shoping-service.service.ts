import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShopingServiceService {



  private catUrl='http://localhost:8090/ecart/getByCategory';
  private subUrl='http://localhost:8090/ecart/getBySubCategory';
  constructor(private http: HttpClient) { }
 
  //for Category
  getAllShop(): Observable<any> {
    return this.http.get('http://localhost:8090/ecart/getAllcategory')
  }

  addOrder(order: any): Observable<any> {
    return this.http.post('http://localhost:8090/ecart/order', order);
  }
  ///for cart
  getAllCart(): Observable<any> {
    return this.http.get('http://localhost:8090/ecart/getAllCart')
  }

  addCart(cart: any): Observable<any> {
    return this.http.post('http://localhost:8090/ecart/addCart', cart)
  }

  removeCart(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8090/ecart/delete/${id}`)
  }

  ///for user
  addUser(user: any): Observable<any> {
    return this.http.post('http://localhost:8090/ecart/signUp', user)
  }
  getByCategory(category:any):Observable<any>{
    return this.http.get(`${this.catUrl}?category=${category}`)
  }
  getBySubCategory(subCategory:any):Observable<any>{
    return this.http.get(`${this.subUrl}?subCategory=${subCategory}`)
  }

  /////////for signin//////////
  login(username: string, password: string):Observable<any>{
    const body = { username, password };
    return this.http.post<any>('http://localhost:8090/ecart/sign-in',body)
  }
  signUp(){
    
  }
}
