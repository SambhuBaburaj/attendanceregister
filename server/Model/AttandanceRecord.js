const mongoose =require('mongoose')

const recordSchema=mongoose.Schema({
    teacher:String,
    class:Number,
   month:Number,
   year:Number,
   day:Number
})
const recordModel=mongoose.model('AttandanceRecord',recordSchema)
module.exports={recordModel}