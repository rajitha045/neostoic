'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.get('/', function (req, res) {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:employeeId', function (req, res) {
  return res.send(req.context.models.users.find(function (element) {
    if (element.employeeId == req.params.employeeId) {
      return element;
    }
  }));
});

exports.default = router;