const mongoose=require('mongoose')

const Class=new mongoose.Schema({
    Class:Number
})

const classmodel=mongoose.model('Class',Class)
module.exports ={classmodel}