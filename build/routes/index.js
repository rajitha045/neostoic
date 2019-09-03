'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _jobPostings = require('./jobPostings');

var _jobPostings2 = _interopRequireDefault(_jobPostings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  user: _user2.default,
  jobPostings: _jobPostings2.default
};