const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const coinRoute = require('./routes/coinRoute');

const app = express();

mongoose.connect('mongodb://localhost/coinDB');

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use('/crypto', coinRoute);

app.listen(3000, () => console.log('Example app'));
