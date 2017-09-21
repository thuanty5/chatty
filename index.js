const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(express.static('assets'));

const messages = [];

app.get('/messages', function (req, res, next) {
    res.status(200).json({ messages: messages });
  });

  app.post('/messages', function (req, res, next) {
    res.status(200).json({ messages: messages });
    messages.push({ message: req.body.message, time: new Date().toLocaleTimeString() });
  });

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});

