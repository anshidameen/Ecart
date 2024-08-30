import { Component, OnInit } from '@angular/core';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isChange = false;
  constructor() { }

  ngOnInit(): void {

  }

  onPicChange() {
    this.isChange = !this.isChange
  }

}
