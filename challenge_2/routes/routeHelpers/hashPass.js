const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPass = pass => bcrypt.hash(pass, saltRounds);

module.exports = hashPass;
