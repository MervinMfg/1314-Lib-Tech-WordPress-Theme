module.exports = function (grunt) {
    // VARIABLES
    var mainLibJS = [
        '_/js/lib/jquery.fitvids.js',
        '_/js/lib/jquery.bxslider.js',
        '_/js/lib/jquery.magnific-popup.js',
        '_/js/lib/jquery.treeview.js',
        '_/js/lib/jquery.isotope.js',
        '_/js/lib/froogaloop.js'
    ];
    var snowboardbuilderLibJS = [
        '_/js/lib/GSAP/utils/Draggable.js',
        '_/js/lib/GSAP/plugins/ThrowPropsPlugin.js',
        '_/js/lib/GSAP/TweenMax.js'
    ];
    var mainLibCSS = [
        '_/css/lib/jquery.bxslider.css',
        '_/css/lib/jquery.isotope.css',
        '_/css/lib/jquery.magnific-popup.css',
        '_/css/lib/jquery.treeview.css'
    ];
    // PROJECT CONFIG
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: {
                    'style.dev.css': 'style.scss',
                    '_/css/libtech.snowboardbuilder.dev.css': '_/css/libtech.snowboardbuilder.scss'
                },
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    lineNumbers: true
                }
            },
            dist: {
                files: {
                    'style.css': 'style.scss',
                    '_/css/libtech.snowboardbuilder.min.css': '_/css/libtech.snowboardbuilder.scss'
                },
                options: {
                    style: 'compact',
                    debug: false
                }
            }
        },
        concat: {
            dist: {
                files: {
                    '_/css/lib/libtech.main.lib.min.css': mainLibCSS,
                    '_/js/lib/libtech.main.lib.min.js': mainLibJS,
                    '_/js/lib/libtech.snowboardbuilder.lib.min.js': snowboardbuilderLibJS,
                }
            },
        },
        cssmin: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
                },
                files: {
                    'style.min.css': ['style.css'],
                    '_/css/lib/libtech.main.lib.min.css': ['_/css/lib/libtech.main.lib.min.css'],
                    '_/css/libtech.snowboardbuilder.min.css': ['_/css/libtech.snowboardbuilder.min.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
            },
            dist: {
                files: {
                    '_/js/lib/libtech.main.lib.min.js': ['_/js/lib/libtech.main.lib.min.js'],
                    '_/js/libtech.main.min.js': ['_/js/libtech.main.js'],
                    '_/js/lib/libtech.snowboardbuilder.lib.min.js': ['_/js/lib/libtech.snowboardbuilder.lib.min.js'],
                    '_/js/libtech.snowboardbuilder.min.js': ['_/js/libtech.snowboardbuilder.js']
                }
            }
        },
        watch: {
            js: {
                files: ['_/js/*.js', '_/js/lib/*.js'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['*.scss', '_/css/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    });
    // NPM TASKS
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // GRUNT TASKS
    grunt.registerTask('run', ['sass:dev', 'scriptblock']);//default
    grunt.registerTask('build', ['sass:dist', 'concat', 'cssmin', 'uglify']);
    // Automate creation of scriptblock to be loaded in footer
    grunt.registerTask('scriptblock', function(){
        var html, files, htmlMain, htmlCSS;
        // GENERATE MAIN SITE SCRIPT INCLUDES
        html = htmlCSS = '<?php // AUTO-GENERATED BY GRUNT. To change this block edit Gruntfile.js, not this file! ?>\n';
        mainLibJS.forEach(function(path) {
            files = grunt.file.expand(path);
            files.forEach(function(file){
                html += '<script type="text/javascript" src="/wp-content/themes/libtech/' + file + '"></script>\n\t';
            });
        });
        htmlMain = html;
        htmlMain += '<script type="text/javascript" src="/wp-content/themes/libtech/_/js/libtech.main.js"></script>\n';
        grunt.file.write('_/inc/js-main.php', htmlMain);
        // GENERATE SNOWBOARD BUIDLER SCRIPT INCLUDES
        snowboardbuilderLibJS.forEach(function(path) {
            files = grunt.file.expand(path);
            files.forEach(function(file){
                html += '<script type="text/javascript" src="/wp-content/themes/libtech/' + file + '"></script>\n\t';
            });
        });
        html += '<script type="text/javascript" src="/wp-content/themes/libtech/_/js/libtech.main.js"></script>\n\t';
        html += '<script type="text/javascript" src="/wp-content/themes/libtech/_/js/libtech.snowboardbuilder.js"></script>\n';
        grunt.file.write('_/inc/js-snowboardbuilder.php', html);
        // GENERATE MAIN CSS INCLUDES
        mainLibCSS.forEach(function(path) {
            files = grunt.file.expand(path);
            files.forEach(function(file){
                htmlCSS += '<link href="/wp-content/themes/libtech/' + file + '" rel="stylesheet" type="text/css" />' + "\n\t";
            });
        });
        htmlCSS += '<link href="/wp-content/themes/libtech/style.dev.css" rel="stylesheet" type="text/css" />\n';
        grunt.file.write('_/inc/css-main.php', htmlCSS);
    });
};