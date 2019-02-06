const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

/* // a simple test url to check that all of our files are communicating correctly.
router.get('/example', product_controller.test);
module.exports = router; */

// CREATE ROUTE //
router.post('/create', product_controller.product_create);
// CREATE ROUTE //

// READ ROUTE //
router.get('/:id', product_controller.product_details);
// READ ROUTE //

// UPDATE ROUTE //
router.put('/:id/update', product_controller.product_update);
// UPDATE ROUTE //

// DELETE ROUTE //
router.delete('/:id/delete', product_controller.product_delete);
// DELETE ROUTE //

module.exports = router ;