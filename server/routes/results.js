var express = require('express');
const Result = require('../models/result')
const router = express.Router();

// get all results
router.get('/', function(req, res) {
    Result.find()
    .exec(function(err, results) {
        if(err) return res.status(500).json({error: err});
        res.json({
            resultCode: 1,
            message: "Success",
            count: results.length,
            results: results
        });
    })
});

// get single result by _id
router.get('id/:id', function(req, res) {
    Result.findOne({_id: req.params._id}, function(err, result) {
        if(err) return res.status(500).json({error: err});
        if(!result) return res.status(404).json({error: 'Result not found'});
        res.json(result);
    })
});

// post single result
router.post('/', function(req, res) {
    var result = new Result();
    result.result_type = req.body.result_type
    result.description = req.body.description
    result.image = req.body.description
    result.ei_point = req.body.ei_point
    result.ns_point = req.body.ns_point
    result.tf_point = req.body.tf_point
    result.pj_point = req.body.pj_point

    result.save(function(err) {
        if(err){
            console.error(err);
            res.status(500).json({error: err});
            return;
        }
        res.status(200).json({
            resultCode: 1,
            message: "Successfully created",
            _id: result._id
        });
    });
});

// edit single result by _id
router.put('/:index', function(req, res) {
    Result.findOne({index: req.params.index}, function(err, result) {
        if(err) return res.status(500).json({error: err});
        result.result_type = req.body.result_type
        result.description = req.body.description
        result.image = req.body.description
        result.save(function(err) {
            if(err){
                console.error(err);
                res.status(500).json({error: err});
                return;
            }
            res.status(204).end()
        })
    });
});

// delete single result by _id 
router.delete('/:id', function(req, res, next){
    Result.deleteOne({ _id: req.params.id }, function(err, output){
        if(err) {
            res.status(500).json({ error: err });
            return
        }
        res.status(204).end()
    })
});

module.exports =  router;