"use strict";

let path = require("path"),
    PATHS = require("../Paths");

module.exports = {
    css: {
        files: path.join(PATHS.sassFolder, "**", "*.scss"),
        tasks: ["sass", "cssmin"]
    }
};