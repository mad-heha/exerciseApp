const express = require('express');
const tracker = require('./Tracker/controller');
const path = require("path");

const app = express();

const port = 80;
const server = "localhost";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));
app.use('/Tracker', tracker);
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "/../dist/index.html")) );

app.listen(port);
console.log(`listening on: http://${server}:${port}`);
