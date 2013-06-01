# socket.io chat-sample

Socket.IO を用いた、超シンプルなチャットのサンプルです。

## デモ

今回のチャットのデモが、 AWS にあげてあります。(そのうち消えます)

http://54.250.126.97:3000/

## 構成

- complete: AWS の Socket.IO サーバを使うチャットの完成品
- complete2: ローカルの Socket.IO サーバを使うチャットの完成品
- handson: ハンズオンのひな形

### 実行

動かしたいディレクトリに移動して、以下を実行します。

```
$ npm install
$ node server.js
```

## ハンズオンの段取り

1. handson 以下にひな形があるので、これを元に実装をします。
2. まず npm install の実行
3. express が起動するのを確認
4. AWS の Socket.IO サーバを使ってチャットのクライアントを実装
5. 完成品が complete のもの
6. (余力/興味のある人) ローカルの Socket.IO サーバを実装
7. 完成品が complete2 のもの


## AWS の Socket.IO サーバ(チューター向け)

`54.250.126.97:3000` で complete2 が起動しています。

http://54.250.126.97:3000/socket.io/socket.io.js を読み込んで
http://54.250.126.97:3000/ に connect することで、 AWS のサーバに接続出来ます。

API は以下です。

```js
socket.emit('message', 'hello world'); // メッセージの送信

socket.on('message', callback); // ブロードキャストメッセージの受信(自分のも含みます)
```

## サーバがない人

mac なら SimpleHTTPServer とか使えますが、
一応、ローカル(file://) で index.html を開いても動くことは確認しました。
