const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/detonation', function (req, res) {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  console.log('Khiem rocks');

  res.sendStatus(200);
});

app.listen(9001);