const { teachermodel } = require("../../Model/TeacherModel");

const AddTeahcer=async (req,res)=>
{

 

if(!await teachermodel.findOne({name:req.body.data}))
{
    await  teachermodel({
        name:req.body.data
    }).save()
    res.json({res:1})
}
else{
    res.json({res:0})
}

}
const GetTeahcer=async (req,res)=>
{
const teachers=await teachermodel.find().select({ name: 1, _id: 0 });
res.json(teachers)
}
const RemoveTeahcer=(req,res)=>
{
    console.log(req.query);
    teachermodel.findOneAndDelete({name:req.query.data}).then(data=>
        {
            res.json(true)
        })
}
module.exports={AddTeahcer,GetTeahcer,RemoveTeahcer}