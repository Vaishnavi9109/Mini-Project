import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product, SharedService } from '../../../shared.service';



@Component({
  selector: 'app-frequently-ordered',
  imports: [CommonModule],
  templateUrl: './frequently-order.component.html',
  styleUrls: ['./frequently-order.component.css'],
})
export class FrequentlyOrderedComponent {
  items:Product[] = [];

  constructor(private service: SharedService) { }
  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      this.items = res;
    });
  }
}








