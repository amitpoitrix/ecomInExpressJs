const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const authorise = require('../middleware/roleMiddleware');
const manageUsers = require('../controllers/adminController');

const router = express.Router();

router.get(
    '/admin/manage', 
    authenticate, 
    authorise('manage_users'),
    manageUsers
);

module.exports = router;