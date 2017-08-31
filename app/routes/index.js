'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.get('/hello', (req, res, next) => {
    const db = req.db;
    db('person')
        .limit(2)
        .then((result) => {
        res.send(result);
    })
        .catch(error => {
        res.send({ error: error.message });
    });
});
router.post('/hello', (req, res, next) => {
    const userName = req.body.userName;
    res.send({ ok: true, message: "Username: " + userName });
});
router.get('/hello/:name', (req, res, next) => {
    const name = req.params.name;
    res.send({ ok: true, message: "Hello " + name });
});
exports.default = router;
//# sourceMappingURL=index.js.map