var config = require('../config');
if(!config.tasks.js) return;

var gulp        = require('gulp');
var path        = require('path');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.' + config.tasks.js.extensions),
  dest: path.join(config.root.dest, config.tasks.js.dest)
};

var jsTask = function () {
  gulp.src(paths.src)
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.dest));
};

gulp.task('js', jsTask);
module.exports = jsTask;
