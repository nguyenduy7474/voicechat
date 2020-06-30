const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));
const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/voicechat'
});

app.use('/peerjs', peerServer);
var port = process.env.PORT || 9000
server.listen(port);
console.log("port dang chay la: " + port)