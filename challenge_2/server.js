const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const dbRoute = require('./routes/dbRoute');

mongoose.connect('mongodb://localhost/sales');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use('/checkout', dbRoute);

app.listen(3001, () => console.log('Listening to Port 3001'));
