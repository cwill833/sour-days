const express = require('express');
const router = express.Router();
const beerCtrl = require('../../controllers/beers');

/*---------- Public Routes ----------*/
router.get('/all', beerCtrl.getAllBeers)
router.post('/create', beerCtrl.createBeer)


/*---------- Protected Routes ----------*/




module.exports = router;