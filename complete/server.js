// Express
var express = require('express')
  , http = require('http')
  , app = express();

// public 以下を配信するサーバ
app.use(express.static(__dirname + '/public'));

// ポート 3000 で起動
var server = http.createServer(app).listen(3000);
console.log('server start:', 3000);
