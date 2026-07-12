const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = 'Works on my machine. Is it?';
  res.send(msg);
});

module.exports = app;
