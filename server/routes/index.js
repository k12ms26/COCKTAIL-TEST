var express = require('express');
var fs = require('fs')

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

router.use('/images/:img', function(req, res, next) {
    fs.readFile(req.params.img, function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

module.exports =  router;