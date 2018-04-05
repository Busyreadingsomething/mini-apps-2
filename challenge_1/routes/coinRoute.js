const express = require('express');
const find = require('../db/database');

const coinRouter = express.Router();

coinRouter.get('/:coin', (req, res) => {
  console.log(req.param.coin, 'OVER HERE');
  find().then(result => res.json(result));
});

module.exports = coinRouter;
