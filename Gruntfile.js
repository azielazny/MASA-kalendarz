'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['assets/js/*.js', 'assets/js/*.js'],//need configure
                dest: 'public/js/concat.js',
            },
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'src/min/'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/styles',
                    ext: '.min.css'
                }]
            }
        },
        //minifikacja html
        htmlmin: {


            dev: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.html'],
                    dest: 'src'
                }]
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                options: {
                    optimizationLevel: 1
                },
                files: [
                    {
                        expand: true,                  // Enable dynamic expansion
                        cwd: 'src/images/',                   // Src matches are relative to this path
                        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                        dest: 'src/images/'                  // Destination path prefix
                    }
                ]
            }
        },
        // templates support
        sass: {
            dist: {
                options: {
                    compass: true,
                    quiet: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/scss',
                    src: ['*.scss'],
                    dest: 'src/styles',
                    ext: '.css'
                }]
            }
        },

        copy: {
            images: {
                files: [
                    {expand: true, cwd: 'assets/images', src: '**', dest: 'src/images/'}
                ]
            },
            templates: {
                files: [
                    {expand: true, cwd: 'assets/templates', src: '**', dest: 'src/'}
                ]
            }
        },

        clean: {
            contents: ['src/styles/*', 'src/images/*', 'src/*.html']
        },


        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass'],
            },
            html: {
                files: ['assets/templates/*.html'],
                tasks: ['copyfiles']
            }
        }

    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('copyfiles', ['copy']);
    grunt.registerTask('images', ['imagemin']);
    grunt.registerTask('htmlminify', ['htmlmin']);
    grunt.registerTask('cssminify', ['cssmin']);
    grunt.registerTask('minific', ['htmlmin', 'cssmin', 'imagemin']);
    grunt.registerTask('build', ['clean', 'sass', 'copy', 'imagemin']);
};