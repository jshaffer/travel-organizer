"use strict";

let PATHS = require("../Paths");

module.exports = {
    main: {
        options: {
            sourcemap: "none"
        },
        files: PATHS.sassFiles
    }
};