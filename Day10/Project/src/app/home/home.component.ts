import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  types:string[]=[
    "All",
    "Mobile and Laptos",
    "Beauty Products",
    "Books",
    "Groceries and Applicanes"

  ]
  selected:string="All";
  productlist:any;
  minvalue=0;
  maxvalue=2000;
  
  
    constructor(private cs:ProductService){

      this.cs.getProducts().subscribe(
        {
        next: (data:any)=>this.productlist=data,
        error: ()=> this.productlist=[]
        }
      )
    }
    
}
