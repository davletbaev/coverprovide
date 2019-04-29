const gulp         = require('gulp')
const changed      = require('gulp-changed')

const paths = require('../paths')

function processingImages() {
  return gulp.src(paths.src.images)
    .pipe(changed(paths.dist.images))
    .pipe(gulp.dest(paths.dist.images))
}

module.exports = processingImages