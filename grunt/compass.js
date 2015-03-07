module.exports = {
  dev: {                   // Target
    options: {              // Target options
      sassDir: 'dev/scss/',
      cssDir: 'build/css/',
      environment: 'development',
    }
  },
  dist: {                   // Target
    options: {              // Target options
      sassDir: 'dev/scss/',
      cssDir: 'build/css/',
      environment: 'production',
    }
  }
}
