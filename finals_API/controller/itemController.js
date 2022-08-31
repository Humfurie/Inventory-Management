const express = require('express');

const item = require('../queries/itemQuery');
const itemRouter = express.Router();

itemRouter.post('/', (req, res) => {
    item.insert(req.body, (call) => {
        res.json(call);
    })
});

itemRouter.get('/', (req, res) => {
    item.selectAll((call) => {
        res.json(call);
    })
});

itemRouter.get('/:id', (req, res) => {
    item.selectOne(req.params.id, (call) => {
        res.json(call);
    })
});

itemRouter.put('/:id', (req, res) => { 
    item.update(req.body, req.params.id, (call) => {
        res.json(call);
    })
});

itemRouter.delete('/:id', (req, res) => {
    item.delete(req.params.id, (call) => {
        res.json(call);
    })
});

module.exports = itemRouter;
