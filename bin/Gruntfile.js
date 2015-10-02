module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: false
			},
			css: {
				files: ['../assets/stylus/*.styl'],
				tasks: ['stylus']
			},
			html: {
				files: ['../assets/jade/*.jade'],
				tasks: ['jade']
			}
		},
		stylus: {
			compile: {
				options: {
					paths: ['../assets/stylus'],
					relativeDest: '../../assets/styles'
				},
				files: {
					'../assets/styles/style.css': '../assets/stylus/*.styl'
				}
			}
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					'../index.html':['../assets/jade/*.jade']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};