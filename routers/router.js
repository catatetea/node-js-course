const express = require('express');
const router = express.Router();

const ResponseData = require('./responseData');
const responseData = new ResponseData();

const Mathematic = require('./mathematic/mathematic');
const mathematic = new Mathematic();

router.get('/square', (req, res, next) => {
    const { 
        a = null, 
        b = null, 
        c = null 
    } = req.query;

    res.send(mathematic.square(a, b, c));
});

router.get('/*', (req, res) => {
    res.send('Empty page');
});

module.exports = router;