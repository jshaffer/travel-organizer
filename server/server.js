"use strict";

let config = require("./config"),
    serveStatic = require("./staticFileServer"),
    apiServer = require("./apiServer")();

const http = require("http"),
    app = require("express")();

app.startServer = function() {
    http.createServer(app).listen(config.port, function() {
        console.log("web server running on port: " + config.port);
    });
};

app.use("/api", apiServer); //must precede serveStatic
serveStatic.init(app, config);

module.exports = {
    app: app
};