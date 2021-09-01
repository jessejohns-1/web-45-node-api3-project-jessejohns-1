const express = require('express');
const {validateUserId } = require("../middleware/middleware")
// You will need `users-model.js` and `posts-model.js` both
const Users = require("./users-model.js")

// The middleware functions also need to be required
const router = express.Router();

router.get('/', (req, res, next) => {
  Users.get()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  res.json(req.users)
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  
});

router.put('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
});

router.delete('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user)
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  console.log(req.user)
});

router.post('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
});

// do not forget to export the router
router.use((err, req, res, next) => { // we plug it AFTER the endpoints
  console.log(err.message)
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: 'Something bad inside the hubs router!'
  })
});

module.exports = router