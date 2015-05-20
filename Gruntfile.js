module.exports = function(grunt) {

	
	grunt.initConfig({
		connect: {
		    server: {
		      options: {
			        port: 9000,
			        base: 'app',
			        keepalive:true,
			        livereload:true
		      }
		    }
		},
	    ts: {
	      default : {

	        src: ["app/*.ts"],
	        options: {
		        module: "commonjs",
		        target: "es5",
		        verbose: true,
		        failOnTypeErrors: false
		      }
	      }
	  	}
    
	});

	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask("default",['ts','connect']);
}