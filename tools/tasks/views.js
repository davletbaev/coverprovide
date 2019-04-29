const gulp     = require('gulp')
const nunjucks = require('gulp-nunjucks')
const rename   = require('gulp-rename')

const paths = require('../paths')

function processingViews() {
  return gulp.src(paths.src.html)
    .pipe(rename({ dirname: '' }))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(paths.dist.html))
}

module.exports = processingViews