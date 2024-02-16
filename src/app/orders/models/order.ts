import { Item } from './item';

export interface Order {
  id: string;
  orderNo: string;
  contactName: string;
  orderDate: String;
  orderTotal: number;
  taxTotal: number;
  grandTotal: number;
  itemsOrdered: Item[];
}
