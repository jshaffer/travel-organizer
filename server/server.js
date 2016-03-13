"use strict";

let config = require("./config");

let http = require("http"),
    express = require("express"),
    app = express();

app.startServer = function() {
    http.createServer(app).listen(config.port, function() {
        console.log("web server running on port: " + config.port);
    });
};

app.use("/", function(req, res) {
    res.sendFile(config.indexFile);
});

module.exports = {
    app: app
};