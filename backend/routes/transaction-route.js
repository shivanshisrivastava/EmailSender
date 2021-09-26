const express = require('express');
const transactionController = require('../controllers/transaction-controller');

const router = express.Router();

router.get('/transactions/:id', transactionController.transactions);
router.get('/transactions/getCount/:id', transactionController.getCount);
router.get('/transactions', transactionController.getAll);


module.exports = router;