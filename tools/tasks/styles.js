const gulp         = require('gulp')
const sass         = require('gulp-sass')
const postcss      = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexbugs     = require('postcss-flexbugs-fixes')
const sourcemaps   = require('gulp-sourcemaps')

const paths = require('../paths')
const browsersync = require('../browsersync')

function processingStyles() {
  const plugins =  [ autoprefixer, flexbugs ]

  return gulp.src(paths.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./node_modules/include-media/dist/']
    }))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browsersync.reload({ stream: true }));
}

module.exports = processingStyles