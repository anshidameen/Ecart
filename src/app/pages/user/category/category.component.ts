import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasServiceService } from 'src/app/core/services/pas-service.service';
import { ShopingServiceService } from 'src/app/core/services/shoping-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  shoppingList: any[] = [];
  cartList: any[] = [];
  selectedCategory:any[]=[];
  selectedSub:any[]=[];
  category:String='';
  subCategory:String='';
  isCategorySelected:boolean=false
  ismenCategory:boolean=false;
  iswomentCategory:boolean=false
  iskidCategory:boolean=false
  isaccessCategory:boolean=false
  isjwellaryCategory:boolean=false
  constructor(private route:ActivatedRoute, private shopService: ShopingServiceService, private pass: PasServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('categoryName') || '';
      this.subCategory=params.get('subcategoryName') ||'';
      console.log('Category:', this.category);
      console.log('Subcategory:', this.subCategory);
      this.ismenCategory=this.category=='Men';
      this.iswomentCategory=this.category=='Women';
      this.iskidCategory=this.category=='Kids';
      this.isaccessCategory=this.category=='Accessories';
      this.isjwellaryCategory=this.category=='Jewellary';
      if(this.ismenCategory ||this.iswomentCategory ||this.iskidCategory ||this.isaccessCategory ||this.isjwellaryCategory){
        this.onCategorySelection(this.category);
      }

      else{
        this.getAllShop();
      }

      if (this.subCategory){
        this.onSubCategorySelection(this.subCategory)
      }
    });

  //  if (this.category != null && this.subCategory !=null){
  //   this.route.paramMap.subscribe(param=>{
  //     this.subCategory=param.get('subCategoryName')||'';
  //     this.onSubCategorySelection(this.subCategory)
  //   })
  //  }  
  }


  getAllShop() {
    this.shopService.getAllShop().subscribe((res: any) => {
      this.shoppingList = res;
      console.log(this.shoppingList);
    })
  }

  onClick(detail: any) {
    this.pass.transferDetails(detail);
  }

  // onCart(details: any) {
  //   this.pass.transferDetails(details);
  // }

  onCart(carts: any) {
    this.shopService.addCart(carts).subscribe((res: any) => {
      this.cartList = carts
      console.log(this.cartList);
    })
  }

  onCategorySelection(category:String){
    this.shopService.getByCategory(category).subscribe((data)=>{
      this.selectedCategory=data
 
    });
  }
  onSubCategorySelection(subCategory:String){
    this.shopService.getBySubCategory(subCategory).subscribe((data)=>{
      this.selectedSub=data
      console.log(this.selectedSub);
    })
  }
}
