module.exports = function(grunt){
 
  grunt.initConfig({
      jshint: { /* jshint的参数 */  },
      concat: { /* concat的参数 */  },
      uglify: { /* uglify的参数 */  },
      watch:  { /* watch的参数 */  }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['jshint','concat','uglify']);
  grunt.registerTask('check',['jshint']);
};
