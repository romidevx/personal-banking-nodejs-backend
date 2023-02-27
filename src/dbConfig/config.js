const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    return console.log('connected to database')
  })
  .catch((err) => {
    console.log(err)
  }) 
};


module.exports = connectDB;