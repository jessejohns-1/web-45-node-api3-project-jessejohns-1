const User = require('../users/users-model')

function logger(req, res, next) {
  console.log('this is happening!')
  console.log(`it is a ${req.method} request!`)
  next()
}

function validateUserId(req, res, next) {
 const { id } = req.params
 User.getById(id)
 .then(iDValue => {
   if (iDValue) {
     req.user = iDValue
     next()
   }else{
     next({ status: 404, meesage: "user not found"})
   }
 })
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId,validateUser, validatePost }