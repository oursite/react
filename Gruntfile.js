'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var config = {
    app : 'app',
    dist : 'dist'
  }

  // Project configuration.
  grunt.initConfig({
    config : config,

    copy : {
      dist : {
        files : {
          //key : target, value : source
          '<%= config.dist %>/index.html' : '<%= config.app %>/index.html',
          '<%= config.dist %>/js/index.js' : '<%= config.app %>/js/index.js'
        }
          // src : '<%= config.app %>/index.html',   //soource file, it could be array format
          // dest : '<%= config.dist %>/index.html'  //target file
        
      }
    },

    clean : {
      dist : {
        src : ['<%= config.dist %>/index.html', '<%= config.dist %>/js/index.js'],   //soource file
      }
    }

    // pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // // 加载包含 "uglify" 任务的插件。
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // // 默认被执行的任务列表。
  // grunt.registerTask('default', ['uglify']);

};