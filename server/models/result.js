var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultSchema = new Schema({
    result_type: String,
    ei_point: Number,
    ns_point: Number,
    tf_point: Number,
    pj_point: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('result', resultSchema);