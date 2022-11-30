const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require ('../model/userModel')

const protect = asyncHandler(async(req, res, next) =>{
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
      token = req.headers.authorization.split(' ')[1] //this method takes the token from the headers, and split them without the Bearer word (its a format of jwt)
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    }catch(error){
      res.status(401)// there i delete a console log, that was making trouble with the error message
      throw new Error('Not authorized')
    }
  }
  if(!token){
    res.status(401)
    throw new Error('Not authorized, no token') 
  }
})


module.exports = {protect}