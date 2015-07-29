/**
 * Created by LamDo on 7/29/15.
 */
'use strict';
module.exports = function(grunt) {

    grunt.initConfig({

        clean: ['build'],

        concat: {
            dist: {
                dest: 'build/react-flux.js',
                src: [  'src/**/*.js']
            }
        },


        jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                }
            }
        },
        watch: {
            options: {
                livereload: false
            },
            src: {
                files: ['src/**/*.js'],
                tasks: ['clean', 'concat']
            },
            test: {
                files: ['test/**/*.tests.js'],
                tasks: ['jasmine']
            }
        },

        'http-server': {
            'dev': {
                root: '.',
                port: function() {
                    return 8282;
                },
                host: "0.0.0.0",
                cache: 1,
                showDir: true,
                autoIndex: true,
                ext: "html",
                runInBackground: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['http-server']);

};