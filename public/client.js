$(function() {
  var socket = io.connect()
    , $ok = $('#ok')
    , $message = $('#message')
    , $messages = $('#messages')
    ;

  $ok.on('click', function() {
    var message = $message.val();
    console.log('input:', message);
    socket.emit('message', message);
  });

  socket.on('message', function(data) {
    console.log('received:', data);
    var $li = $('<li>').text(data);
    $messages.append($li);
  });
});
