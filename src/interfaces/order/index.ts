import { OrderItemInterface } from 'interfaces/order-item';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id?: string;
  delivery_personnel_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  user_order_customer_idTouser?: UserInterface;
  user_order_delivery_personnel_idTouser?: UserInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  delivery_personnel_id?: string;
  status?: string;
}
