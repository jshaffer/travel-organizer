"use strict";

module.exports = function(grunt) {
    let path = require("path");

    grunt.loadTasks("grunt");

    require("load-grunt-config")(grunt, {
        configPath: path.join(process.cwd(), "grunt"),
        init: true,
        loadGruntTasks: {
            pattern: "grunt-*",
            config: require("./package.json"),
            scope: "devDependencies"
        }
    });

    grunt.registerTask("web-server", function() {
        let app = require("./server/server").app;
        app.startServer();
    });

    grunt.registerTask("default", "start a web server on 8080", ["sass", "web-server", "watch"]);
};