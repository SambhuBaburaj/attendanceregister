const mongoose =require('mongoose')
mongoose.connect(process.env.mongourl).then(()=>
{
    console.log('db connected');
})
