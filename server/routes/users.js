var express = require('express');
var router = express.Router();

const { LoginUser } = require('../Controller/User/LoginControl');
const { Vlidate, markattendance, ValidateAttandance } = require('../Controller/User/Attandance');
/* GET users listing. */
router.post('/loginuser',LoginUser, function(req, res, next) {


  console.log(req.body);
});
router.post('/markattendance',markattendance)
router.get('/attadancecheck',ValidateAttandance)
module.exports = router;
