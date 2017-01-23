module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //plugin to check errors in js files
        jshint: {
            files: ['Gruntfile.js', 'www/js/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        //plugin to minify css files.
        cssmin: {
            add_banner: {
                options: {
                    banner: '/* minified css file */'
                },
                files: {
                    //Path to output of the minified css and the css file to minify.
                    'www/css/cssminified.css': ['www/css/**/*.css']
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify"]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./www/js/module.js": ["./www/js/index.js"]
                }
            }
        },
    });

  //LOAD YOUR GRUNT TASKS HERE
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-browserify");

  //CALL YOUR GRUNT TASKS HERE
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['clean', 'cssmin', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
  grunt.registerTask("build", ["browserify"]);
};
