# ecomInExpressJs
Ecommerce application using Express.js

Setup an express server and create the below endpoints with Authentication and Authorization middleware.

### Routes

/product - create

/product - delete

/orders - get

/admin/manage – get

### Data:
users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'vendor' },
  { id: 3, name: 'Charlie', role: 'customer' },
];

roles = {
  admin: ['create_product', 'delete_product', 'view_orders', 'manage_users'],
  vendor: ['create_product', 'view_orders'],
  customer: ['view_orders']
};

permissions = [
'create_product',
'delete_product',
'view_orders',
'manage_users',
];