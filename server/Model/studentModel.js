const mongoose = require('mongoose')

const Students = new mongoose.Schema({
  serialNumber: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  phone: Number,
  status:{type:Boolean,
  defult:true
  }
});

Students.pre('validate',async function  (next) {

  const doc = this;
console.log(this);
  if (doc.isNew) {
   
    await StudentModel.findOne().sort('-serialNumber').then(function( lastDoc,err) {
   
// console.log(lastDoc);
// console.log(err);
      if (err) return next(err);

      doc.serialNumber = (lastDoc && lastDoc.serialNumber || 0) + 1;
      next();
    });
  } else {
    next();
  }
});


// Students.pre('findOneAndDelete', async function(next) {

//   const doc = this;
//   // console.log(doc);
//   console.log('werfa');
//   await StudentModel.find({ serialNumber: { $gt: doc.serialNumber } }).then(function( docs,err) {
//     console.log('hrthsrhrh');
//     console.log(docs);
//     console.log(err);
//     if (err) return next(err);
//     docs.forEach(function(doc) {
//       doc.serialNumber -= 1;
//       doc.save();
//     });
//     next();
//   });
// });












const StudentModel = mongoose.model('students', Students);

module.exports = { StudentModel };
