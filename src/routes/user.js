import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:employeeId', (req, res) => {
   return res.send(req.context.models.users.find(function(element) {
    if(element.employeeId == req.params.employeeId){
      return element
    }
  }));
});

export default router;
