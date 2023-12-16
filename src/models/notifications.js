var express = require('express'); 
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).send({
    notification: "This is a notification"
  })
})

module.exports = router;
