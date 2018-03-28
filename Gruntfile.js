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
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'css/tna-base.css.min': ['css/tna-base.css'],
                    'css/tna-forms.css.min': ['css/tna-forms.css'],
                    'css/reading-rooms.css.min': ['css/reading-rooms.css']
                }
            }
        },
        pug: {
            compile: {
                options: {
                    pretty: true,
                },
                files: {
                    '/tna-legacy-readers/test.html': ['/tna-legacy-readers/dest.pug']
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
                files: '/tna-legacy-readers/dest.pug',
                tasks: ['pug']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'pug', 'watch']);

};