module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			src: {
				files: ['sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			livereload: {
      			options: { livereload: true },
     			files: ['public/**/*', 'views/**/*']
     		}
		},
		sass: {
			dist: {
				files: {
					'public/stylesheets/style.css' : 'sass/style.scss'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('default', ['sass']);
}