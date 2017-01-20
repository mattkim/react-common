const express = require('express');
const bodyParser = require('body-parser');
const createEvent = require('./db').createEvent;

const app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

function setupHeaders(res) {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
}

// Shortcut catch all for options
app.options('/*', function (req, res) {
  setupHeaders(res);
  res.json();
});

app.post('/create_event', function (req, res) {
  setupHeaders(res);

  const currEvent = req.body;
  const event = createEvent(currEvent);

  if (!event) {
    res.send({});
  } else {
    res.send(event);
  }
});

app.post('/test', function (req, res) {
  setupHeaders(res);
  res.send(req.body);
});

app.get('/test', function (req, res) {
  setupHeaders(res);
  res.send(req.query);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
