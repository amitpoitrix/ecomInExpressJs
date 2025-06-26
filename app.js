const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());

app.use(productRoutes);
app.use(orderRoutes);
app.use(adminRoutes);

module.exports = app;