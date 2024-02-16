// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Order } from '../../models/order';
import { Item } from '../../models/item';
import { OrderService } from '../../../services/order.service';
import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-vieworders',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet,RouterLink],
//   templateUrl: './vieworders.component.html',
//   styleUrl: './vieworders.component.css',
// })
// export class ViewordersComponent {
// private apiUrl = 'http://localhost:3000/orders';
// orderData: any;
// constructor(private http: HttpClient) {}

// getOrders() {
//   this.http
//     .get('http://localhost:3000/orders')
//     .subscribe((res) => (this.orderData = res));
//   console.log(this.orderData);
// }

// ngOnInit() {
//   this.http
//     .get('http://localhost:3000/orders')
//     .subscribe((res) => (this.orderData = res));
// }
// }

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css',
})
export class ViewordersComponent {
  isadd: boolean = false;
  orders: Order[] = [];
  items: Item[] = [];
  searchOrderId: any;

  detail: any;
  constructor(private os: OrderService, private http: HttpClient) {}

  getAllOrders() {
    this.isadd = true;
    console.log('inside get all');
    //console.log(this.orders)
    this.http.get('http://localhost:3000/Orders').subscribe((d: any) => {
      this.orders = d;
      console.log(this.orders);
    });
  }

  delete(id: string) {
    this.http
      .delete(`http://localhost:3000/Orders/${id}`)
      .subscribe((data: any) => this.getAllOrders());
    console.log('deleted');
    alert('Order deleted successfully');
    return this.getAllOrders();
  }

  searchOrder(): void {
    if (this.searchOrderId.trim() !== '') {
      this.orders = this.orders.filter(
        (order) => order.id === this.searchOrderId
      );
    } else {
      this.os.getOrders().subscribe((data) => {
        this.orders = data;
      });
    }
  }
}
