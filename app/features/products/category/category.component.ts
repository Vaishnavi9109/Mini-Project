import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../shared.service';


@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: any[] = [];

  constructor(private service: SharedService) { }

    ngOnInit(): void {
    this.service.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

}












// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductComponent } from '../../../product/product.component';
// import { Category, SharedService } from '../../../shared.service';

// @Component({
//   selector: 'app-category',
//   standalone: true,
//   imports: [CommonModule, ProductComponent], 
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.css']
// })
// export class CategoryComponent implements OnInit {
//   category: Category[] = [];

//   constructor(private service: SharedService) {}

//   ngOnInit(): void {
//     this.service.getCategory().subscribe(data => {
//       this.category = data;
//     });
//   }
// }
