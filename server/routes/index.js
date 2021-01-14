var express = require('express');
var Questions = require('./questions');
const router = express.Router();

router.use('/question', Questions);

router.use('/index', function(req, res) {
    res.json({
        message: 'hello world!'
    });
    
});

module.exports =  router;