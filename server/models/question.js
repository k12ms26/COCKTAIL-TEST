var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    index: Number,
    question: String,
    option: [{
        index: Number,
        description: String,
        ei_point: Number,
        ns_point: Number,
        tf_point: Number,
        pj_point: Number
    }],
    date_created: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('question', questionSchema);