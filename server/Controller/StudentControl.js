const { default: mongoose } = require("mongoose");
const { StudentModel } = require("../Model/studentModel");
const { teachermodel } = require("../Model/TeacherModel");
const { recordModel } = require("../Model/AttandanceRecord");

const AddNewStudent = (req, res) => {
  const abcd = new StudentModel({ name: "samb", phone: 1234 });

  abcd.save();
};

const deleteStudent = async (req, res) => {
  try {
    console.log(new mongoose.Types.ObjectId(req.query.studentis));
    await StudentModel.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(req.query.studentis),
    })
.then(async data=>
  {
    
    const filter = { class: data.class, serialNumber: { $gt: data.serialNumber } };
    const update = { $inc: { serialNumber: -1 } };
    
    await StudentModel.updateMany(filter, update);

  }
)

res.json(true)
  } catch (error) {
    console.log(error);
  }
};

const newstudent = async (req, res) => {
  console.log(req.body);
  const student = await StudentModel.findOne({
    name: req.body.Student,
    phone: req.body.phone,
  });
  console.log(student);
  if (student) {
    res.json({ res: 0 });
  } else {
    console.log(req.body.phone);
    StudentModel({
      accademy: "Wisdom",
      name: req.body.Student,
      phone: req.body.Phone,
      class: req.body.class,
      attandance:[]
    }).save();

    res.json({ res: 1 });
  }
};
const studentdetail = async (req, res) => {
  const details = await StudentModel.find({ class: parseInt(req.query.class) });

  res.status(200).json(details);
};

const pouseSudent = async (req, res) => {
  console.log("yes im here");
  console.log(req.query);
  console.log("dlgijedsognosenkmgs");
  await StudentModel.findOne({ _id: req.query.student }).then(async (s) => {
    console.log();
    await StudentModel.findByIdAndUpdate(
      { _id: req.query.student },
      { status: !s.status }
    ).then((s) => console.log(s));
    res.status(200).json(true);
  });
};
const GetYear=(req,res)=>
{
console.log(req.query);
  recordModel.distinct( "year" ).then(data=>
    {
      res.json({data})
      // console.log(data);
    })



}
module.exports = { deleteStudent, newstudent, studentdetail, pouseSudent ,GetYear};
