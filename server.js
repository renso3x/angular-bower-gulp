var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

/**
 * Development Settings
 */

if(app.get('env') === 'development') {
	app.use(express.static(__dirname + '/')); // serve static files
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
	app.use(bodyParser.json());                                     // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride());

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + '/app/index.html'));
	});

	app.listen('9090', function() {
		console.log("App launch in port: 9090!");
	});
}

/**
 * Production Settings
 */

if(app.get('env') === 'production') {
	app.use(express.static(path.join(__dirname, '/dist/')));
}
