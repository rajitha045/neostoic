'use strict';

require('dotenv/config');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Application-Level Middleware

app.use((0, _cors2.default)());

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  req.context = {
    models: _models2.default,
    me: _models2.default.users[1]
  };
  next();
});

// Routes

app.use('/users', _routes2.default.user);
app.use('/jobPostings', _routes2.default.jobPostings);

// Start

app.listen(process.env.PORT, function () {
  return console.log('App listening on port ' + process.env.PORT + '!');
});