const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const authorise = require('../middleware/roleMiddleware');
const getOrders = require('../controllers/orderController');

const router = express.Router();

router.get(
    '/orders', 
    authenticate, 
    authorise('view_orders'),
    getOrders
);

module.exports = router;