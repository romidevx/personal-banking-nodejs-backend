const Transaction = require('../models/transaction');

// GET ALL TRANSACTIONS
const getAllTransactions = async (req,res) => {
  try {
    //let transactions = await Transaction.find({}).sort({createdAt: -1})
    //let primeiro = new Date(new Date().getFullYear(), 1, 1)
    //let ultimo = new Date(new Date().getFullYear(), 1 + 1, 0)
    let firstDay = new Date(new Date().getFullYear(), 1, 1);
    let lastDay =  new Date(new Date().getFullYear(), ( new Date().getMonth() + 1 ), 0)

    let transactions = await Transaction.find({createdAt: {
      $gte: firstDay, 
      $lte: lastDay
    }}).sort({createdAt: -1});

    res.status(200).json({
      success:true,
      message:'All transactions',
      transactions,
    })

  } catch (error) {
    res.status(400).json({ 
      success:false,
      message: error.message 
    })
  }
}

// GET ONE TRANSACTION
const getOneTransaction = async (req,res) => {
  const {id} = req.params;

  try {
    const transaction = await Transaction.findById(id)
    res.status(200).send({
      success:true,
      message:'Transaction found',
      transaction,
    })
  } catch (error) {
    res.status(400).send({ 
      success:false,
      message: error.message,
    })
  }
}

// CREATE A NEW TRANSACTION
const addNewTransaction = async (req,res) => {
  const {title,type,amount} = req.body;

  try {
    const transaction = await Transaction.create({ title, type, amount });

    res.status(201).json({
      success:true,
      message:'transaction '+ title +' created !!',
      transaction,
    });


  } catch (error) {
    res.status(400).json({ 
      success:false,
      message: error,
    })
  }
}

// DELETE A TRANSACTION
const deleteTransaction = async(req,res) => {
  const {id} = req.params;

  try {
    const transaction = await Transaction.findOneAndDelete({ _id: id });

    res.status(200).json({
      success:true,
      message:'transaction deleted..' + id,
      transaction
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      message: 'problem deleting transaction',
    })
  }
}

// UPDATE A TRANSACTION
const updateTransaction = async (req,res) => {
  const {id} = req.params;

  try {
    const transaction = await Transaction.findOneAndUpdate({_id: id}, {
      title:  req.body.title,
      type:   req.body.type,
      amount: req.body.amount,
      transaction
    })

    res.status(200).json({
      success:true,
      message:'transaction: '+ req.body.title + ' updated..',
    })
  } catch (error) {
    res.status(400).json({ 
      success:false,
      message: error.message,
    })
  }
}

module.exports = {
  getAllTransactions,
  getOneTransaction,
  addNewTransaction,
  deleteTransaction,
  updateTransaction
}