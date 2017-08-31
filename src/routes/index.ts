'use strict';

import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.get('/hello', (req, res, next) => {
  const db = req.db
  db('person')
    .limit(2)
    .then((result) => { 
      res.send(result)
     })
    .catch(error => { 
      res.send({error: error.message})
     })
});
router.post('/hello', (req, res, next) => {
  const userName = req.body.userName
  res.send({ ok: true, message: "Username: " + userName })
});
// router.put('/hello',(req,res,next) => {
//   const name = req.query.name
//   res.send({ ok : true, message: "Put " + name})
// });
// router.delete('/hello',(req,res,next) => {
//   const name = req.query.name
//   res.send({ ok : true, message: "Delete " + name})
// });
router.get('/hello/:name', (req, res, next) => {
  const name = req.params.name
  res.send({ ok: true, message: "Hello " + name });
});

export default router;