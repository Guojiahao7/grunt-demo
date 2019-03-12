module.exports = function (){
  grunt.initConfig({
    less:{
      compile:{
        files:{ 'css/':'less/' }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);
};
