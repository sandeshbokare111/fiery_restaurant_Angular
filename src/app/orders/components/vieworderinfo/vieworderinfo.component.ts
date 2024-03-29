import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order';
import { Item } from '../../models/item';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet],
  templateUrl: './vieworderinfo.component.html',
  styleUrl: './vieworderinfo.component.css',
})
export class VieworderinfoComponent implements OnInit {
  order: Order[] = [];
  orderNo: any;
  error: any;
  orderItems: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    console.log(
      this.route.params.subscribe((params) => {
        this.orderNo = params['orderNo'];
      })
    );
    this.route.queryParams.subscribe((params) => {
      this.orderNo = params['orderNo'];
      this.getOrderDetails();
    });
    console.log(this.route.queryParams);
    console.log(this.route.snapshot.paramMap.get('orderNo'));
    this.orderNo = this.route.snapshot.paramMap.get('orderNo');
  }

  getOrderDetails(): void {
    console.log('inside orderDetail');
    //console.log(this.orderService.getOrder(this.orderNo));
    this.orderService.getOrderByOrderNo(this.orderNo).subscribe(
      (order: any) => {
        this.order = order;
        console.log('Fetched order:', this.order);
        this.orderItems = order.itemsOrdered;
      },
      (error: any) => {
        console.error('Error fetching order:', error);
      }
    );
  }

  getOrderDetail(): void {
    console.log('inside orderDetail');
    console.log(this.orderService.getOrder(this.orderNo));

    this.orderService.getOrder(this.orderNo).subscribe(
      (order: Order) => {
        order.orderNo = this.orderNo;
        console.log('Fetched order:', this.order);
      },

      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.error = `Order with order number ${this.orderNo} not found.`;
        } else {
          this.error = 'An error occurred while fetching order details.';
        }
        console.error('Error fetching order:', error);
      }
    );
  }
}
