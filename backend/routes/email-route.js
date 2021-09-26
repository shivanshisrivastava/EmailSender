const express = require('express');
const emailController = require('../controllers/email-controller');

const router = express.Router();

router.post('/email', emailController.email);

module.exports = router;