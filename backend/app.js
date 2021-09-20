const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-route');

const app = express();

app.use('/api/auth', authRoutes);

app.listen(5000);