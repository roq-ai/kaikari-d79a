import { OrderItemInterface } from 'interfaces/order-item';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  category: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  business?: BusinessInterface;
  _count?: {
    order_item?: number;
  };
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  business_id?: string;
}
