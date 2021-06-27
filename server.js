'use strict';
const express = require('express');
const app = express();
const notfoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/', lifeProof);
app.get('/bad', badHandler);

function lifeProof(req, res) {
  res.status(200).send('home route');
}

function badHandler(req, res) {
  throw new Error('some thing went wrong');
}

app.use('*', notfoundHandler);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
  app: app,
  start: start,
};
