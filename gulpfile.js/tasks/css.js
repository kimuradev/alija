var config = require('../config');
if(!config.tasks.css) return;

var gulp      = require('gulp');
var cssmin    = require('gulp-cssmin');
var rename    = require('gulp-rename');
var concat    = require('gulp-concat');
var path      = require('path');

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  srcFonts: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.fontExtensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
};

gulp.task('cssTask', function () {
  gulp.src(paths.src)
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('cssVendorTask', function () {
  gulp.src('./vendor/**/*.css')
    .pipe(concat('vendor.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./assets/dist/css/vendor'));
});

gulp.task('cssFontsTask', function () {
  gulp.src(paths.srcFonts)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('css', ['cssTask','cssVendorTask','cssFontsTask']);
