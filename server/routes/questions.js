var express = require('express');
const Question = require('../models/question')
const router = express.Router();

// get all questions
router.get('/', function(req, res) {
    Question.find()
    .sort({"index": 1})
    .exec(function(err, questions) {
        if(err) return res.status(500).json({error: err});
        res.json({
            resultCode: 1,
            message: "Success",
            count: questions.length,
            results: questions
        });
    })
});

// get single question by _id
router.get('/id/:id', function(req, res) {
    Question.findOne({_id: req.params.id}, function(err, question) {
        if(err) return res.status(500).json({error: err});
        if(!question) return res.status(404).json({error: 'Question not found'});
        res.json(question);
    })
});

// get single question by index
router.get('/index/:index', function(req, res) {
    Question.findOne({index: req.params.index}, function(err, question) {
        if(err) return res.status(500).json({error: err});
        if(!question) return res.status(404).json({error: 'Question not found'});
        res.json(question);
    })
});

// post single question
router.post('/', function(req, res) {
    Question.find()
    .select("index")
    .sort({"index": -1})
    .limit(1)
    .exec(function(err, questions) {
        if(err) return res.status(500).json({error: err});
        var question = new Question();
        if(!questions) question.index = 1
        else if (questions.length == 0) question.index = 1
        else {
            question.index = (questions[0].index + 1);
        }
        question.content = req.body.content;
        question.options = req.body.options;
        console.log(question)
        question.save(function(err) {
            if(err){
                console.error(err);
                res.status(500).json({error: err});
                return;
            }
            res.status(200).json({
                resultCode: 1,
                message: "Successfully created",
                _id: question._id
            });
        })
    });
});

// edit single question by _id
router.put('/id/:id', function(req, res) {
    Question.findOne({_id: req.params.id}, function(err, question) {
        if(err) return res.status(500).json({error: err});
        question.content = req.body.content
        question.option = req.body.option
        question.save(function(err) {
            if(err){
                console.error(err);
                res.status(500).json({error: err});
                return;
            }
            res.status(204).end()
        })
    });
});

// delete single question by _id
router.delete('/id/:id', function(req, res, next){
    Question.deleteOne({ _id: req.params.id }, function(err, output){
        if(err) {
            res.status(500).json({ error: err });
            return
        }
        res.status(204).end()
    })
});

module.exports =  router;