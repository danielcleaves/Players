// Require the Express Module
var express = require("express");
// Create an Express App
var app = express();
// Require body-parser (to recieve post data from clients)
var bodyParser = require("body-parser");
// Integrate body-parser with our App
var path = require('path');

app.use(express.static(path.join(__dirname, "./static")));

app.use(bodyParser.urlencoded());
// Setting our Static Folder Directory

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})


