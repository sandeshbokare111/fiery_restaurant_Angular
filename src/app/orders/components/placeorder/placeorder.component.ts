import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css',
})
export class PlaceorderComponent {
  inpOrder = {
    orderNo: '',
    contactName: '',
    orderDate: new Date(),
    itemsOrdered: [],
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0,
  };
  detail: any;
  order: any;

  constructor(private http: HttpClient) {}

  save() {
    this.http
      .post('http://localhost:3000/orders', this.inpOrder)
      .subscribe((d) => this.detail);
    console.log(this.detail);
    alert('Order data saved');
  }
  pd: boolean = false;
  push() {
    this.pd = true;
  }
}
