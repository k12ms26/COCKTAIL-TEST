/*
 * question.js: 
 * Schema for a question, its option and corresponding paramerter points (e/i, n/s, t/f, p/j)
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    index: {type: Number, unique: true},
    content: String,
    options: [{
        description: String,
        ei_point: {type: Number, default: 0},
        ns_point: {type: Number, default: 0},
        tf_point: {type: Number, default: 0},
        pj_point: {type: Number, default: 0}
    }],
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('question', questionSchema);