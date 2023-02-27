const dbConnect = require('./dbConfig/config');
const cors = require('cors');
const express = require('express');
require('dotenv').config();

// EXPRESS APP
const app = express()

// MIDDLEWARES
app.use(cors({ origin:'http://127.0.0.1:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// *** TEST ROUTE ***
// app.get('/', (req, res) => {
//   res.status(200).send({
//     status:'success',
//     message:'routes are working !!',
//   })
// });

// CONNECT TO DATABASE
dbConnect();

// ROUTES
app.use('/transactions', require('./routes/transactions'));

// PORT
const PORT = process.env.PORT || 4000;

// SERVER LISTENING
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
