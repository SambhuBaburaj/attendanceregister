
const mongoose=require('mongoose')

const Teachers=new mongoose.Schema({
    name:String
})
const teachermodel=mongoose.model('teacher',Teachers)
module.exports={teachermodel}