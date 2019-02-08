module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass', 'cssmin', 'concat'],
			}
		},
		concat: {
			options: {
				banner: '/* Author: <%= pkg.author.name %> */\n' + '/* Created with love in <%= pkg.author.url %> */\n\n',
				footer: '\n/* Updated on: <%= grunt.template.today("dS mmm, h:MM:ss TT") %> */',
			},
			dist: {
				src: ['css/font.min.css', 'css/style.min.css'],
				dest: 'css/main.css'
			}
		},
		cssmin: {
			target: {
				files:{
					'css/style.min.css' : 'css/style.css',
					'css/font.min.css' : 'css/font.css'
				}
			}
		},
		sass: {
			compile: {
				files: {
					'css/style.css' : 'sass/style.scss',
					'css/font.css' : 'sass/font.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'watch']);
}