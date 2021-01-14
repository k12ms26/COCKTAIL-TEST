var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
    ei_point: Number,
    ns_point: Number,
    tf_point: Number,
    pj_point: Number
});

module.exports = mongoose.model('score', scoreSchema);