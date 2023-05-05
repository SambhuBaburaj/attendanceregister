var express = require("express");
var router = express.Router();
const { classmodel } = require("../Model/ClassModel");
const {
  classdetail,
  addClass,
  DeleteClass,
} = require("../Controller/ClassControl");
const { newstudent, studentdetail, deleteStudent, pouseSudent } = require("../Controller/StudentControl");
/* GET home page. */
router.post("/loginadmin", function (req, res, next) {
  console.log(req.body);
  console.log("sdrgeg");
  if (req.body.username == "nandu" && req.body.password == "1234") {
    res.json(true);
  }
});
router.get("/getclasses", classdetail, (req, res) => {});
router.post("/addclass", addClass);
router.get("/deleteclass", DeleteClass);
router.post("/addstudent", newstudent);
router.get('/pausestudent',pouseSudent)
router.get("/getstudents", studentdetail);
router.get("/deletestudent", deleteStudent);


module.exports = router;
