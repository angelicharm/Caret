module.exports = function(grunt) {
  
  //need to install less and watch modules
  
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.initConfig({
    less: {
      all: {
        files: {
          "css/editor.css": [
            "css/values.less",
            "css/base.less",
            "css/editor.less",
            "css/ui.less",
            "css/tabs.less",
            "css/dialog.less"
          ]
        }
      }
    },
    watch: {
      css: {
        files: ["css/*.less"],
        tasks: ["less"]
      },
      options: {
        spawn: false
      }
    }
  });
  
  grunt.registerTask("default", ["less", "watch"]);
  
};