const { Message } = require("twilio/lib/twiml/MessagingResponse");
const { recordModel } = require("../../Model/AttandanceRecord");
const { StudentModel } = require("../../Model/studentModel");
const wbm = require("wbm");

const markattendance = async (req, res) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Add 1 because months are zero-indexed
  const day = today.getDate();
  // console.log(  req.body.data1,req.body.data1);
  finalArray = req.body.data1.map(function (obj) {
    return obj._id;
  });

  console.log(finalArray);
  console.log("after");
  const absent = await StudentModel.find({
    class: req.body.data1[0].class,
    _id: { $nin: finalArray },
  });

  console.log(absent);

  req.body.data1.forEach(async (element) => {
    await StudentModel.findByIdAndUpdate(
      { _id: element._id },
      { $push: { attandance: new Date() } }
    );
  });
  await recordModel({
    teacher: req.body.data2,
    class: req.body.data1[0].class,
    month: month,
    year: year,
    day: day,
  }).save()

  absent.forEach((element) => {
    const accountSid = "AC3598bcbb789beed17922bdf9d820104a";
    const authToken = "11e54e910b86e69c50c39f4773a3c361";
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `
        
        I am writing to inform you that your child, ${element.name} , was absent from school today, without prior notification. We take attendance and punctuality very seriously at Wisdom, and it is important that we maintain regular communication with parents to ensure that our students are receiving the best possible education.

If you are aware of any circumstances that may have caused your child's absence, please let us know as soon as possible. We value your input and want to work with you to ensure your child's academic success.

Please also be reminded that if your child will be absent from school in the future, it is important to notify us in advance by calling with the details of the absence.
        
        `,
        from: "whatsapp:+14155238886",
        to: `whatsapp:+91${element.phone}`,
      })
      .then((Message) => console.log(Message.sid));
  });
  res.json(true);
};

const ValidateAttandance = async (req, res) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Add 1 because months are zero-indexed
  const day = today.getDate();
  console.log(req.query);

  const record = await recordModel.findOne({
    class: req.query.class,
    year: year,
    month: month,
    day: day,
  });

  if (record) {
    res.status(404).json(false);
  } else {
    res.status(200).json(true);
  }
};
module.exports = { markattendance, ValidateAttandance };
