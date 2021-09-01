const express = require('express');
const { logger, validateUserId,validateUser,validatePost } = require("../middleware/middleware")
// You will need `users-model.js` and `posts-model.js` both
const Users = require("./users-model.js")
const Posts = require("../posts/posts-model.js")
// The middleware functions also need to be required
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(req, "HEREISREQ")
  Users.get()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(next)
});

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
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