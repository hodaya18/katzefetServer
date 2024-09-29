const express = require('express');
const router = express.Router();
const axios = require('axios');
const users = require("../Bl/users")

router.get('/', async (req, res) => {
  try{
    let user = await users.getUsers();
    return res.json({code: 200, data: {user}})
  }
  catch (err){
 return res.status(500).json({message:'error in get user',error:err})
  }
})
router.get("/:id", async  (req, res) =>{
  let id = req.params.id
  let user = await users.getUsersByName(id)
  res.json(user)
})
router.get("/:name", async  (req, res) =>{
  let name = req.params.name
  let user = await users.getUsersByName(name)
  res.json(user)
})
router.post("/", async  (req, res)=> {
  let user = req.body
  await users.createUser(user)
  res.send("created!!!")
})

router.put("/:id", async  (req, res) =>{
  let id = req.params.id
  let user = req.body
  let status = await users.updateUser(id, user)
  res.status(200).json({ msg: status })
})

router.delete("/:id", async  (req, res) =>{
  let id = req.params.id
  let user = req.body
  let status = await users.deleteUser(id, user)
  res.status(200).json({ msg: status })
})

module.exports = router;
