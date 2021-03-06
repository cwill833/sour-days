const User = require('../models/user');
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

module.exports = {
    getAllBeers,
    createBeer,
    deleteBeer,
    editBeer,
    yelpSearch
  };

  function editBeer(req, res){
    console.log(req)
  }

  function deleteBeer(req, res){
    console.log(req.body)
    const userId = req.body.user._id
    const beerId = req.body._id
    User.findById(userId)
    .then(person=>{
      const beer = person.beers.id(beerId)
      person.beers.remove(beer)
      person.save(()=>{
        res.status(201).json(req.body.beerIdx)
      })
    })
  }
  
  function createBeer(req, res) {
    console.log(req.body)
    let id = req.body.user._id
    let location = req.body.location
    let beerName = req.body.beerName
    let nameOfPlace = req.body.nameOfPlace
    let rating = req.body.rating
    User.findById(id)
    .then(person=>{
      let beer = {
        location,
        beerName,
        nameOfPlace,
        rating
      }
      person.beers.push(beer)
      console.log(person.beers[0])
      person.save(()=>{
          res.status(201).json(beer)
      })
    })
  }
  
  function getAllBeers(req, res) {
    User.findById(req.body._id)
    .then(person=>{
        console.log(person)
        res.status(200).json(person.beers)
    })
  }

  function yelpSearch(req, res){
    client.search({
      term: 'Bar',
      latitude: req.body.lat,
      longitude: req.body.lng,
      limit: 9
    }).then(response => {
      console.log(response.jsonBody.businesses);
      let result = response.jsonBody.businesses
      res.status(200).json(result)
    }).catch(e => {
      console.log(e);
    });
  }