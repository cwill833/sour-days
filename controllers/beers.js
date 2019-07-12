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
    let email = req.user.email
    User.findOne({email: email})
    .then(person=>{
        person.beers.create(req.body)
        person.save(()=>{
            res.status(201).json(person.beers)
        })
    })
  }
  
  function getAllBeers(req, res) {
    let email = req.user.email
    User.findOne({email: email})
    .then(person=>{
        res.status(200).json(person.beers)
    })
  }