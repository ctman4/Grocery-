const express = require('express');
const drivers = require('./controllers/drivers');
const lists = require('./controllers/lists');

// Create the router
const router = express.Router();

// Handle course requests
router.get('/lists', lists.index);
router.get('/lists/:customerName', lists.retrieve);

// Handle section requests
router.get('/drivers', drivers.index);

// Export the router
module.exports = router;
