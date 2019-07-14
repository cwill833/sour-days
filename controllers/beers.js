const User = require('../models/user');

module.exports = {
    getAllBeers,
    createBeer,
    deleteBeer,
    editBeer
    // getOnePost,
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
  
//   function getOnePost(req, res) {
//     Blog.findById(req.params.id).then(function(post) {
//       res.status(200).json(post);
//     });
//   }
  
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