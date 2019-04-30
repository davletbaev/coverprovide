const browsersync  = require('browser-sync')

const bs = browsersync.init({
    server: {
      baseDir: "./dist",
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    https: true
});

module.exports = bs