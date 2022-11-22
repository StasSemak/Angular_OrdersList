import { Component, OnInit } from '@angular/core';
import { ORDERS } from './mock-data';
import { IOrder } from './order-item';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: IOrder[] = ORDERS;

  constructor() { }

  ngOnInit(): void {
  }

  done(order: IOrder): void{
    order.delivered = true;
  }
  remove(order: IOrder): void{
    if (confirm("Do you want to delete this order?")) {
      const index = this.orders.indexOf(order);
      if (index > -1) {
        this.orders.splice(index, 1);
      }
    }
  }

}
