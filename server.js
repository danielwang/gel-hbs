var http = require("http");
var fs = require("fs");

var handlebars = require('handlebars'),
    layouts = require('handlebars-layouts');

// var template = fs.readFileSync("src/tpl/index.hbs", "utf8");


// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('layout', fs.readFileSync('src/tpl/layout.hbs', 'utf8'));

// Compile template
var template = handlebars.compile(fs.readFileSync('src/tpl/index.hbs', 'utf8'));

var output = template({
    title: 'Layout Test',
    items: [
        'apple',
        'orange',
        'banana'
    ]
});

function onRequest(req, res) {

	res.writeHead(200, {"Context-Type": "text/html"});
	res.write(output);
	res.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server has started on port 8000.");

//console.log(output);
