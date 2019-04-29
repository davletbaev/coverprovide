const gulp         = require('gulp')
const changed      = require('gulp-changed')

const paths = require('../paths')

function processingFonts() {
  return gulp.src(paths.src.fonts)
    .pipe(changed(paths.dist.fonts))
    .pipe(gulp.dest(paths.dist.fonts))
}

module.exports = processingFonts