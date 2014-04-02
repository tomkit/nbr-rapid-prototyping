module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        react: {
            files: {
                expand: true,
                cwd: 'backend/views',
                src: ['**/*.jsx'],
                dest: 'backend/views',
                ext: '.js'
            }
        },

        watch: {
            react: {
                files: 'backend/views/*.jsx',
                tasks: ['react']
            }
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['backend/views/**/*.jsx'],
                dest: 'scripts/app.built.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'react',
        'watch'
    ]);
};
