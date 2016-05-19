var
  browsersync  = require('browser-sync').create(),
  del          = require('del'),
  gulp         = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat       = require('gulp-concat'),
  sass         = require('gulp-sass'),
  sourcemaps   = require('gulp-sourcemaps'),
  uglify       = require('gulp-uglify'),
  dev          = {
    files: [
           './js/vendor/',
           './img/',
           './favicon.ico',
           './*.txt',
           './*.html',
           './*.png',
           './*.xml'
    ],
    css:   './scss/main.scss',
    js: [
           './js/plugins.js',
           './js/main.js'
    ]
  },
  dist         = {
    root:  './site/',
    files: distFiles,
    css:   './site/css/',
    js:    './site/js/',
  };

function distFiles() {
  return dev.files.map(function(f) {
    return dist.root + f.substr(2);
  });
}

gulp.task('scss', function() {
  return gulp
    .src(dev.css)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dist.css));
});

gulp.task('js', function() {
  return gulp
    .src(dev.js)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dist.js));
});

gulp.task('clean', function () {
  del.sync(dist.files());
});

gulp.task('dist', ['clean'], function () {
  return gulp
    .src(dev.files)
    .pipe(gulp.dest(dist.root));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**', ['scss']);
  gulp.watch(dev.js,      ['js']);
  gulp.watch(dev.files,   ['dist']);
  gulp.watch('./scss/**', browsersync.reload);
  gulp.watch(dev.js,      browsersync.reload);
  gulp.watch(dev.files,   browsersync.reload);
});

gulp.task('server', function() {
  browsersync.init({
    server: {
      baseDir: dist.root,
    },
    port:   4000,
    notify: false,
    open:   false
  });
});

gulp.task('default', ['scss', 'js', 'dist', 'watch', 'server']);
