module.exports = {
  imagemin: {
          files: [{
              expand: true,
              cwd: 'build/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'build/images/'
          }]
      }
  }
