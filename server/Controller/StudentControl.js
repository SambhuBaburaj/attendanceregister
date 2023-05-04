const { StudentModel } = require("../Model/studentModel");




const AddNewStudent=(req,res)=>
{

    const abcd=new StudentModel({name:'samb',phone:1234})

    abcd.save()
    
    
}

const deleteStudent=async (req,res)=>
{
    await StudentModel.findOneAndDelete({serialNumber:1}).then(async (doc,e)=>
    {
console.log(doc);
await StudentModel.find({ serialNumber: { $gt: doc.serialNumber } }).then(function( docs,err,next) {

    console.log(docs);
    console.log(err);
    if (err) return next(err);
    docs.forEach(function(doc) {
      doc.serialNumber -= 1;
      doc.save();
    });
    next();
  });
console.log(e);
    })
}
module.exports={deleteStudent}
