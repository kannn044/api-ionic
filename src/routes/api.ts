'use strict';

import * as express from 'express';
const router = express.Router();

router.get('/person', (req, res, next) => {
  const db = req.db
  db('person')
    .limit(20)
    .then((result) => {
      res.send(result)
    })
    .catch(error => {
      res.send({ error: error.message })
    })
});
router.post('/person', (req, res, next) => {
  const db = req.db
  const name = req.body.name
  const lname = req.body.lname
  const sex = req.body.sex
  const tarea = req.body.tarea

  if (name && lname && sex && tarea) {
    db('person')
    .insert({
      HOSPCODE: '10729',
      PID: Math.floor(Math.random()*1000000),
      NAME: name,
      LNAME: lname,
      SEX: sex,
      TYPEAREA: tarea,
    })
    .then((result) => {
      res.send({ok: true})
    })
    .catch(error => {
      res.send({ error: error.message })
    }) 
  } else {
    res.send({ ok: false , error: 'ข้อมูลไม่ครบ'})
  }
});
router.get('/person/search', (req, res, next) => {
  const db = req.db
  const query = req.query.query
  const _query = '%' + query + '%'
  db('person')
    .select('HOSPCODE', 'NAME', 'LNAME')
    .where(or => {
      or.orWhere('NAME', 'LIKE', _query)
        .orWhere('LNAME', 'LIKE', _query)
    })
    .limit(10)
    .then((result) => {
      res.send(result)
    })
    .catch(error => {
      res.send({ error: error.message })
    })
});
export default router;