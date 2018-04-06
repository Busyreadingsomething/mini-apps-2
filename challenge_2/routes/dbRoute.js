const express = require('express');
const hashPass = require('./routeHelpers/hashPass');
const { insert, fetch } = require('../db/database');

const dbRoute = express.Router();

dbRoute.post('/', (req, res) => {
  const { body } = req;
  const bodyCopy = Object.assign(body);

  hashPass(body.password)
    .then((hash) => {
      bodyCopy.password = hash;
      insert(bodyCopy)
        .then(() => res.sendStatus(201))
        .catch(e => res.send(e));
    });
});

dbRoute.get('/:name', (req, res) => {
  const { name } = req.params;
  fetch(name)
    .then(result => res.send(result))
    .catch(e => res.send(e));
});

module.exports = dbRoute;
