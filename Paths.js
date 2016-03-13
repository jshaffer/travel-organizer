"use strict";

//dependencies
const path = require("path");

//folders
const wwwRoot = path.join(__dirname, "www"),
    sassFolder = path.join(wwwRoot, "sass"),
    cssFolder = path.join(wwwRoot, "css"),
    jsFolder = path.join(wwwRoot, "js");

//files
const indexFile = path.join(wwwRoot, "html/index.html");
let sassFiles = {};

sassFiles[path.join(cssFolder, "index.css")] = path.join(sassFolder, "index.scss");

module.exports = {
    indexFile: indexFile,
    cssFolder: cssFolder,
    sassFolder: sassFolder,
    sassFiles: sassFiles,
    jsFolder: jsFolder
};