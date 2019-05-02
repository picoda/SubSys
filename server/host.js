const express = require("express");
const cors = require('cors');
const expressApp = express();
const bodyParser = require("body-parser");
const controller = require('../js/server/controller');

expressApp.use(bodyParser({limit: '50mb'}));
expressApp.use(bodyParser.urlencoded({limit: '50mb'}));


expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(controller);


expressApp.listen(5001, () => console.log("Express Server is Running"));


/*const WebSocket = require('ws');
const fs = require('fs');
const BSON = require('bson');
const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', function connection(ws, req) {

  console.log(url.parse(req.url, true).query);

  ws.on('message', function incoming(message) {
  });

  ws.send('something');
  
});


function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}*/