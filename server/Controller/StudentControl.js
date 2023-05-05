const { StudentModel } = require("../Model/studentModel");

const AddNewStudent = (req, res) => {
  const abcd = new StudentModel({ name: "samb", phone: 1234 });

  abcd.save();
};

const deleteStudent = async (req, res) => {
  await StudentModel.findOneAndDelete({ serialNumber: 1 }).then(
    async (doc, e) => {
      console.log(doc);
      await StudentModel.find({ serialNumber: { $gt: doc.serialNumber } }).then(
        function (docs, err, next) {
          console.log(docs);
          console.log(err);
          if (err) return next(err);
          docs.forEach(function (doc) {
            doc.serialNumber -= 1;
            doc.save();
          });
          next();
        }
      );
      console.log(e);
    }
  );
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
    }).save();
    console.log("eriug");
    res.json({ res: 1 });
  }
};
const studentdetail = async (req, res) => {
  console.log("ergser");
  console.log(req.query.class);
  const details = await StudentModel.find({ class: parseInt(req.query.class) });
  console.log(details);
  res.status(200).json(details);
};

const pouseSudent=async (req,res)=>
{
console.log(req.query);

await StudentModel.findOne({_id:req.query.student}).then (async s=>
  {
    console.log();
await StudentModel.findByIdAndUpdate({_id:req.query.student},{status:!s.status}).then(s=>console.log(s))
res.status(200).json(true)


  })

}

module.exports = { deleteStudent, newstudent, studentdetail ,pouseSudent};
