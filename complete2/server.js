// Express
var express = require('express')
  , http = require('http')
  , app = express();

// public 以下を配信するサーバ
app.use(express.static(__dirname + '/public'));

// ポート 3000 で起動
var server = http.createServer(app).listen(3000);
console.log('server start:', 3000);


// Socket.IO
var io = require('socket.io')
  , io = io.listen(server);

// クライアントが接続してきたあと
io.sockets.on('connection', function(socket) {
  // メッセージを受信したら
  socket.on('message', function(data) {
    // 全てのクライアントに送り返す
    io.sockets.emit('message', data);
    console.log(data);
  });
});
