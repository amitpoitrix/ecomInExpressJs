const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const authorise = require('../middleware/roleMiddleware');
const { createProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.post(
    '/product', 
    authenticate, 
    authorise('create_product'),  // Dynamic Middleware using Currying
    createProduct
);

router.delete(
    '/product',
    authenticate,
    authorise('delete_product'),
    deleteProduct
);

module.exports = router;