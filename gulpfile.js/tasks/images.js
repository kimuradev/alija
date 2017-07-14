var config = require('../config');
if(!config.tasks.images) return;

var gulp        = require('gulp');
var changed     = require('gulp-changed');
var path        = require('path');
var imagemin    = require('gulp-imagemin');
var gutil       = require('gulp-util');

var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
};

// Options, project specifics
var options = {};
options.imagemin = {
    progressive: true,
    interlaced: true,
    optimizationLevel: 5
};

var imagesTask = function () {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(gutil.env.type === 'prod' ? imagemin(options.imagemin) : gutil.noop()) // Optimize
    .pipe(gulp.dest(paths.dest));
};

gulp.task('images', imagesTask);
module.exports = imagesTask;
