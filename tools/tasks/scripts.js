const gulp         = require('gulp')
const babel        = require('gulp-babel')
const sourcemaps   = require('gulp-sourcemaps')

const paths = require('../paths')

function processingScripts() {
  return gulp.src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.js))
}

module.exports = processingScripts