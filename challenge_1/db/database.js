const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/coinDB');
/*
  {
    "time_period_start": "2018-01-01T00:00:00.0000000Z",
    "time_period_end": "2018-01-02T00:00:00.0000000Z",
    "time_open": "2018-01-01T00:00:03.0000000Z",
    "time_close": "2018-01-01T23:59:54.0000000Z",
    "price_open": 13880,
    "price_high": 13941.75,
    "price_low": 12801.38,
    "price_close": 13443.41,
    "volume_traded": 7688.475017236,
    "trades_count": 35486
  }
*/
const crypto = new mongoose.Schema({
  time_period_start: String,
  time_period_end: String,
  time_open: String,
  time_end: String,
  price_open: Number,
  price_high: Number,
  price_low: Number,
  price_close: Number,
  volume_traded: Number,
  trades_count: Number,
});

const Coin = mongoose.model('coin', crypto);

const find = () => Coin.find();

module.exports = find;
