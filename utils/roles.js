const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'vendor' },
  { id: 3, name: 'Charlie', role: 'customer' },
];

const roles = {
  admin: ['create_product', 'delete_product', 'view_orders', 'manage_users'],
  vendor: ['create_product', 'view_orders'],
  customer: ['view_orders'],
};

module.exports = { users, roles };