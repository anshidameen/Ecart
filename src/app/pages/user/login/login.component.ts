import { Component, OnInit } from '@angular/core';
import { PasServiceService } from 'src/app/core/services/pas-service.service';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uersData:any;
  constructor(private formBuilder:FormBuilder,private shopservice:ShopingServiceService) { }

  ngOnInit(): void {

  }

  loginForm= this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
  });

 onSubmit(){
  console.log(this.loginForm.value)
 }
}