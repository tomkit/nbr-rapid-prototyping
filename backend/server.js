var http = require('http');
var express = require('express');
var app = express();
var cons = require('consolidate');
var routes = require('./routes');

app.set('views', __dirname + '/../frontend/views');
app.engine('html', cons.underscore);
app.set('view engine', 'underscore');
app.use(express.static(__dirname + '/../frontend/public'));
app.use(app.router);
routes.load(app);
app.listen(9000);

process.on('uncaughtException', function(e) {
    console.log('Uncaught exception:' + e, e.stack);
});


