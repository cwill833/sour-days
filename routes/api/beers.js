const express = require('express');
const router = express.Router();
const beerCtrl = require('../../controllers/beers');

/*---------- Public Routes ----------*/
router.post('/all', beerCtrl.getAllBeers)
router.post('/create', beerCtrl.createBeer)
router.post('/deleteBeer', beerCtrl.deleteBeer)

/*---------- Protected Routes ----------*/




module.exports = router;