// サーバに接続(AWS)
var socket = io.connect('http://54.250.126.97:3000/');
$(function() {
  // 送信
  $('#ok').on('click', function() { // クリックしたら
    var message = $('#message').val(); // 中身を取って
    socket.emit('message', message); // サーバに送信
  });

  // 受信
  socket.on('message', function(data) { // 受信したら
    var $li = $('<li>', { text: data }); // li を作って
    $('#messages').append($li); // ul に追加
  });
});
