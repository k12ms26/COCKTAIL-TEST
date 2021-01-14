var express = require('express');
const router = express.Router();

var Questions = require('./questions');
var Results = require('./results')

router.use('/question', Questions);
router.use('/result', Results)

router.use('/index', function(req, res, next) {
    res.json({
        message: 'hello world!'
    });
});

module.exports =  router;