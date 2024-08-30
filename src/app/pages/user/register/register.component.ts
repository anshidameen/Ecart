import { Component, OnInit } from '@angular/core';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any
  constructor(private shopService: ShopingServiceService, private router: Router) { }

  ngOnInit(): void {

  }

 
  addUser(users: { name: String, mobile: String, email: String, username: String, password: String }) {
    this.shopService.addUser(users).subscribe(() => {
      this.user = users;
      console.log(this.user);
      alert("Registration is success")
      this.router.navigateByUrl('/home')
    })
  }
}
