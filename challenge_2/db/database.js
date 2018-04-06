const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sales');

const checkoutSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: Number,
  phone: Number,
  creditCard: Number,
  expDate: String,
  cvv: Number,
  billZip: Number,
}).index({ name: 1 });

const Checkout = mongoose.model('checkout', checkoutSchema);

const insert = (sale) => {
  const newSale = new Checkout(sale);
  return newSale.save();
};

const fetch = name => Checkout.find({ name });

module.exports = {
  insert,
  fetch,
};
