/*
 * score.js: 
 * Schema for the score computed while a test is executed
 * After the test, result type is determined by points
 *  point >= 0 : e n t p
 *  point < 0 : i s f j
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
    name: String,
    ei_point: Number,
    ns_point: Number,
    tf_point: Number,
    pj_point: Number
});

module.exports = mongoose.model('score', scoreSchema);