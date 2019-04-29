const browsersync  = require('browser-sync')

const bs = browsersync.init({
    server: {
      baseDir: "./dist"
    },
    https: true
});

module.exports = bs