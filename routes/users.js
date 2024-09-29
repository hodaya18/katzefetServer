const express = require('express');
const router = express.Router();
const axios = require('axios');
const Users = require('../collections/users');

router.get('/', async (req, res) => {
  try{
    let user = await Users.findOne();
    return res.json({code: 200, data: {user}})
  }
  catch (err){
 return res.status(500).json({message:'error in get user',error:err})
  }
})

router.post('/createUser',async (req, res) => {
  try{    
const {
  userId,
    fullName,
    password
  } = req.body

  const newUser =  new Users({
    userId,
    fullName,
    password
  })
  const savedUser = await newUser.save()
  return res.json({code: 200, data: {savedUser}})
} catch (err){
    console.log(err);
    return res.status(500).json({message:'error in save user',error:err})
     }
})

module.exports = router;
