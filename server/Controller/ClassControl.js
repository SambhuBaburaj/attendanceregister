const { model } = require("mongoose");
const { classmodel } = require("../Model/ClassModel");
const { StudentModel } = require("../Model/studentModel");

const classdetail = async (req, res) => {
  const classdata = await classmodel.find().select({ Class: 1, _id: 0 });

  res.json({ classdata });
};

const addClass = async (req, res) => {
  const class1 = await classmodel.findOne({ Class: req.body.classname });
  if (class1) {
    res.json({ res: 0 });
  } else {
    new classmodel({ Class: req.body.classname }).save();
    res.json({ res: 1 });
  }
};

const DeleteClass = async (req, res) => {
  console.log(req.query.class);
  try {
    await classmodel.findOneAndRemove({ Class: req.query.class });
    res.status(200).json(true);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { classdetail, addClass, DeleteClass };
