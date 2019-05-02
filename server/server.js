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
