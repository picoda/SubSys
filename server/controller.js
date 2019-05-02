const express = require("express");
const router = express.Router()

console.log(__dirname);

//router.use('/upload', require('./upload'))
//router.use('/user', require('./user'))

router.get('/', function(req, res) {
  res.send("Backend");
})


module.exports = router
