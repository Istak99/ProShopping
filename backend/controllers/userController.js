import asyncHandler from 'express-async-handler'
import genarateToken from '../utils/genarateToken.js';
import User from "../models/userModel.js";


// @desc Auth user and get token
// @route Post /api/users/login
// @access Public
const authUser= asyncHandler( async (req,res) => {
  const {email,password} = req.body

  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genarateToken(user._id)
    })
  }
  else{
    res.status(401)
    throw Error("Invalid Email or Password")
  }
  
})


// @desc GET user Profile
// @route GET /api/users/profile
// @access Private
const getUserProfile= asyncHandler( async (req,res) => {
  const user = await User.findById(req.user._id)
  
  if(user){
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
     })
  }
  else{
    res.status(404)
    throw new Error("User Not Found")
  }
}) 

export {authUser, getUserProfile}