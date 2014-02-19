var http = require('http'),
		path = require('path'),
    port = process.env.PORT || 3000,
    connect = require('connect');

var app = connect()
  .use(connect.static(__dirname))
  .use(connect.directory('css'))
  .use(connect.directory('images'));

http.createServer(app).listen(port);
console.log('Listening on port %s', port);
