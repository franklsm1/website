/* jshint node: true */
'use strict';
var express = require('express'),
    logger = require('morgan'),
    app = express(),
    homeTemplate = require('jade').compileFile(__dirname + '/src/templates/homepage.jade'),
    resumeTemplate = require('jade').compileFile(__dirname + '/src/templates/resume.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    try {
        var html = homeTemplate({title: 'Home'});
        res.send(html);
    } catch (e) {
        next(e);
    }
});

app.get('/resume', function (req, res, next) {
    try {
        var html = resumeTemplate({title: 'Resume'});
        res.send(html);
    } catch (e) {
        next(e);
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});