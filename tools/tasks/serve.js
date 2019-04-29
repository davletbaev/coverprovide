const gulp         = require('gulp')

const paths = require('../paths')
const browsersync = require('../browsersync')

function serve() {
  gulp.watch(paths.watch.html, gulp.series('views', function UpdatingPage(done) {
    browsersync.reload()
    done()
  }))
  gulp.watch(paths.watch.css, gulp.series('styles'))
  gulp.watch(paths.watch.js, gulp.series('scripts', function UpdatingPage(done) {
    browsersync.reload()
    done()
  }))
}

module.exports = serve