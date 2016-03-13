"use strict";

const express = require("express");

let apiRouter = express.Router();

let initRoutes = function() {
    apiRouter.route("/comments")
        .get(function(req, res) {
            res.send([
                {"author": "Pete Hunt", "text": "This is one comment"},
                {"author": "Jordan Walke", "text": "This is *another* comment"}
            ]);
        });
};

module.exports = function() {
    initRoutes();
    return apiRouter;
};