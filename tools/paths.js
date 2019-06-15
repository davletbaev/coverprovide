const paths = {
  src: {
    html: 'src/html/**/[^_]*.html',
    css: 'src/sass/styles.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*.{jpg,jpeg,png,gif,svg,webp}',
    fonts: 'src/fonts/**/*.{woff,woff2}'
  },
  watch: {
    html: 'src/html/**/*.html',
    css: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*.{jpg,jpeg,png,gif,svg,webp}',
    fonts: 'src/fonts/**/*.{woff,woff2}'
  },
  dist: {
    html: 'docs',
    css: 'docs/css',
    js: 'docs/js',
    images: 'docs/img',
    fonts: 'docs/fonts'
  }
}

module.exports = paths