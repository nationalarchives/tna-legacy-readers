module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'css/tna-base.css': 'sass/base-sass.scss',
                    'css/tna-forms.css': 'sass/forms-sass.scss',
                    'css/reading-rooms.css': 'sass/reading-rooms.scss'
                    'css/ie7.css': 'sass/ie7.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'css/tna-base.css': ['css/tna-base.css'],
                    'css/tna-forms.css': ['css/tna-forms.css'],
                    'css/reading-rooms.css': ['css/reading-rooms.css'],
                    'css/ie7.css': ['css/ie7.css']
                }
            }
        },
        pug: {
            compile: {
                options: {
                    pretty: true,
                },
                files: {
                    'test.html': 'dest.pug'
                }
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            css: {
                files: 'sass/*.scss',
                tasks: ['sass', 'cssmin']
            },
            pug: {
                files: 'dest.pug',
                tasks: ['pug']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', "Convert Jade templates into html templates", ['sass', 'cssmin', 'pug', 'watch']);

};