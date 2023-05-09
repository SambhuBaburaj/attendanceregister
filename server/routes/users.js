var express = require('express');
var router = express.Router();

const { LoginUser } = require('../Controller/User/LoginControl');
const { Vlidate, markattendance } = require('../Controller/User/Attandance');
/* GET users listing. */
router.post('/loginuser',LoginUser, function(req, res, next) {


  console.log(req.body);
});
router.post('/markattendance',markattendance)

module.exports = router;
