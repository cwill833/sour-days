const User = require('../models/user');

module.exports = {
    getAllBeers,
    createBeer,
    // getOnePost,
    // deletePost
  };
  
//   function deletePost(req, res) {
//     Blog.findByIdAndRemove(req.params.id).then(function(blog) {
//       res.status(200).json(blog);
//     });
//   }
  
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
      console.log(beer)
        person.save(()=>{
            res.status(201).json(beer)
        })
    })
  }
  
  function getAllBeers(req, res) {
    console.log(req.body.user)
    User.findById(req.body.user._id)
    .then(person=>{
        res.status(200).json(person.beers)
    })
  }