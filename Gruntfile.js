module.exports = function (){
  grunt.initConfig({
    less:{
      compile:{
        files:{ 'dist/compiled.css': 'css/*.less' }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);
};
