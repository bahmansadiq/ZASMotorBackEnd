var express     = require('express');
var router 		= express.Router();
var customerController=require("../controllers/customerController");
var inventoryController=require("../controllers/inventoryController");
var dealerController=require("../controllers/dealerController");
router.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
//get post delete and get goes here for all the path controllers
// =======================
// routes for Customers ================
// =======================
router.get('/Customers', customerController.getCustomer);
router.post('/Customers', customerController.postCustomer);
router.delete('/customers/:CustomerId', customerController.deleteCustomer);
router.put('/customers/:CustomerId', customerController.putCustomer);
// =======================
// routes for inventories ================
// =======================
router.get('/Inventories', inventoryController.getInventory);
router.post('/Inventories', inventoryController.postInventory);
router.delete('/Inventories/:InventoryId', inventoryController.deleteInventory);


// =======================
// routes for dealers================
// =======================
router.get('/Dealers', dealerController.getDealer);
router.post('/Dealers', dealerController.postDealer);
router.delete('/Dealers/:DealerId', dealerController.deleteDealer);
module.exports = router;
