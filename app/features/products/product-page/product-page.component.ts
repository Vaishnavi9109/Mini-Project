import { Component } from "@angular/core";
import { CategoryComponent } from "../category/category.component";
import { FrequentlyOrderedComponent } from "../frequently-order/frequently-order.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FrequentlyOrderedComponent, CategoryComponent],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {}

