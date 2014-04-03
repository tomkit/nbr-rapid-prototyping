var React = require('react');
var table = require('./views/table');
var fs = require('fs');
var browserify = require('browserify');
var literalify = require('literalify');
var util = require('util');

function load(app) {
    app.get('/', function(req, res, next) {
        renderPage(res, [{
            some: 'item'
        }]);
    });
    app.get('/bundle.js', function(req, res, next) {
        res.setHeader('Content-Type', 'text/javascript');
        browserify()
            .transform(literalify.configure({react: 'window.React'}))
            .require(__dirname + '/views/table.js', {expose: 'table'})
            .require(__dirname + '/../frontend/public/js/main.js', {expose: 'main'})
            .bundle()
            .pipe(res)
    });
}

function renderPage(res, data) {
    var html = React.renderComponentToString(
        table({
            data: data
        })
    );
    var layout = fs.readFileSync(__dirname + '/layout.html', 'ascii');
    layout = util.format(layout, html, safeStringify({
        data: data
    }));

    res.setHeader('Content-Type', 'text/html');
    res.end(layout);
}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

exports.load = load;
