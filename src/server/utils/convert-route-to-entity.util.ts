const mapping: Record<string, string> = {
  businesses: 'business',
  items: 'item',
  orders: 'order',
  'order-items': 'order_item',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
