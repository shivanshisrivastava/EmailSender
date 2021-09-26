const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-route');
const emailRoutes = require('./routes/email-route');
const transactionRoute = require('./routes/transaction-route');

const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
})

app.use('/api/', authRoutes);
app.use('/api/', emailRoutes);
app.use('/api/', transactionRoute);

app.listen(5000);