const Transaction = require('../models/transaction');
const express = require('express');
const router = express.Router()

const {
  getAllTransactions,
  getOneTransaction,
  addNewTransaction,
  deleteTransaction,
  updateTransaction
} = require('../controllers/transactionsController');

router
.get('/',       getAllTransactions)  // GET ALL TRANSACTIONS
.post('/',      addNewTransaction)   // CREATE NEW TRANSACTION
.get('/:id',    getOneTransaction)   // GET ONE TRANSACTION
.delete('/:id', deleteTransaction)   // DELETE TRANSACTION
.patch('/:id',  updateTransaction)   // UPDATE TRANSACTION

module.exports = router;