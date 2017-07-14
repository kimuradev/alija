var config = require('../config');
if(!config.tasks.js) return;

var gulp        = require('gulp');
var htmlmin     = require('gulp-htmlmin');
var rename      = require('gulp-rename');
var path        = require('path');

var paths = {
  src: path.join(config.tasks.html.src, '/*.{' + config.tasks.html.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.html.dest)
};

var htmlTask = function() {
  return gulp.src(paths.src)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulp.dest('./'));
};

gulp.task('html', htmlTask);
module.exports = htmlTask;
