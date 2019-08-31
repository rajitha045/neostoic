import uuidv4 from 'uuid/v4';
import { Router } from 'express';
import models from '../models/index';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.jobPostings));
});

router.get('/:jobId', (req, res) => {
  return res.send(req.context.models.jobPostings.find(function(element) {
    if(element.jobId == req.params.jobId){
      return element
    }
  }));
});

//TODO : sachinoda
router.post('/', (req, res) => {
  const id = uuidv4();
  var jobPosting = req.body;
  jobPosting['jobId'] = id;
  models.jobPostings.push(jobPosting);
  // console.log(jobPosting)
  // let jobPostings = [];
  // for(var posting in req.context.models.jobPostings) {
  //   jobPostings.push(posting);
  // }
  // jobPostings.push[jobPosting]
  // console.log(jobPostings);
  // req.context.models.jobPostings = jobPostings;
  // console.log(req.context.models.jobPostings);
  return res.send({code : 200,status : 'success'});
});

export default router;
