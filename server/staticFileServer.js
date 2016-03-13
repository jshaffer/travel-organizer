"use strict";

const express = require("express");

let init = function(app, config) {
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
};

module.exports = {
    init: init
};