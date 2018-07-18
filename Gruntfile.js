module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                style: 'compressed',
            
                sourcemap: 'none'
                },
                files: {
                'dist/grid-framework/main.min.css': [
                    'sass/main.scss']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'assets/build/app.min.js': ['assets/js/**/*.js']
                },
            }
        },
        watch: {
        options: {
            livereload: true
        },
        sass: {
            files: ['sass/**/*.scss'],
            tasks: ['sass']
        },
        js: {
            files: ['assets/js/**/*.js'],
            tasks: ['jshint', 'uglify']
        },
        html: {
            files: ['*.html']
        }
        },
        clean: {
            dist: ['assets/build/app.min.css','assets/build/app.min.js']
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', ['clean','sass','uglify']);
};