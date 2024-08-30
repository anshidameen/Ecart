import { Component, OnInit } from '@angular/core';
import { PasServiceService } from 'src/app/core/services/pas-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  
  constructor(private router:Router, private pass:PasServiceService) { }

  ngOnInit(): void {
  }
  
  navigateToCategory(categoryName: string): void {
    this.router.navigate(['/category', categoryName]);
    
  }
  navigateToSub(categoryName:string,subcategoryName:string){
    console.log(`Navigating to /category/${categoryName}/${subcategoryName}`);
    this.router.navigate(['/category',categoryName,subcategoryName])
  }
}
