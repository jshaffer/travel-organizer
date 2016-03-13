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

app.use("/js", express.static(config.jsFolder, {
    setHeaders: function(res, filePath) {
        res.setHeader("Content-Type", "text/javascript");
        if (/.gz.js$/.test(filePath)) {
            res.setHeader("Content-Encoding", "gzip");
        }
    }
}));

app.use("/css", express.static(config.cssFolder, {
    setHeaders: function(res, filePath) {
        res.setHeader("Content-Type", "text/css");
        if (/.gz.css$/.test(filePath)) {
            res.setHeader("Content-Encoding", "gzip");
        }
    }
}));

app.use("/", function(req, res) {
    res.sendFile(config.indexFile);
});

module.exports = {
    app: app
};