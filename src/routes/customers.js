const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');
const updateController = require('../controllers/updateController');

router.get('/', customersController.list);
router.get('/update', updateController.list);


module.exports = router;