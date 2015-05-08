var config = require('./config')
	,express = require('express')
	,app = express()
	,httpProxy = require('http-proxy')
;

app.use(express.static(__dirname + '/../public', {index: 'index.html'}));

var proxy = httpProxy.createProxyServer({});

app.use(function (req, res) {
	proxy.web(req, res, { target: 'http://m.agar.io' });
});

var server = app.listen(config.port, config.host, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});
