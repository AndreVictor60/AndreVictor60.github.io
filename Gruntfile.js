module.exports = function(grunt) {
  // Configuration de Grunt
  grunt.initConfig({
    cssmin: {
      target: {
       files: {
         'assets/css/document.min.css': ['assets/css/documents.css'],
       }
     }
    }
  });
  // Définition des tâches Grunt
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('css','cssmin');
};
