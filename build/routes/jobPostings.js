'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _express = require('express');

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res) {
  return res.send(Object.values(req.context.models.jobPostings));
});

router.get('/:jobId', function (req, res) {
  return res.send(req.context.models.jobPostings.find(function (element) {
    if (element.jobId == req.params.jobId) {
      return element;
    }
  }));
});

//TODO : sachinoda
router.post('/', function (req, res) {
  var id = (0, _v2.default)();
  var jobPosting = req.body;
  jobPosting['jobId'] = id;
  _index2.default.jobPostings.push(jobPosting);
  // console.log(jobPosting)
  // let jobPostings = [];
  // for(var posting in req.context.models.jobPostings) {
  //   jobPostings.push(posting);
  // }
  // jobPostings.push[jobPosting]
  // console.log(jobPostings);
  // req.context.models.jobPostings = jobPostings;
  // console.log(req.context.models.jobPostings);
  return res.send({ code: 200, status: 'success' });
});

exports.default = router;