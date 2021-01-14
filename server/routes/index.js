var express = require('express');
var Questions = require('./questions');
 
const router = express.Router();
router.use('/question', Questions);
 
module.exports =  router;