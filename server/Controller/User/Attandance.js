const { recordModel } = require("../../Model/AttandanceRecord");
const { StudentModel } = require("../../Model/studentModel");

const markattendance=async (req,res)=>
{
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Add 1 because months are zero-indexed
  const day = today.getDate();
req.body.data1.forEach(async element => {
    
    await StudentModel.findByIdAndUpdate({_id:element._id}, { $push: { attandance:new Date() } }).then(s=>
        {
         
        })
    

});

await recordModel({
  teacher:req.body.data2,
  class:req.body.data1[0].class,
 month:month,
 year:year,
 day:day
})  .save()
res.json(true)
}

const ValidateAttandance=async (req,res)=>
{
  const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Add 1 because months are zero-indexed
const day = today.getDate();
console.log(req.query);

 const record=await recordModel.findOne({class:req.query.class,year:year,month:month,day:day})
 
if(record)
{
res.status(404).json(false)
}
else{
  res.status(200).json(true)

}
}
module.exports={markattendance,ValidateAttandance}