import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, SharedService, } from '../../shared.service';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}















































// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { SharedService, Product } from 'src/app/shared/shared.service'; // ✅ Correct path

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private shared: SharedService) {}

//   ngOnInit(): void {
//     this.shared.getProducts().subscribe({
//       next: (res) => {
//         this.products = res || [];
//       },
//       error: (err) => {
//         console.error('Failed to load products:', err);
//       }
//     });
//   }
// }



















