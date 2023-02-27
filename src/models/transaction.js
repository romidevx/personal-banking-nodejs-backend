const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  amount:{
    type:Number,
    required:true
  },
  // date: {
  //   type: Date,
  //   default:new Date(),
  // },
}, { timestamps: true });

module.exports = model("Transaction", transactionSchema);