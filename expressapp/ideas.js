const express = require('express');
const Idea = require('./idea.js')();

module.exports = (app) => {
    app.route('/idea')
        .get((req, res) => {
            Idea.find({}).select('idea').exec((err, data) => {
                if (!err) {
                    res.json(data);
                } else {
                    res.status(500).end();
                }
            });
        })
        .post((req, res) => {
            let idea = req.body.idea;
            let ideaModel = new Idea({
                idea
            });
            ideaModel.save((err, ideaModel) => {
                if (!err) {
                    console.log(ideaModel);
                    res.json(ideaModel);
                } else {
                    console.log(err);
                    res.status(500).end();
                }
            });
        })
        .delete((req, res) => {

        });
};